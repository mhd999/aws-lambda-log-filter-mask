An AWS Lambda function that is designed to filter logs to remove sensitive data, mask any sensitive information, and then post the resulting data to a separate log group.


## Provision the Lambda using Terraform
```
module "log-filter-mask" {
  source = "github.com/telia-oss/aws-lambda-log-filter-mask?ref=v0.0.3"

  source_log_group      = "/aws/appsync/apis/abc"
  destination_log_group = "aws/sensitive/data"
  sensitive_words       = "password|\"password\"|new_password|\"new_password\""
  placeholder           = "*****"
  filter_pattern        = "?password ?new_password"
}
```
## Environment variables

| Variable              | Description | Example                                     |
| --------------------- | ------------|---------------------------------------------|
| DESTINATION_LOG_GROUP | Name of AWS cloudwatch destination log group              | aws/sensitive/data
| SOURCE_LOG_GROUP      | Name of AWS cloudwatch source log group                   | aws/appsync/apis/abc
| SENSITIVE_WORDS       | The sensitive words in logs to mask                       | password|"password"|new_password|"new_password"
| PLACEHOLDER           | The value to replace the value of the senstive words with | "*****"
