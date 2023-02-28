variable "aws_region" {
  default = "eu-west-1"
}
variable "source_log_group" {}
variable "destination_log_group" {}
variable "filter_pattern" {
  default = ""
}

provider "aws" {
  region = var.aws_region
}

data "archive_file" "filter_and_mask_logs" {
  type        = "zip"
  source_file = "${path.module}/handler.js"
  output_path = "filter-and-mask-logs.zip"
}


data "aws_cloudwatch_log_group" "source_log_group" {
  name = var.source_log_group
}

resource "aws_cloudwatch_log_group" "destination_log_group" {
  name              = var.destination_log_group
  retention_in_days = 60
}

resource "aws_lambda_function" "filter_and_mask_logs" {
  filename      = "filter-and-mask-logs.zip"
  function_name = "filter-and-mask-logs"
  role          = aws_iam_role.lambda.arn
  handler       = "handler.handler"
  runtime       = "nodejs16.x"

  environment {
    variables = {
      SOURCE_LOG_GROUP = data.aws_cloudwatch_log_group.source_log_group.name
      # FILTER_PATTERN         = "password"
      DESTINATION_LOG_GROUP = aws_cloudwatch_log_group.destination_log_group.name
    }
  }

  depends_on = [
    aws_iam_role_policy_attachment.lambda,
    aws_iam_role_policy_attachment.cw_lambda
  ]
}

resource "aws_iam_role" "lambda" {
  name = "mask-filter-lambda"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda" {
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
  role       = aws_iam_role.lambda.name
}

resource "aws_iam_role_policy_attachment" "cw_lambda" {
  policy_arn = aws_iam_policy.cw.arn
  role       = aws_iam_role.lambda.name
  depends_on = [
    aws_iam_policy.cw
  ]
}


resource "aws_iam_policy" "cw" {
  name = "cw-policy"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "logs:DeleteLogStream"
      ],
      "Effect": "Allow",
      "Resource": "${data.aws_cloudwatch_log_group.source_log_group.arn}:*"
    }
  ]
}
EOF
}

resource "aws_lambda_permission" "allow_cloudwatch_logs" {
  statement_id  = "AllowExecutionFromCloudWatchLogs"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.filter_and_mask_logs.function_name
  principal     = "logs.amazonaws.com"
  source_arn    = "${data.aws_cloudwatch_log_group.source_log_group.arn}:*"
}

resource "aws_cloudwatch_log_subscription_filter" "filter_logs" {
  depends_on      = [aws_lambda_permission.allow_cloudwatch_logs]
  name            = "filter-and-mask-logs"
  filter_pattern  = var.filter_pattern
  log_group_name  = var.source_log_group
  destination_arn = aws_lambda_function.filter_and_mask_logs.arn
}
