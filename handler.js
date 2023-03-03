/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AssociateKmsKeyCommand": () => (/* reexport */ AssociateKmsKeyCommand),
  "AssociateKmsKeyRequestFilterSensitiveLog": () => (/* reexport */ AssociateKmsKeyRequestFilterSensitiveLog),
  "CancelExportTaskCommand": () => (/* reexport */ CancelExportTaskCommand),
  "CancelExportTaskRequestFilterSensitiveLog": () => (/* reexport */ CancelExportTaskRequestFilterSensitiveLog),
  "CloudWatchLogs": () => (/* reexport */ CloudWatchLogs),
  "CloudWatchLogsClient": () => (/* reexport */ CloudWatchLogsClient),
  "CloudWatchLogsServiceException": () => (/* reexport */ CloudWatchLogsServiceException),
  "CreateExportTaskCommand": () => (/* reexport */ CreateExportTaskCommand),
  "CreateExportTaskRequestFilterSensitiveLog": () => (/* reexport */ CreateExportTaskRequestFilterSensitiveLog),
  "CreateExportTaskResponseFilterSensitiveLog": () => (/* reexport */ CreateExportTaskResponseFilterSensitiveLog),
  "CreateLogGroupCommand": () => (/* reexport */ CreateLogGroupCommand),
  "CreateLogGroupRequestFilterSensitiveLog": () => (/* reexport */ CreateLogGroupRequestFilterSensitiveLog),
  "CreateLogStreamCommand": () => (/* reexport */ CreateLogStreamCommand),
  "CreateLogStreamRequestFilterSensitiveLog": () => (/* reexport */ CreateLogStreamRequestFilterSensitiveLog),
  "DataAlreadyAcceptedException": () => (/* reexport */ DataAlreadyAcceptedException),
  "DataProtectionStatus": () => (/* reexport */ DataProtectionStatus),
  "DeleteDataProtectionPolicyCommand": () => (/* reexport */ DeleteDataProtectionPolicyCommand),
  "DeleteDataProtectionPolicyRequestFilterSensitiveLog": () => (/* reexport */ DeleteDataProtectionPolicyRequestFilterSensitiveLog),
  "DeleteDestinationCommand": () => (/* reexport */ DeleteDestinationCommand),
  "DeleteDestinationRequestFilterSensitiveLog": () => (/* reexport */ DeleteDestinationRequestFilterSensitiveLog),
  "DeleteLogGroupCommand": () => (/* reexport */ DeleteLogGroupCommand),
  "DeleteLogGroupRequestFilterSensitiveLog": () => (/* reexport */ DeleteLogGroupRequestFilterSensitiveLog),
  "DeleteLogStreamCommand": () => (/* reexport */ DeleteLogStreamCommand),
  "DeleteLogStreamRequestFilterSensitiveLog": () => (/* reexport */ DeleteLogStreamRequestFilterSensitiveLog),
  "DeleteMetricFilterCommand": () => (/* reexport */ DeleteMetricFilterCommand),
  "DeleteMetricFilterRequestFilterSensitiveLog": () => (/* reexport */ DeleteMetricFilterRequestFilterSensitiveLog),
  "DeleteQueryDefinitionCommand": () => (/* reexport */ DeleteQueryDefinitionCommand),
  "DeleteQueryDefinitionRequestFilterSensitiveLog": () => (/* reexport */ DeleteQueryDefinitionRequestFilterSensitiveLog),
  "DeleteQueryDefinitionResponseFilterSensitiveLog": () => (/* reexport */ DeleteQueryDefinitionResponseFilterSensitiveLog),
  "DeleteResourcePolicyCommand": () => (/* reexport */ DeleteResourcePolicyCommand),
  "DeleteResourcePolicyRequestFilterSensitiveLog": () => (/* reexport */ DeleteResourcePolicyRequestFilterSensitiveLog),
  "DeleteRetentionPolicyCommand": () => (/* reexport */ DeleteRetentionPolicyCommand),
  "DeleteRetentionPolicyRequestFilterSensitiveLog": () => (/* reexport */ DeleteRetentionPolicyRequestFilterSensitiveLog),
  "DeleteSubscriptionFilterCommand": () => (/* reexport */ DeleteSubscriptionFilterCommand),
  "DeleteSubscriptionFilterRequestFilterSensitiveLog": () => (/* reexport */ DeleteSubscriptionFilterRequestFilterSensitiveLog),
  "DescribeDestinationsCommand": () => (/* reexport */ DescribeDestinationsCommand),
  "DescribeDestinationsRequestFilterSensitiveLog": () => (/* reexport */ DescribeDestinationsRequestFilterSensitiveLog),
  "DescribeDestinationsResponseFilterSensitiveLog": () => (/* reexport */ DescribeDestinationsResponseFilterSensitiveLog),
  "DescribeExportTasksCommand": () => (/* reexport */ DescribeExportTasksCommand),
  "DescribeExportTasksRequestFilterSensitiveLog": () => (/* reexport */ DescribeExportTasksRequestFilterSensitiveLog),
  "DescribeExportTasksResponseFilterSensitiveLog": () => (/* reexport */ DescribeExportTasksResponseFilterSensitiveLog),
  "DescribeLogGroupsCommand": () => (/* reexport */ DescribeLogGroupsCommand),
  "DescribeLogGroupsRequestFilterSensitiveLog": () => (/* reexport */ DescribeLogGroupsRequestFilterSensitiveLog),
  "DescribeLogGroupsResponseFilterSensitiveLog": () => (/* reexport */ DescribeLogGroupsResponseFilterSensitiveLog),
  "DescribeLogStreamsCommand": () => (/* reexport */ DescribeLogStreamsCommand),
  "DescribeLogStreamsRequestFilterSensitiveLog": () => (/* reexport */ DescribeLogStreamsRequestFilterSensitiveLog),
  "DescribeLogStreamsResponseFilterSensitiveLog": () => (/* reexport */ DescribeLogStreamsResponseFilterSensitiveLog),
  "DescribeMetricFiltersCommand": () => (/* reexport */ DescribeMetricFiltersCommand),
  "DescribeMetricFiltersRequestFilterSensitiveLog": () => (/* reexport */ DescribeMetricFiltersRequestFilterSensitiveLog),
  "DescribeMetricFiltersResponseFilterSensitiveLog": () => (/* reexport */ DescribeMetricFiltersResponseFilterSensitiveLog),
  "DescribeQueriesCommand": () => (/* reexport */ DescribeQueriesCommand),
  "DescribeQueriesRequestFilterSensitiveLog": () => (/* reexport */ DescribeQueriesRequestFilterSensitiveLog),
  "DescribeQueriesResponseFilterSensitiveLog": () => (/* reexport */ DescribeQueriesResponseFilterSensitiveLog),
  "DescribeQueryDefinitionsCommand": () => (/* reexport */ DescribeQueryDefinitionsCommand),
  "DescribeQueryDefinitionsRequestFilterSensitiveLog": () => (/* reexport */ DescribeQueryDefinitionsRequestFilterSensitiveLog),
  "DescribeQueryDefinitionsResponseFilterSensitiveLog": () => (/* reexport */ DescribeQueryDefinitionsResponseFilterSensitiveLog),
  "DescribeResourcePoliciesCommand": () => (/* reexport */ DescribeResourcePoliciesCommand),
  "DescribeResourcePoliciesRequestFilterSensitiveLog": () => (/* reexport */ DescribeResourcePoliciesRequestFilterSensitiveLog),
  "DescribeResourcePoliciesResponseFilterSensitiveLog": () => (/* reexport */ DescribeResourcePoliciesResponseFilterSensitiveLog),
  "DescribeSubscriptionFiltersCommand": () => (/* reexport */ DescribeSubscriptionFiltersCommand),
  "DescribeSubscriptionFiltersRequestFilterSensitiveLog": () => (/* reexport */ DescribeSubscriptionFiltersRequestFilterSensitiveLog),
  "DescribeSubscriptionFiltersResponseFilterSensitiveLog": () => (/* reexport */ DescribeSubscriptionFiltersResponseFilterSensitiveLog),
  "DestinationFilterSensitiveLog": () => (/* reexport */ DestinationFilterSensitiveLog),
  "DisassociateKmsKeyCommand": () => (/* reexport */ DisassociateKmsKeyCommand),
  "DisassociateKmsKeyRequestFilterSensitiveLog": () => (/* reexport */ DisassociateKmsKeyRequestFilterSensitiveLog),
  "Distribution": () => (/* reexport */ Distribution),
  "ExportTaskExecutionInfoFilterSensitiveLog": () => (/* reexport */ ExportTaskExecutionInfoFilterSensitiveLog),
  "ExportTaskFilterSensitiveLog": () => (/* reexport */ ExportTaskFilterSensitiveLog),
  "ExportTaskStatusCode": () => (/* reexport */ ExportTaskStatusCode),
  "ExportTaskStatusFilterSensitiveLog": () => (/* reexport */ ExportTaskStatusFilterSensitiveLog),
  "FilterLogEventsCommand": () => (/* reexport */ FilterLogEventsCommand),
  "FilterLogEventsRequestFilterSensitiveLog": () => (/* reexport */ FilterLogEventsRequestFilterSensitiveLog),
  "FilterLogEventsResponseFilterSensitiveLog": () => (/* reexport */ FilterLogEventsResponseFilterSensitiveLog),
  "FilteredLogEventFilterSensitiveLog": () => (/* reexport */ FilteredLogEventFilterSensitiveLog),
  "GetDataProtectionPolicyCommand": () => (/* reexport */ GetDataProtectionPolicyCommand),
  "GetDataProtectionPolicyRequestFilterSensitiveLog": () => (/* reexport */ GetDataProtectionPolicyRequestFilterSensitiveLog),
  "GetDataProtectionPolicyResponseFilterSensitiveLog": () => (/* reexport */ GetDataProtectionPolicyResponseFilterSensitiveLog),
  "GetLogEventsCommand": () => (/* reexport */ GetLogEventsCommand),
  "GetLogEventsRequestFilterSensitiveLog": () => (/* reexport */ GetLogEventsRequestFilterSensitiveLog),
  "GetLogEventsResponseFilterSensitiveLog": () => (/* reexport */ GetLogEventsResponseFilterSensitiveLog),
  "GetLogGroupFieldsCommand": () => (/* reexport */ GetLogGroupFieldsCommand),
  "GetLogGroupFieldsRequestFilterSensitiveLog": () => (/* reexport */ GetLogGroupFieldsRequestFilterSensitiveLog),
  "GetLogGroupFieldsResponseFilterSensitiveLog": () => (/* reexport */ GetLogGroupFieldsResponseFilterSensitiveLog),
  "GetLogRecordCommand": () => (/* reexport */ GetLogRecordCommand),
  "GetLogRecordRequestFilterSensitiveLog": () => (/* reexport */ GetLogRecordRequestFilterSensitiveLog),
  "GetLogRecordResponseFilterSensitiveLog": () => (/* reexport */ GetLogRecordResponseFilterSensitiveLog),
  "GetQueryResultsCommand": () => (/* reexport */ GetQueryResultsCommand),
  "GetQueryResultsRequestFilterSensitiveLog": () => (/* reexport */ GetQueryResultsRequestFilterSensitiveLog),
  "GetQueryResultsResponseFilterSensitiveLog": () => (/* reexport */ GetQueryResultsResponseFilterSensitiveLog),
  "InputLogEventFilterSensitiveLog": () => (/* reexport */ InputLogEventFilterSensitiveLog),
  "InvalidOperationException": () => (/* reexport */ InvalidOperationException),
  "InvalidParameterException": () => (/* reexport */ InvalidParameterException),
  "InvalidSequenceTokenException": () => (/* reexport */ InvalidSequenceTokenException),
  "LimitExceededException": () => (/* reexport */ LimitExceededException),
  "ListTagsForResourceCommand": () => (/* reexport */ ListTagsForResourceCommand),
  "ListTagsForResourceRequestFilterSensitiveLog": () => (/* reexport */ ListTagsForResourceRequestFilterSensitiveLog),
  "ListTagsForResourceResponseFilterSensitiveLog": () => (/* reexport */ ListTagsForResourceResponseFilterSensitiveLog),
  "ListTagsLogGroupCommand": () => (/* reexport */ ListTagsLogGroupCommand),
  "ListTagsLogGroupRequestFilterSensitiveLog": () => (/* reexport */ ListTagsLogGroupRequestFilterSensitiveLog),
  "ListTagsLogGroupResponseFilterSensitiveLog": () => (/* reexport */ ListTagsLogGroupResponseFilterSensitiveLog),
  "LogGroupFieldFilterSensitiveLog": () => (/* reexport */ LogGroupFieldFilterSensitiveLog),
  "LogGroupFilterSensitiveLog": () => (/* reexport */ LogGroupFilterSensitiveLog),
  "LogStreamFilterSensitiveLog": () => (/* reexport */ LogStreamFilterSensitiveLog),
  "MalformedQueryException": () => (/* reexport */ MalformedQueryException),
  "MetricFilterFilterSensitiveLog": () => (/* reexport */ MetricFilterFilterSensitiveLog),
  "MetricFilterMatchRecordFilterSensitiveLog": () => (/* reexport */ MetricFilterMatchRecordFilterSensitiveLog),
  "MetricTransformationFilterSensitiveLog": () => (/* reexport */ MetricTransformationFilterSensitiveLog),
  "OperationAbortedException": () => (/* reexport */ OperationAbortedException),
  "OrderBy": () => (/* reexport */ OrderBy),
  "OutputLogEventFilterSensitiveLog": () => (/* reexport */ OutputLogEventFilterSensitiveLog),
  "PutDataProtectionPolicyCommand": () => (/* reexport */ PutDataProtectionPolicyCommand),
  "PutDataProtectionPolicyRequestFilterSensitiveLog": () => (/* reexport */ PutDataProtectionPolicyRequestFilterSensitiveLog),
  "PutDataProtectionPolicyResponseFilterSensitiveLog": () => (/* reexport */ PutDataProtectionPolicyResponseFilterSensitiveLog),
  "PutDestinationCommand": () => (/* reexport */ PutDestinationCommand),
  "PutDestinationPolicyCommand": () => (/* reexport */ PutDestinationPolicyCommand),
  "PutDestinationPolicyRequestFilterSensitiveLog": () => (/* reexport */ PutDestinationPolicyRequestFilterSensitiveLog),
  "PutDestinationRequestFilterSensitiveLog": () => (/* reexport */ PutDestinationRequestFilterSensitiveLog),
  "PutDestinationResponseFilterSensitiveLog": () => (/* reexport */ PutDestinationResponseFilterSensitiveLog),
  "PutLogEventsCommand": () => (/* reexport */ PutLogEventsCommand),
  "PutLogEventsRequestFilterSensitiveLog": () => (/* reexport */ PutLogEventsRequestFilterSensitiveLog),
  "PutLogEventsResponseFilterSensitiveLog": () => (/* reexport */ PutLogEventsResponseFilterSensitiveLog),
  "PutMetricFilterCommand": () => (/* reexport */ PutMetricFilterCommand),
  "PutMetricFilterRequestFilterSensitiveLog": () => (/* reexport */ PutMetricFilterRequestFilterSensitiveLog),
  "PutQueryDefinitionCommand": () => (/* reexport */ PutQueryDefinitionCommand),
  "PutQueryDefinitionRequestFilterSensitiveLog": () => (/* reexport */ PutQueryDefinitionRequestFilterSensitiveLog),
  "PutQueryDefinitionResponseFilterSensitiveLog": () => (/* reexport */ PutQueryDefinitionResponseFilterSensitiveLog),
  "PutResourcePolicyCommand": () => (/* reexport */ PutResourcePolicyCommand),
  "PutResourcePolicyRequestFilterSensitiveLog": () => (/* reexport */ PutResourcePolicyRequestFilterSensitiveLog),
  "PutResourcePolicyResponseFilterSensitiveLog": () => (/* reexport */ PutResourcePolicyResponseFilterSensitiveLog),
  "PutRetentionPolicyCommand": () => (/* reexport */ PutRetentionPolicyCommand),
  "PutRetentionPolicyRequestFilterSensitiveLog": () => (/* reexport */ PutRetentionPolicyRequestFilterSensitiveLog),
  "PutSubscriptionFilterCommand": () => (/* reexport */ PutSubscriptionFilterCommand),
  "PutSubscriptionFilterRequestFilterSensitiveLog": () => (/* reexport */ PutSubscriptionFilterRequestFilterSensitiveLog),
  "QueryCompileErrorFilterSensitiveLog": () => (/* reexport */ QueryCompileErrorFilterSensitiveLog),
  "QueryCompileErrorLocationFilterSensitiveLog": () => (/* reexport */ QueryCompileErrorLocationFilterSensitiveLog),
  "QueryDefinitionFilterSensitiveLog": () => (/* reexport */ QueryDefinitionFilterSensitiveLog),
  "QueryInfoFilterSensitiveLog": () => (/* reexport */ QueryInfoFilterSensitiveLog),
  "QueryStatisticsFilterSensitiveLog": () => (/* reexport */ QueryStatisticsFilterSensitiveLog),
  "QueryStatus": () => (/* reexport */ QueryStatus),
  "RejectedLogEventsInfoFilterSensitiveLog": () => (/* reexport */ RejectedLogEventsInfoFilterSensitiveLog),
  "ResourceAlreadyExistsException": () => (/* reexport */ ResourceAlreadyExistsException),
  "ResourceNotFoundException": () => (/* reexport */ models_0_ResourceNotFoundException),
  "ResourcePolicyFilterSensitiveLog": () => (/* reexport */ ResourcePolicyFilterSensitiveLog),
  "ResultFieldFilterSensitiveLog": () => (/* reexport */ ResultFieldFilterSensitiveLog),
  "SearchedLogStreamFilterSensitiveLog": () => (/* reexport */ SearchedLogStreamFilterSensitiveLog),
  "ServiceUnavailableException": () => (/* reexport */ ServiceUnavailableException),
  "StandardUnit": () => (/* reexport */ StandardUnit),
  "StartQueryCommand": () => (/* reexport */ StartQueryCommand),
  "StartQueryRequestFilterSensitiveLog": () => (/* reexport */ StartQueryRequestFilterSensitiveLog),
  "StartQueryResponseFilterSensitiveLog": () => (/* reexport */ StartQueryResponseFilterSensitiveLog),
  "StopQueryCommand": () => (/* reexport */ StopQueryCommand),
  "StopQueryRequestFilterSensitiveLog": () => (/* reexport */ StopQueryRequestFilterSensitiveLog),
  "StopQueryResponseFilterSensitiveLog": () => (/* reexport */ StopQueryResponseFilterSensitiveLog),
  "SubscriptionFilterFilterSensitiveLog": () => (/* reexport */ SubscriptionFilterFilterSensitiveLog),
  "TagLogGroupCommand": () => (/* reexport */ TagLogGroupCommand),
  "TagLogGroupRequestFilterSensitiveLog": () => (/* reexport */ TagLogGroupRequestFilterSensitiveLog),
  "TagResourceCommand": () => (/* reexport */ TagResourceCommand),
  "TagResourceRequestFilterSensitiveLog": () => (/* reexport */ TagResourceRequestFilterSensitiveLog),
  "TestMetricFilterCommand": () => (/* reexport */ TestMetricFilterCommand),
  "TestMetricFilterRequestFilterSensitiveLog": () => (/* reexport */ TestMetricFilterRequestFilterSensitiveLog),
  "TestMetricFilterResponseFilterSensitiveLog": () => (/* reexport */ TestMetricFilterResponseFilterSensitiveLog),
  "TooManyTagsException": () => (/* reexport */ TooManyTagsException),
  "UnrecognizedClientException": () => (/* reexport */ UnrecognizedClientException),
  "UntagLogGroupCommand": () => (/* reexport */ UntagLogGroupCommand),
  "UntagLogGroupRequestFilterSensitiveLog": () => (/* reexport */ UntagLogGroupRequestFilterSensitiveLog),
  "UntagResourceCommand": () => (/* reexport */ UntagResourceCommand),
  "UntagResourceRequestFilterSensitiveLog": () => (/* reexport */ UntagResourceRequestFilterSensitiveLog),
  "paginateDescribeDestinations": () => (/* reexport */ paginateDescribeDestinations),
  "paginateDescribeLogGroups": () => (/* reexport */ paginateDescribeLogGroups),
  "paginateDescribeLogStreams": () => (/* reexport */ paginateDescribeLogStreams),
  "paginateDescribeMetricFilters": () => (/* reexport */ paginateDescribeMetricFilters),
  "paginateDescribeSubscriptionFilters": () => (/* reexport */ paginateDescribeSubscriptionFilters),
  "paginateFilterLogEvents": () => (/* reexport */ paginateFilterLogEvents),
  "paginateGetLogEvents": () => (/* reexport */ paginateGetLogEvents)
});

// NAMESPACE OBJECT: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/index.js
var aws_namespaceObject = {};
__webpack_require__.r(aws_namespaceObject);
__webpack_require__.d(aws_namespaceObject, {
  "isVirtualHostableS3Bucket": () => (isVirtualHostableS3Bucket),
  "parseArn": () => (parseArn),
  "partition": () => (partition)
});

// NAMESPACE OBJECT: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/index.js
var lib_namespaceObject = {};
__webpack_require__.r(lib_namespaceObject);
__webpack_require__.d(lib_namespaceObject, {
  "aws": () => (aws_namespaceObject),
  "booleanEquals": () => (booleanEquals),
  "getAttr": () => (getAttr),
  "isSet": () => (isSet),
  "isValidHostLabel": () => (isValidHostLabel),
  "not": () => (not),
  "parseURL": () => (parseURL),
  "stringEquals": () => (stringEquals),
  "substring": () => (substring),
  "uriEncode": () => (uriEncode)
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-config-provider/dist-es/booleanSelector.js
var SelectorType;
(function (SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));
const booleanSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    if (obj[key] === "true")
        return true;
    if (obj[key] === "false")
        return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-config-provider/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js

const ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
const CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
const DEFAULT_USE_DUALSTACK_ENDPOINT = false;
const NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => booleanSelector(env, ENV_USE_DUALSTACK_ENDPOINT, SelectorType.ENV),
    configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, SelectorType.CONFIG),
    default: false,
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js

const ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
const CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
const DEFAULT_USE_FIPS_ENDPOINT = false;
const NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => booleanSelector(env, ENV_USE_FIPS_ENDPOINT, SelectorType.ENV),
    configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, SelectorType.CONFIG),
    default: false,
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/index.js





;// CONCATENATED MODULE: ./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/config.js
const REGION_ENV_NAME = "AWS_REGION";
const REGION_INI_NAME = "region";
const NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[REGION_ENV_NAME],
    configFileSelector: (profile) => profile[REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
const NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/isFipsRegion.js
const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/getRealRegion.js

const getRealRegion = (region) => isFipsRegion(region)
    ? ["fips-aws-global", "aws-fips"].includes(region)
        ? "us-east-1"
        : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
    : region;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/resolveRegionConfig.js


const resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
        throw new Error("Region is missing");
    }
    return {
        ...input,
        region: async () => {
            if (typeof region === "string") {
                return getRealRegion(region);
            }
            const providedRegion = await region();
            return getRealRegion(providedRegion);
        },
        useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if (isFipsRegion(providedRegion)) {
                return true;
            }
            return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        },
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/config-resolver/dist-es/index.js




;// CONCATENATED MODULE: ./node_modules/@aws-sdk/protocol-http/dist-es/FieldPosition.js
var FieldPosition_FieldPosition;
(function (FieldPosition) {
    FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
    FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
})(FieldPosition_FieldPosition || (FieldPosition_FieldPosition = {}));

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/protocol-http/dist-es/Field.js

class Field {
    constructor({ name, kind = FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
    }
    add(value) {
        this.values.push(value);
    }
    set(values) {
        this.values = values;
    }
    remove(value) {
        this.values = this.values.filter((v) => v !== value);
    }
    toString() {
        return this.values
            .map((v) => (v.includes(",") || v.includes(" ") ? `"${v}"` : v))
            .join(", ");
    }
    get() {
        return this.values;
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/protocol-http/dist-es/httpRequest.js
class httpRequest_HttpRequest {
    constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
            ? options.protocol.slice(-1) !== ":"
                ? `${options.protocol}:`
                : options.protocol
            : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
    }
    static isInstance(request) {
        if (!request)
            return false;
        const req = request;
        return ("method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object");
    }
    clone() {
        const cloned = new httpRequest_HttpRequest({
            ...this,
            headers: { ...this.headers },
        });
        if (cloned.query)
            cloned.query = cloneQuery(cloned.query);
        return cloned;
    }
}
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [...param] : param,
        };
    }, {});
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/protocol-http/dist-es/httpResponse.js
class httpResponse_HttpResponse {
    constructor(options) {
        this.statusCode = options.statusCode;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    static isInstance(response) {
        if (!response)
            return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/protocol-http/dist-es/index.js








;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-content-length/dist-es/index.js

const CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
        const request = args.request;
        if (httpRequest_HttpRequest.isInstance(request)) {
            const { body, headers } = request;
            if (body &&
                Object.keys(headers)
                    .map((str) => str.toLowerCase())
                    .indexOf(CONTENT_LENGTH_HEADER) === -1) {
                try {
                    const length = bodyLengthChecker(body);
                    request.headers = {
                        ...request.headers,
                        [CONTENT_LENGTH_HEADER]: String(length),
                    };
                }
                catch (error) {
                }
            }
        }
        return next({
            ...args,
            request,
        });
    };
}
const contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true,
};
const getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-serde/dist-es/deserializerMiddleware.js
const deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
    const { response } = await next(args);
    try {
        const parsed = await deserializer(response, options);
        return {
            response,
            output: parsed,
        };
    }
    catch (error) {
        Object.defineProperty(error, "$response", {
            value: response,
        });
        throw error;
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-serde/dist-es/serializerMiddleware.js
const serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
    const endpoint = context.endpointV2?.url && options.urlParser
        ? async () => options.urlParser(context.endpointV2.url)
        : options.endpoint;
    if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
    }
    const request = await serializer(args.input, { ...options, endpoint });
    return next({
        ...args,
        request,
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-serde/dist-es/serdePlugin.js


const deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
const serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: (commandStack) => {
            commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
            commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
        },
    };
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-serde/dist-es/index.js




;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint/dist-es/service-customizations/s3.js
const resolveParamsForS3 = async (endpointParams) => {
    const bucket = endpointParams?.Bucket || "";
    if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
    }
    else if (!isDnsCompatibleBucketName(bucket) ||
        (bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:")) ||
        bucket.toLowerCase() !== bucket ||
        bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
    }
    return endpointParams;
};
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
const DOT_PATTERN = /\./;
const S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
const isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
const isArnBucketName = (bucketName) => {
    const [arn, partition, service, region, account, typeOrId] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = [arn, partition, service, account, typeOrId].filter(Boolean).length === 5;
    if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return arn === "arn" && !!partition && !!service && !!account && !!typeOrId;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
const createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
    const configProvider = async () => {
        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
            return configValue();
        }
        return configValue;
    };
    if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
                if ("url" in endpoint) {
                    return endpoint.url.href;
                }
                if ("hostname" in endpoint) {
                    const { protocol, hostname, port, path } = endpoint;
                    return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
                }
            }
            return endpoint;
        };
    }
    return configProvider;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js


const getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
    const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context);
    return endpoint;
};
const resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
    const endpointParams = {};
    const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
    for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
            case "staticContextParams":
                endpointParams[name] = instruction.value;
                break;
            case "contextParams":
                endpointParams[name] = commandInput[instruction.name];
                break;
            case "clientContextParams":
            case "builtInParams":
                endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
                break;
            default:
                throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
    }
    if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
    }
    return endpointParams;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint/dist-es/endpointMiddleware.js

const endpointMiddleware = ({ config, instructions, }) => {
    return (next, context) => async (args) => {
        const endpoint = await getEndpointFromInstructions(args.input, {
            getEndpointParameterInstructions() {
                return instructions;
            },
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
            context["signing_region"] = authScheme.signingRegion;
            context["signing_service"] = authScheme.signingName;
        }
        return next({
            ...args,
        });
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint/dist-es/getEndpointPlugin.js


const endpointMiddlewareOptions = {
    step: "serialize",
    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: serializerMiddlewareOption.name,
};
const getEndpointPlugin = (config, instructions) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(endpointMiddleware({
            config,
            instructions,
        }), endpointMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-middleware/dist-es/normalizeProvider.js
const normalizeProvider_normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/querystring-parser/dist-es/index.js
function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")) {
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            }
            else if (Array.isArray(query[key])) {
                query[key].push(value);
            }
            else {
                query[key] = [query[key], value];
            }
        }
    }
    return query;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/url-parser/dist-es/index.js

const parseUrl = (url) => {
    if (typeof url === "string") {
        return parseUrl(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
        query = parseQueryString(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/toEndpointV1.js

const toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            return parseUrl(endpoint.url);
        }
        return endpoint;
    }
    return parseUrl(endpoint);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint/dist-es/resolveEndpointConfig.js


const resolveEndpointConfig = (input) => {
    const tls = input.tls ?? true;
    const { endpoint } = input;
    const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider_normalizeProvider(endpoint)()) : undefined;
    const isCustomEndpoint = !!endpoint;
    return {
        ...input,
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: normalizeProvider_normalizeProvider(input.useDualstackEndpoint ?? false),
        useFipsEndpoint: normalizeProvider_normalizeProvider(input.useFipsEndpoint ?? false),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js






;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js

function resolveHostHeaderConfig(input) {
    return input;
}
const hostHeaderMiddleware = (options) => (next) => async (args) => {
    if (!httpRequest_HttpRequest.isInstance(args.request))
        return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = "";
    }
    else if (!request.headers["host"]) {
        request.headers["host"] = request.hostname;
    }
    return next(args);
};
const hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true,
};
const getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
const loggerMiddleware = () => (next, context) => async (args) => {
    const response = await next(args);
    const { clientName, commandName, logger, inputFilterSensitiveLog, outputFilterSensitiveLog, dynamoDbDocumentClientOptions = {}, } = context;
    const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    if (!logger) {
        return response;
    }
    if (typeof logger.info === "function") {
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger.info({
            clientName,
            commandName,
            input: (overrideInputFilterSensitiveLog ?? inputFilterSensitiveLog)(args.input),
            output: (overrideOutputFilterSensitiveLog ?? outputFilterSensitiveLog)(outputWithoutMetadata),
            metadata: $metadata,
        });
    }
    return response;
};
const loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
const getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-logger/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js

const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
const recursionDetectionMiddleware = (options) => (next) => async (args) => {
    const { request } = args;
    if (!httpRequest_HttpRequest.isInstance(request) ||
        options.runtime !== "node" ||
        request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
        return next(args);
    }
    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
    const traceId = process.env[ENV_TRACE_ID];
    const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
    }
    return next({
        ...args,
        request,
    });
};
const addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: true,
    priority: "low",
};
const getRecursionDetectionPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-retry/dist-es/config.js
var config_RETRY_MODES;
(function (RETRY_MODES) {
    RETRY_MODES["STANDARD"] = "standard";
    RETRY_MODES["ADAPTIVE"] = "adaptive";
})(config_RETRY_MODES || (config_RETRY_MODES = {}));
const config_DEFAULT_MAX_ATTEMPTS = 3;
const DEFAULT_RETRY_MODE = "STANDARD";

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/service-error-classification/dist-es/constants.js
const constants_CLOCK_SKEW_ERROR_CODES = (/* unused pure expression or super */ null && ([
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch",
]));
const THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException",
];
const TRANSIENT_ERROR_CODES = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"];
const TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
const NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/service-error-classification/dist-es/index.js

const isRetryableByTrait = (error) => error.$retryable !== undefined;
const isClockSkewError = (error) => CLOCK_SKEW_ERROR_CODES.includes(error.name);
const dist_es_isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 ||
    THROTTLING_ERROR_CODES.includes(error.name) ||
    error.$retryable?.throttling == true;
const isTransientError = (error) => TRANSIENT_ERROR_CODES.includes(error.name) ||
    NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") ||
    TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
const isServerError = (error) => {
    if (error.$metadata?.httpStatusCode !== undefined) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
            return true;
        }
        return false;
    }
    return false;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-retry/dist-es/DefaultRateLimiter.js

class DefaultRateLimiter_DefaultRateLimiter {
    constructor(options) {
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
        return Date.now() / 1000;
    }
    async getSendToken() {
        return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(amount) {
        if (!this.enabled) {
            return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
            const delay = ((amount - this.currentCapacity) / this.fillRate) * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
    }
    refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
    }
    updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if (dist_es_isThrottlingError(response)) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
        }
        else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
    }
    calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
        this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
        }
    }
    getPrecise(num) {
        return parseFloat(num.toFixed(8));
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-retry/dist-es/constants.js
const constants_DEFAULT_RETRY_DELAY_BASE = 100;
const constants_MAXIMUM_RETRY_DELAY = 20 * 1000;
const constants_THROTTLING_RETRY_DELAY_BASE = 500;
const constants_INITIAL_RETRY_TOKENS = 500;
const constants_RETRY_COST = 5;
const constants_TIMEOUT_RETRY_COST = 10;
const constants_NO_RETRY_INCREMENT = 1;
const constants_INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
const constants_REQUEST_HEADER = "amz-sdk-request";

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-retry/dist-es/defaultRetryBackoffStrategy.js

const getDefaultRetryBackoffStrategy = () => {
    let delayBase = constants_DEFAULT_RETRY_DELAY_BASE;
    const computeNextBackoffDelay = (attempts) => {
        return Math.floor(Math.min(constants_MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
    };
    const setDelayBase = (delay) => {
        delayBase = delay;
    };
    return {
        computeNextBackoffDelay,
        setDelayBase,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-retry/dist-es/defaultRetryToken.js


const getDefaultRetryToken = (initialRetryTokens, initialRetryDelay, initialRetryCount, options) => {
    const MAX_CAPACITY = initialRetryTokens;
    const retryCost = options?.retryCost ?? constants_RETRY_COST;
    const timeoutRetryCost = options?.timeoutRetryCost ?? constants_TIMEOUT_RETRY_COST;
    const retryBackoffStrategy = options?.retryBackoffStrategy ?? getDefaultRetryBackoffStrategy();
    let availableCapacity = initialRetryTokens;
    let retryDelay = Math.min(constants_MAXIMUM_RETRY_DELAY, initialRetryDelay);
    let lastRetryCost = undefined;
    let retryCount = initialRetryCount ?? 0;
    const getCapacityAmount = (errorType) => (errorType === "TRANSIENT" ? timeoutRetryCost : retryCost);
    const getRetryCount = () => retryCount;
    const getRetryDelay = () => retryDelay;
    const getLastRetryCost = () => lastRetryCost;
    const hasRetryTokens = (errorType) => getCapacityAmount(errorType) <= availableCapacity;
    const getRetryTokenCount = (errorInfo) => {
        const errorType = errorInfo.errorType;
        if (!hasRetryTokens(errorType)) {
            throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(errorType);
        const delayBase = errorType === "THROTTLING" ? constants_THROTTLING_RETRY_DELAY_BASE : constants_DEFAULT_RETRY_DELAY_BASE;
        retryBackoffStrategy.setDelayBase(delayBase);
        const delayFromErrorType = retryBackoffStrategy.computeNextBackoffDelay(retryCount);
        if (errorInfo.retryAfterHint) {
            const delayFromRetryAfterHint = errorInfo.retryAfterHint.getTime() - Date.now();
            retryDelay = Math.max(delayFromRetryAfterHint || 0, delayFromErrorType);
        }
        else {
            retryDelay = delayFromErrorType;
        }
        retryCount++;
        lastRetryCost = capacityAmount;
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    const releaseRetryTokens = (releaseAmount) => {
        availableCapacity += releaseAmount ?? constants_NO_RETRY_INCREMENT;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return {
        getRetryCount,
        getRetryDelay,
        getLastRetryCost,
        hasRetryTokens,
        getRetryTokenCount,
        releaseRetryTokens,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-retry/dist-es/StandardRetryStrategy.js



class StandardRetryStrategy_StandardRetryStrategy {
    constructor(maxAttemptsProvider) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = config_RETRY_MODES.STANDARD;
        this.retryToken = getDefaultRetryToken(constants_INITIAL_RETRY_TOKENS, constants_DEFAULT_RETRY_DELAY_BASE);
        this.maxAttemptsProvider = maxAttemptsProvider;
    }
    async acquireInitialRetryToken(retryTokenScope) {
        return this.retryToken;
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(tokenToRenew, errorInfo, maxAttempts)) {
            tokenToRenew.getRetryTokenCount(errorInfo);
            return tokenToRenew;
        }
        throw new Error("No retry token available");
    }
    recordSuccess(token) {
        this.retryToken.releaseRetryTokens(token.getLastRetryCost());
    }
    async getMaxAttempts() {
        let maxAttempts;
        try {
            return await this.maxAttemptsProvider();
        }
        catch (error) {
            console.warn(`Max attempts provider could not resolve. Using default of ${config_DEFAULT_MAX_ATTEMPTS}`);
            return config_DEFAULT_MAX_ATTEMPTS;
        }
    }
    shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount();
        return (attempts < maxAttempts &&
            tokenToRenew.hasRetryTokens(errorInfo.errorType) &&
            this.isRetryableError(errorInfo.errorType));
    }
    isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-retry/dist-es/AdaptiveRetryStrategy.js



class AdaptiveRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = config_RETRY_MODES.ADAPTIVE;
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter_DefaultRateLimiter();
        this.standardRetryStrategy = new StandardRetryStrategy_StandardRetryStrategy(maxAttemptsProvider);
    }
    async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
    }
    recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-retry/dist-es/index.js







;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/dist-es/defaultRetryQuota.js

const defaultRetryQuota_getDefaultRetryQuota = (initialRetryTokens, options) => {
    const MAX_CAPACITY = initialRetryTokens;
    const noRetryIncrement = options?.noRetryIncrement ?? NO_RETRY_INCREMENT;
    const retryCost = options?.retryCost ?? RETRY_COST;
    const timeoutRetryCost = options?.timeoutRetryCost ?? TIMEOUT_RETRY_COST;
    let availableCapacity = initialRetryTokens;
    const getCapacityAmount = (error) => (error.name === "TimeoutError" ? timeoutRetryCost : retryCost);
    const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;
    const retrieveRetryTokens = (error) => {
        if (!hasRetryTokens(error)) {
            throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    const releaseRetryTokens = (capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens,
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/dist-es/delayDecider.js

const delayDecider_defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/dist-es/StandardRetryStrategy.js








class dist_es_StandardRetryStrategy_StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = RETRY_MODES.STANDARD;
        this.retryDecider = options?.retryDecider ?? defaultRetryDecider;
        this.delayDecider = options?.delayDecider ?? defaultDelayDecider;
        this.retryQuota = options?.retryQuota ?? getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
    }
    shouldRetry(error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    }
    async getMaxAttempts() {
        let maxAttempts;
        try {
            maxAttempts = await this.maxAttemptsProvider();
        }
        catch (error) {
            maxAttempts = DEFAULT_MAX_ATTEMPTS;
        }
        return maxAttempts;
    }
    async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (HttpRequest.isInstance(request)) {
            request.headers[INVOCATION_ID_HEADER] = v4();
        }
        while (true) {
            try {
                if (HttpRequest.isInstance(request)) {
                    request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                if (options?.beforeRequest) {
                    await options.beforeRequest();
                }
                const { response, output } = await next(args);
                if (options?.afterRequest) {
                    options.afterRequest(response);
                }
                this.retryQuota.releaseRetryTokens(retryTokenAmount);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalDelay;
                return { response, output };
            }
            catch (e) {
                const err = asSdkError(e);
                attempts++;
                if (this.shouldRetry(err, attempts, maxAttempts)) {
                    retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
                    const delayFromDecider = this.delayDecider(isThrottlingError(err) ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE, attempts);
                    const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
                    const delay = Math.max(delayFromResponse || 0, delayFromDecider);
                    totalDelay += delay;
                    await new Promise((resolve) => setTimeout(resolve, delay));
                    continue;
                }
                if (!err.$metadata) {
                    err.$metadata = {};
                }
                err.$metadata.attempts = attempts;
                err.$metadata.totalRetryDelay = totalDelay;
                throw err;
            }
        }
    }
}
const getDelayFromRetryAfterHeader = (response) => {
    if (!HttpResponse.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return retryAfterSeconds * 1000;
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate.getTime() - Date.now();
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/dist-es/AdaptiveRetryStrategy.js


class AdaptiveRetryStrategy_AdaptiveRetryStrategy extends (/* unused pure expression or super */ null && (StandardRetryStrategy)) {
    constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options ?? {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.mode = RETRY_MODES.ADAPTIVE;
    }
    async retry(next, args) {
        return super.retry(next, args, {
            beforeRequest: async () => {
                return this.rateLimiter.getSendToken();
            },
            afterRequest: (response) => {
                this.rateLimiter.updateClientSendingRate(response);
            },
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/dist-es/configurations.js


const ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
const CONFIG_MAX_ATTEMPTS = "max_attempts";
const NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        const value = env[ENV_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    default: config_DEFAULT_MAX_ATTEMPTS,
};
const resolveRetryConfig = (input) => {
    const { retryStrategy } = input;
    const maxAttempts = normalizeProvider_normalizeProvider(input.maxAttempts ?? config_DEFAULT_MAX_ATTEMPTS);
    return {
        ...input,
        maxAttempts,
        retryStrategy: async () => {
            if (retryStrategy) {
                return retryStrategy;
            }
            const retryMode = await normalizeProvider_normalizeProvider(input.retryMode)();
            if (retryMode === config_RETRY_MODES.ADAPTIVE) {
                return new AdaptiveRetryStrategy(maxAttempts);
            }
            return new StandardRetryStrategy_StandardRetryStrategy(maxAttempts);
        },
    };
};
const ENV_RETRY_MODE = "AWS_RETRY_MODE";
const CONFIG_RETRY_MODE = "retry_mode";
const NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_RETRY_MODE],
    configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
    default: DEFAULT_RETRY_MODE,
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/dist-es/omitRetryHeadersMiddleware.js


const omitRetryHeadersMiddleware = () => (next) => async (args) => {
    const { request } = args;
    if (HttpRequest.isInstance(request)) {
        delete request.headers[INVOCATION_ID_HEADER];
        delete request.headers[REQUEST_HEADER];
    }
    return next(args);
};
const omitRetryHeadersMiddlewareOptions = {
    name: "omitRetryHeadersMiddleware",
    tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
const getOmitRetryHeadersPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
    },
});

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(113);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/node_modules/uuid/dist/esm-node/rng.js

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    external_crypto_default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/node_modules/uuid/dist/esm-node/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/node_modules/uuid/dist/esm-node/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ const esm_node_validate = (validate);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/node_modules/uuid/dist/esm-node/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_node_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_node_stringify = (stringify);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/node_modules/uuid/dist/esm-node/v4.js



function v4_v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_node_stringify(rnds);
}

/* harmony default export */ const esm_node_v4 = (v4_v4);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/dist-es/util.js
const util_asSdkError = (error) => {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/dist-es/retryMiddleware.js





const retryMiddleware = (options) => (next, context) => async (args) => {
    let retryStrategy = await options.retryStrategy();
    const maxAttempts = await options.maxAttempts();
    if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request } = args;
        if (httpRequest_HttpRequest.isInstance(request)) {
            request.headers[constants_INVOCATION_ID_HEADER] = esm_node_v4();
        }
        while (true) {
            try {
                if (httpRequest_HttpRequest.isInstance(request)) {
                    request.headers[constants_REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                const { response, output } = await next(args);
                retryStrategy.recordSuccess(retryToken);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalRetryDelay;
                return { response, output };
            }
            catch (e) {
                const retryErrorInfo = getRetyErrorInto(e);
                lastError = util_asSdkError(e);
                try {
                    retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
                }
                catch (refreshError) {
                    if (!lastError.$metadata) {
                        lastError.$metadata = {};
                    }
                    lastError.$metadata.attempts = attempts + 1;
                    lastError.$metadata.totalRetryDelay = totalRetryDelay;
                    throw lastError;
                }
                attempts = retryToken.getRetryCount();
                const delay = retryToken.getRetryDelay();
                totalRetryDelay += delay;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
    }
    else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode)
            context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
    }
};
const isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" &&
    typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" &&
    typeof retryStrategy.recordSuccess !== "undefined";
const getRetyErrorInto = (error) => {
    const errorInfo = {
        errorType: getRetryErrorType(error),
    };
    const retryAfterHint = getRetryAfterHint(error.$response);
    if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
    }
    return errorInfo;
};
const getRetryErrorType = (error) => {
    if (dist_es_isThrottlingError(error))
        return "THROTTLING";
    if (isTransientError(error))
        return "TRANSIENT";
    if (isServerError(error))
        return "SERVER_ERROR";
    return "CLIENT_ERROR";
};
const retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true,
};
const getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    },
});
const getRetryAfterHint = (response) => {
    if (!httpResponse_HttpResponse.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1000);
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-retry/dist-es/index.js








;// CONCATENATED MODULE: ./node_modules/@aws-sdk/property-provider/dist-es/ProviderError.js
class ProviderError extends Error {
    constructor(message, tryNextLink = true) {
        super(message);
        this.tryNextLink = tryNextLink;
        this.name = "ProviderError";
        Object.setPrototypeOf(this, ProviderError.prototype);
    }
    static from(error, tryNextLink = true) {
        return Object.assign(new this(error.message, tryNextLink), error);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/property-provider/dist-es/CredentialsProviderError.js

class CredentialsProviderError extends ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, CredentialsProviderError.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/property-provider/dist-es/TokenProviderError.js

class TokenProviderError extends ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, TokenProviderError.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/property-provider/dist-es/chain.js

function chain(...providers) {
    return () => {
        let promise = Promise.reject(new ProviderError("No providers in chain"));
        for (const provider of providers) {
            promise = promise.catch((err) => {
                if (err?.tryNextLink) {
                    return provider();
                }
                throw err;
            });
        }
        return promise;
    };
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/property-provider/dist-es/fromStatic.js
const fromStatic = (staticValue) => () => Promise.resolve(staticValue);

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/property-provider/dist-es/memoize.js
const memoize = (provider, isExpired, requiresRefresh) => {
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async () => {
        if (!pending) {
            pending = provider();
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider();
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
        }
        if (isConstant) {
            return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
        }
        return resolved;
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/property-provider/dist-es/index.js







;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/is-array-buffer/dist-es/index.js
const isArrayBuffer = (arg) => (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === "[object ArrayBuffer]";

;// CONCATENATED MODULE: external "buffer"
const external_buffer_namespaceObject = require("buffer");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-buffer-from/dist-es/index.js


const fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
    if (!isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return external_buffer_namespaceObject.Buffer.from(input, offset, length);
};
const fromString = (input, encoding) => {
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? external_buffer_namespaceObject.Buffer.from(input, encoding) : external_buffer_namespaceObject.Buffer.from(input);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-utf8/dist-es/fromUtf8.js

const fromUtf8 = (input) => {
    const buf = fromString(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-utf8/dist-es/toUint8Array.js

const toUint8Array = (data) => {
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-utf8/dist-es/toUtf8.js

const toUtf8 = (input) => fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-utf8/dist-es/index.js




;// CONCATENATED MODULE: ./node_modules/@aws-sdk/signature-v4/dist-es/constants.js
const ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
const CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
const AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
const SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
const EXPIRES_QUERY_PARAM = "X-Amz-Expires";
const SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
const TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
const REGION_SET_PARAM = "X-Amz-Region-Set";
const AUTH_HEADER = "authorization";
const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
const DATE_HEADER = "date";
const GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
const SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
const SHA256_HEADER = "x-amz-content-sha256";
const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
const HOST_HEADER = "host";
const ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
};
const PROXY_HEADER_PATTERN = /^proxy-/;
const SEC_HEADER_PATTERN = /^sec-/;
const UNSIGNABLE_PATTERNS = (/* unused pure expression or super */ null && ([/^proxy-/i, /^sec-/i]));
const ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
const ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
const EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
const UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
const MAX_CACHE_SIZE = 50;
const KEY_TYPE_IDENTIFIER = "aws4_request";
const MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/signature-v4/dist-es/credentialDerivation.js



const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
    }
    return (signingKeyCache[cacheKey] = key);
};
const clearCredentialCache = () => {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
    });
};
const hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update(toUint8Array(data));
    return hash.digest();
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalHeaders.js

const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS ||
            unsignableHeaders?.has(canonicalHeaderName) ||
            PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri.js
const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalQuery.js


const getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
            continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
            serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
        }
        else if (Array.isArray(value)) {
            serialized[key] = value
                .slice(0)
                .sort()
                .reduce((encoded, value) => encoded.concat([`${escapeUri(key)}=${escapeUri(value)}`]), [])
                .join("&");
        }
    }
    return keys
        .map((key) => serialized[key])
        .filter((serialized) => serialized)
        .join("&");
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/signature-v4/dist-es/getPayloadHash.js




const getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    }
    else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(toUint8Array(body));
        return toHex(await hashCtor.digest());
    }
    return UNSIGNED_PAYLOAD;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/signature-v4/dist-es/headerUtil.js
const hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};
const getHeaderValue = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return headers[headerName];
        }
    }
    return undefined;
};
const deleteHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            delete headers[headerName];
        }
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/signature-v4/dist-es/cloneRequest.js
const cloneRequest = ({ headers, query, ...rest }) => ({
    ...rest,
    headers: { ...headers },
    query: query ? cloneRequest_cloneQuery(query) : undefined,
});
const cloneRequest_cloneQuery = (query) => Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param,
    };
}, {});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/signature-v4/dist-es/moveHeadersToQuery.js

const moveHeadersToQuery = (request, options = {}) => {
    const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
    for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/signature-v4/dist-es/prepareRequest.js


const prepareRequest = (request) => {
    request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
    for (const headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/signature-v4/dist-es/utilDate.js
const iso8601 = (time) => toDate(time)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
const toDate = (time) => {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/signature-v4/dist-es/SignatureV4.js












class SignatureV4_SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = normalizeProvider_normalizeProvider(region);
        this.credentialProvider = normalizeProvider_normalizeProvider(credentials);
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
            request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        }
        else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        }
        else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = toHex(await hash.digest());
        const stringToSign = [
            EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload,
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService, } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request, this.sha256);
        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[AUTH_HEADER] =
            `${ALGORITHM_IDENTIFIER} ` +
                `Credential=${credentials.accessKeyId}/${scope}, ` +
                `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
                `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update(toUint8Array(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
                if (pathSegment?.length === 0)
                    continue;
                if (pathSegment === ".")
                    continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                }
                else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = encodeURIComponent(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
    }
    validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" ||
            typeof credentials.accessKeyId !== "string" ||
            typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
        }
    }
}
const formatDate = (now) => {
    const longDate = iso8601(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.slice(0, 8),
    };
};
const getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/signature-v4/dist-es/index.js








;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-signing/dist-es/configurations.js



const CREDENTIAL_EXPIRE_WINDOW = 300000;
const resolveAwsAuthConfig = (input) => {
    const normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
    let signer;
    if (input.signer) {
        signer = normalizeProvider_normalizeProvider(input.signer);
    }
    else if (input.regionInfoProvider) {
        signer = () => normalizeProvider_normalizeProvider(input.region)()
            .then(async (region) => [
            (await input.regionInfoProvider(region, {
                useFipsEndpoint: await input.useFipsEndpoint(),
                useDualstackEndpoint: await input.useDualstackEndpoint(),
            })) || {},
            region,
        ])
            .then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            input.signingRegion = input.signingRegion || signingRegion || region;
            input.signingName = input.signingName || signingService || input.serviceId;
            const params = {
                ...input,
                credentials: normalizedCreds,
                region: input.signingRegion,
                service: input.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = input.signerConstructor || SignatureV4_SignatureV4;
            return new SignerCtor(params);
        });
    }
    else {
        signer = async (authScheme) => {
            authScheme = Object.assign({}, {
                name: "sigv4",
                signingName: input.signingName || input.defaultSigningName,
                signingRegion: await normalizeProvider_normalizeProvider(input.region)(),
                properties: {},
            }, authScheme);
            const signingRegion = authScheme.signingRegion;
            const signingService = authScheme.signingName;
            input.signingRegion = input.signingRegion || signingRegion;
            input.signingName = input.signingName || signingService || input.serviceId;
            const params = {
                ...input,
                credentials: normalizedCreds,
                region: input.signingRegion,
                service: input.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = input.signerConstructor || SignatureV4_SignatureV4;
            return new SignerCtor(params);
        };
    }
    return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
const resolveSigV4AuthConfig = (input) => {
    const normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
    let signer;
    if (input.signer) {
        signer = normalizeProvider(input.signer);
    }
    else {
        signer = normalizeProvider(new SignatureV4({
            credentials: normalizedCreds,
            region: input.region,
            service: input.signingName,
            sha256,
            uriEscapePath: signingEscapePath,
        }));
    }
    return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
const normalizeCredentialProvider = (credentials) => {
    if (typeof credentials === "function") {
        return memoize(credentials, (credentials) => credentials.expiration !== undefined &&
            credentials.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW, (credentials) => credentials.expiration !== undefined);
    }
    return normalizeProvider_normalizeProvider(credentials);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js
const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-signing/dist-es/utils/isClockSkewed.js

const isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 300000;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-signing/dist-es/utils/getUpdatedSystemClockOffset.js

const getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-signing/dist-es/middleware.js



const awsAuthMiddleware = (options) => (next, context) => async function (args) {
    if (!httpRequest_HttpRequest.isInstance(args.request))
        return next(args);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const multiRegionOverride = authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : undefined;
    const signer = await options.signer(authScheme);
    const output = await next({
        ...args,
        request: await signer.sign(args.request, {
            signingDate: getSkewCorrectedDate(options.systemClockOffset),
            signingRegion: multiRegionOverride || context["signing_region"],
            signingService: context["signing_service"],
        }),
    }).catch((error) => {
        const serverTime = error.ServerTime ?? getDateHeader(error.$response);
        if (serverTime) {
            options.systemClockOffset = getUpdatedSystemClockOffset(serverTime, options.systemClockOffset);
        }
        throw error;
    });
    const dateHeader = getDateHeader(output.response);
    if (dateHeader) {
        options.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, options.systemClockOffset);
    }
    return output;
};
const getDateHeader = (response) => httpResponse_HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;
const awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
const getAwsAuthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
    },
});
const getSigV4AuthPlugin = (/* unused pure expression or super */ null && (getAwsAuthPlugin));

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-signing/dist-es/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
function resolveUserAgentConfig(input) {
    return {
        ...input,
        customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent,
    };
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
const USER_AGENT = "user-agent";
const X_AMZ_USER_AGENT = "x-amz-user-agent";
const SPACE = " ";
const UA_ESCAPE_REGEX = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js


const userAgentMiddleware = (options) => (next, context) => async (args) => {
    const { request } = args;
    if (!httpRequest_HttpRequest.isInstance(request))
        return next(args);
    const { headers } = request;
    const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
    const sdkUserAgentValue = [...defaultUserAgent, ...userAgent, ...customUserAgent].join(SPACE);
    const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent,
    ].join(SPACE);
    if (options.runtime !== "browser") {
        if (normalUAValue) {
            headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT]
                ? `${headers[USER_AGENT]} ${normalUAValue}`
                : normalUAValue;
        }
        headers[USER_AGENT] = sdkUserAgentValue;
    }
    else {
        headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next({
        ...args,
        request,
    });
};
const escapeUserAgent = ([name, version]) => {
    const prefixSeparatorIndex = name.indexOf("/");
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
        uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version]
        .filter((item) => item && item.length > 0)
        .map((item) => item?.replace(UA_ESCAPE_REGEX, "_"))
        .join("/");
};
const getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true,
};
const getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/NoOpLogger.js
class NoOpLogger {
    trace() { }
    debug() { }
    info() { }
    warn() { }
    error() { }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-stack/dist-es/MiddlewareStack.js
const constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    const entriesNameSet = new Set();
    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.name && entry.name === toRemove) {
                isRemoved = true;
                entriesNameSet.delete(toRemove);
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.middleware === toRemove) {
                isRemoved = true;
                if (entry.name)
                    entriesNameSet.delete(entry.name);
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
            toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
            toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            if (normalizedEntry.name)
                normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            if (normalizedEntry.name)
                normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
            if (entry.toMiddleware) {
                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    if (debug) {
                        return;
                    }
                    throw new Error(`${entry.toMiddleware} is not found when adding ${entry.name || "anonymous"} middleware ${entry.relation} ${entry.toMiddleware}`);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        const mainChain = sort(normalizedAbsoluteEntries)
            .map(expandRelativeMiddlewareList)
            .reduce((wholeList, expendedMiddlewareList) => {
            wholeList.push(...expendedMiddlewareList);
            return wholeList;
        }, []);
        return mainChain;
    };
    const stack = {
        add: (middleware, options = {}) => {
            const { name, override } = options;
            const entry = {
                step: "initialize",
                priority: "normal",
                middleware,
                ...options,
            };
            if (name) {
                if (entriesNameSet.has(name)) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${name}'`);
                    const toOverrideIndex = absoluteEntries.findIndex((entry) => entry.name === name);
                    const toOverride = absoluteEntries[toOverrideIndex];
                    if (toOverride.step !== entry.step || toOverride.priority !== entry.priority) {
                        throw new Error(`"${name}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be ` +
                            `overridden by same-name middleware with ${entry.priority} priority in ${entry.step} step.`);
                    }
                    absoluteEntries.splice(toOverrideIndex, 1);
                }
                entriesNameSet.add(name);
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
            const { name, override } = options;
            const entry = {
                middleware,
                ...options,
            };
            if (name) {
                if (entriesNameSet.has(name)) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${name}'`);
                    const toOverrideIndex = relativeEntries.findIndex((entry) => entry.name === name);
                    const toOverride = relativeEntries[toOverrideIndex];
                    if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                        throw new Error(`"${name}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` +
                            `by same-name middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                    }
                    relativeEntries.splice(toOverrideIndex, 1);
                }
                entriesNameSet.add(name);
            }
            relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
            plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
            if (typeof toRemove === "string")
                return removeByName(toRemove);
            else
                return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
            let isRemoved = false;
            const filterCb = (entry) => {
                const { tags, name } = entry;
                if (tags && tags.includes(toRemove)) {
                    if (name)
                        entriesNameSet.delete(name);
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: (from) => {
            const cloned = cloneTo(constructStack());
            cloned.use(from);
            return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
            return getMiddlewareList(true).map((mw) => {
                return mw.name + ": " + (mw.tags || []).join(",");
            });
        },
        resolve: (handler, context) => {
            for (const middleware of getMiddlewareList()
                .map((entry) => entry.middleware)
                .reverse()) {
                handler = middleware(handler, context);
            }
            return handler;
        },
    };
    return stack;
};
const stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
};
const priorityWeights = {
    high: 3,
    normal: 2,
    low: 1,
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-stack/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/client.js

class Client {
    constructor(config) {
        this.middlewareStack = constructStack();
        this.config = config;
    }
    send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
            handler(command)
                .then((result) => callback(null, result.output), (err) => callback(err))
                .catch(() => { });
        }
        else {
            return handler(command).then((result) => result.output);
        }
    }
    destroy() {
        if (this.config.requestHandler.destroy)
            this.config.requestHandler.destroy();
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/command.js

class Command {
    constructor() {
        this.middlewareStack = constructStack();
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/constants.js
const constants_SENSITIVE_STRING = "***SensitiveInformation***";

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/parse-utils.js
const parseBoolean = (value) => {
    switch (value) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            throw new Error(`Unable to parse boolean value "${value}"`);
    }
};
const expectBoolean = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "number") {
        if (value === 0 || value === 1) {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
            return false;
        }
        if (value === 1) {
            return true;
        }
    }
    if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
            return false;
        }
        if (lower === "true") {
            return true;
        }
    }
    if (typeof value === "boolean") {
        return value;
    }
    throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
};
const expectNumber = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
            if (String(parsed) !== String(value)) {
                logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
            }
            return parsed;
        }
    }
    if (typeof value === "number") {
        return value;
    }
    throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
};
const MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
const expectFloat32 = (value) => {
    const expected = expectNumber(value);
    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
            throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
    }
    return expected;
};
const expectLong = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
};
const expectInt = (/* unused pure expression or super */ null && (expectLong));
const expectInt32 = (value) => expectSizedInt(value, 32);
const expectShort = (value) => expectSizedInt(value, 16);
const expectByte = (value) => expectSizedInt(value, 8);
const expectSizedInt = (value, size) => {
    const expected = expectLong(value);
    if (expected !== undefined && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
};
const castInt = (value, size) => {
    switch (size) {
        case 32:
            return Int32Array.of(value)[0];
        case 16:
            return Int16Array.of(value)[0];
        case 8:
            return Int8Array.of(value)[0];
    }
};
const expectNonNull = (value, location) => {
    if (value === null || value === undefined) {
        if (location) {
            throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
    }
    return value;
};
const expectObject = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
        return value;
    }
    const receivedType = Array.isArray(value) ? "array" : typeof value;
    throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
};
const expectString = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return value;
    }
    if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
    }
    throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
};
const expectUnion = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    const asObject = expectObject(value);
    const setKeys = Object.entries(asObject)
        .filter(([, v]) => v != null)
        .map(([k]) => k);
    if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
    }
    if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
    }
    return asObject;
};
const parse_utils_strictParseDouble = (value) => {
    if (typeof value == "string") {
        return expectNumber(parseNumber(value));
    }
    return expectNumber(value);
};
const strictParseFloat = (/* unused pure expression or super */ null && (parse_utils_strictParseDouble));
const strictParseFloat32 = (value) => {
    if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
    }
    return expectFloat32(value);
};
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
const parseNumber = (value) => {
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
};
const limitedParseDouble = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectNumber(value);
};
const handleFloat = (/* unused pure expression or super */ null && (limitedParseDouble));
const limitedParseFloat = (/* unused pure expression or super */ null && (limitedParseDouble));
const limitedParseFloat32 = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectFloat32(value);
};
const parseFloatString = (value) => {
    switch (value) {
        case "NaN":
            return NaN;
        case "Infinity":
            return Infinity;
        case "-Infinity":
            return -Infinity;
        default:
            throw new Error(`Unable to parse float value: ${value}`);
    }
};
const strictParseLong = (value) => {
    if (typeof value === "string") {
        return expectLong(parseNumber(value));
    }
    return expectLong(value);
};
const strictParseInt = (/* unused pure expression or super */ null && (strictParseLong));
const strictParseInt32 = (value) => {
    if (typeof value === "string") {
        return expectInt32(parseNumber(value));
    }
    return expectInt32(value);
};
const parse_utils_strictParseShort = (value) => {
    if (typeof value === "string") {
        return expectShort(parseNumber(value));
    }
    return expectShort(value);
};
const strictParseByte = (value) => {
    if (typeof value === "string") {
        return expectByte(parseNumber(value));
    }
    return expectByte(value);
};
const stackTraceWarning = (message) => {
    return String(new TypeError(message).stack || message)
        .split("\n")
        .slice(0, 5)
        .filter((s) => !s.includes("stackTraceWarning"))
        .join("\n");
};
const logger = {
    warn: console.warn,
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/date-utils.js

const DAYS = (/* unused pure expression or super */ null && (["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]));
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const dayOfWeek = date.getUTCDay();
    const dayOfMonthInt = date.getUTCDate();
    const hoursInt = date.getUTCHours();
    const minutesInt = date.getUTCMinutes();
    const secondsInt = date.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
const RFC3339 = (/* unused pure expression or super */ null && (new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/)));
const parseRfc3339DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    const year = strictParseShort(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
};
const RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
const parseRfc3339DateTimeWithOffset = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339_WITH_OFFSET.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
    const year = parse_utils_strictParseShort(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
    }
    return date;
};
const IMF_FIXDATE = (/* unused pure expression or super */ null && (new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/)));
const RFC_850_DATE = (/* unused pure expression or super */ null && (new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/)));
const ASC_TIME = (/* unused pure expression or super */ null && (new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/)));
const parseRfc7231DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
    }
    let match = IMF_FIXDATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    match = RFC_850_DATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds,
        }));
    }
    match = ASC_TIME.exec(value);
    if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
};
const parseEpochTimestamp = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    let valueAsDouble;
    if (typeof value === "number") {
        valueAsDouble = value;
    }
    else if (typeof value === "string") {
        valueAsDouble = strictParseDouble(value);
    }
    else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    }
    if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    }
    return new Date(Math.round(valueAsDouble * 1000));
};
const buildDate = (year, month, day, time) => {
    const adjustedMonth = month - 1;
    validateDayOfMonth(year, adjustedMonth, day);
    return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
};
const parseTwoDigitYear = (value) => {
    const thisYear = new Date().getUTCFullYear();
    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
    if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
    }
    return valueInThisCentury;
};
const FIFTY_YEARS_IN_MILLIS = (/* unused pure expression or super */ null && (50 * 365 * 24 * 60 * 60 * 1000));
const adjustRfc850Year = (input) => {
    if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
    }
    return input;
};
const parseMonthByShortName = (value) => {
    const monthIdx = MONTHS.indexOf(value);
    if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
    }
    return monthIdx + 1;
};
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const validateDayOfMonth = (year, month, day) => {
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
    }
    if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
    }
};
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
const parseDateValue = (value, type, lower, upper) => {
    const dateVal = strictParseByte(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
    }
    return dateVal;
};
const parseMilliseconds = (value) => {
    if (value === null || value === undefined) {
        return 0;
    }
    return strictParseFloat32("0." + value) * 1000;
};
const parseOffsetToMilliseconds = (value) => {
    const directionStr = value[0];
    let direction = 1;
    if (directionStr == "+") {
        direction = 1;
    }
    else if (directionStr == "-") {
        direction = -1;
    }
    else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
    }
    const hour = Number(value.substring(1, 3));
    const minute = Number(value.substring(4, 6));
    return direction * (hour * 60 + minute) * 60 * 1000;
};
const stripLeadingZeroes = (value) => {
    let idx = 0;
    while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
    }
    if (idx === 0) {
        return value;
    }
    return value.slice(idx);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/exceptions.js
class ServiceException extends Error {
    constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
    }
}
const decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions)
        .filter(([, v]) => v !== undefined)
        .forEach(([k, v]) => {
        if (exception[k] == undefined || exception[k] === "") {
            exception[k] = v;
        }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/default-error-handler.js

const default_error_handler_throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
    const $metadata = deserializeMetadata(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
    const response = new exceptionCtor({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata,
    });
    throw decorateServiceException(response, parsedBody);
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/defaults-mode.js
const loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
        case "standard":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "in-region":
            return {
                retryMode: "standard",
                connectionTimeout: 1100,
            };
        case "cross-region":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "mobile":
            return {
                retryMode: "standard",
                connectionTimeout: 30000,
            };
        default:
            return {};
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 14) {
        warningEmitted = true;
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/get-value-from-text-node.js
const getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        }
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = getValueFromTextNode(obj[key]);
        }
    }
    return obj;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/lazy-json.js
const StringWrapper = function () {
    const Class = Object.getPrototypeOf(this).constructor;
    const Constructor = Function.bind.apply(String, [null, ...arguments]);
    const instance = new Constructor();
    Object.setPrototypeOf(instance, Class.prototype);
    return instance;
};
StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
        value: StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true,
    },
});
Object.setPrototypeOf(StringWrapper, String);
class LazyJsonString extends (/* unused pure expression or super */ null && (StringWrapper)) {
    deserializeJSON() {
        return JSON.parse(super.toString());
    }
    toJSON() {
        return super.toString();
    }
    static fromObject(object) {
        if (object instanceof LazyJsonString) {
            return object;
        }
        else if (object instanceof String || typeof object === "string") {
            return new LazyJsonString(object);
        }
        return new LazyJsonString(JSON.stringify(object));
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/object-mapping.js
function map(arg0, arg1, arg2) {
    let target;
    let filter;
    let instructions;
    if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
    }
    else {
        target = arg0;
        if (typeof arg1 === "function") {
            filter = arg1;
            instructions = arg2;
            return mapWithFilter(target, filter, instructions);
        }
        else {
            instructions = arg1;
        }
    }
    for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
            target[key] = instructions[key];
            continue;
        }
        let [filter, value] = instructions[key];
        if (typeof value === "function") {
            let _value;
            const defaultFilterPassed = filter === undefined && (_value = value()) != null;
            const customFilterPassed = (typeof filter === "function" && !!filter(void 0)) || (typeof filter !== "function" && !!filter);
            if (defaultFilterPassed) {
                target[key] = _value;
            }
            else if (customFilterPassed) {
                target[key] = value();
            }
        }
        else {
            const defaultFilterPassed = filter === undefined && value != null;
            const customFilterPassed = (typeof filter === "function" && !!filter(value)) || (typeof filter !== "function" && !!filter);
            if (defaultFilterPassed || customFilterPassed) {
                target[key] = value;
            }
        }
    }
    return target;
}
const convertMap = (target) => {
    const output = {};
    for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
    }
    return output;
};
const mapWithFilter = (target, filter, instructions) => {
    return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
            _instructions[key] = value;
        }
        else {
            if (typeof value === "function") {
                _instructions[key] = [filter, value()];
            }
            else {
                _instructions[key] = [filter, value];
            }
        }
        return _instructions;
    }, {}));
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/ser-utils.js
const serializeFloat = (value) => {
    if (value !== value) {
        return "NaN";
    }
    switch (value) {
        case Infinity:
            return "Infinity";
        case -Infinity:
            return "-Infinity";
        default:
            return value;
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/smithy-client/dist-es/index.js



















;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/endpoint/EndpointParameters.js
const resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "logs",
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/package.json
const package_namespaceObject = {"i8":"3.276.0"};
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/models/STSServiceException.js

class STSServiceException extends ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, STSServiceException.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/models/models_0.js

class ExpiredTokenException extends STSServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
    }
}
class MalformedPolicyDocumentException extends STSServiceException {
    constructor(opts) {
        super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...opts,
        });
        this.name = "MalformedPolicyDocumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    }
}
class PackedPolicyTooLargeException extends STSServiceException {
    constructor(opts) {
        super({
            name: "PackedPolicyTooLargeException",
            $fault: "client",
            ...opts,
        });
        this.name = "PackedPolicyTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
    }
}
class RegionDisabledException extends STSServiceException {
    constructor(opts) {
        super({
            name: "RegionDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "RegionDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RegionDisabledException.prototype);
    }
}
class IDPRejectedClaimException extends STSServiceException {
    constructor(opts) {
        super({
            name: "IDPRejectedClaimException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPRejectedClaimException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
    }
}
class InvalidIdentityTokenException extends STSServiceException {
    constructor(opts) {
        super({
            name: "InvalidIdentityTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidIdentityTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
    }
}
class IDPCommunicationErrorException extends STSServiceException {
    constructor(opts) {
        super({
            name: "IDPCommunicationErrorException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPCommunicationErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
    }
}
class models_0_InvalidAuthorizationMessageException extends (/* unused pure expression or super */ null && (__BaseException)) {
    constructor(opts) {
        super({
            name: "InvalidAuthorizationMessageException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidAuthorizationMessageException";
        this.$fault = "client";
        Object.setPrototypeOf(this, models_0_InvalidAuthorizationMessageException.prototype);
    }
}
const AssumedRoleUserFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PolicyDescriptorTypeFilterSensitiveLog = (obj) => ({
    ...obj,
});
const TagFilterSensitiveLog = (obj) => ({
    ...obj,
});
const AssumeRoleRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const CredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
});
const AssumeRoleResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const AssumeRoleWithSAMLRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const AssumeRoleWithSAMLResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const AssumeRoleWithWebIdentityRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const AssumeRoleWithWebIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DecodeAuthorizationMessageRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DecodeAuthorizationMessageResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetAccessKeyInfoRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetAccessKeyInfoResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetCallerIdentityRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetCallerIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetFederationTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const FederatedUserFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetFederationTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetSessionTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetSessionTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});

// EXTERNAL MODULE: ./node_modules/fast-xml-parser/src/fxp.js
var fxp = __webpack_require__(932);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/protocols/Aws_query.js





const serializeAws_queryAssumeRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAssumeRoleRequest(input, context),
        Action: "AssumeRole",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_queryAssumeRoleWithSAMLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAssumeRoleWithSAMLRequest(input, context),
        Action: "AssumeRoleWithSAML",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_queryAssumeRoleWithWebIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAssumeRoleWithWebIdentityRequest(input, context),
        Action: "AssumeRoleWithWebIdentity",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_queryDecodeAuthorizationMessageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDecodeAuthorizationMessageRequest(input, context),
        Action: "DecodeAuthorizationMessage",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_queryGetAccessKeyInfoCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetAccessKeyInfoRequest(input, context),
        Action: "GetAccessKeyInfo",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_queryGetCallerIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetCallerIdentityRequest(input, context),
        Action: "GetCallerIdentity",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_queryGetFederationTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetFederationTokenRequest(input, context),
        Action: "GetFederationToken",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_queryGetSessionTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetSessionTokenRequest(input, context),
        Action: "GetSessionToken",
        Version: "2011-06-15",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const deserializeAws_queryAssumeRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAssumeRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAssumeRoleResponse(data.AssumeRoleResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_queryAssumeRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                exceptionCtor: STSServiceException,
                errorCode,
            });
    }
};
const deserializeAws_queryAssumeRoleWithSAMLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAssumeRoleWithSAMLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_queryAssumeRoleWithSAMLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
            throw await deserializeAws_queryIDPRejectedClaimExceptionResponse(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
            throw await deserializeAws_queryInvalidIdentityTokenExceptionResponse(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
const deserializeAws_queryAssumeRoleWithWebIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAssumeRoleWithWebIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_queryAssumeRoleWithWebIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context);
        case "IDPCommunicationError":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
            throw await deserializeAws_queryIDPCommunicationErrorExceptionResponse(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
            throw await deserializeAws_queryIDPRejectedClaimExceptionResponse(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
            throw await deserializeAws_queryInvalidIdentityTokenExceptionResponse(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                exceptionCtor: STSServiceException,
                errorCode,
            });
    }
};
const deserializeAws_queryDecodeAuthorizationMessageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDecodeAuthorizationMessageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_queryDecodeAuthorizationMessageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidAuthorizationMessageException":
        case "com.amazonaws.sts#InvalidAuthorizationMessageException":
            throw await deserializeAws_queryInvalidAuthorizationMessageExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
const deserializeAws_queryGetAccessKeyInfoCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetAccessKeyInfoCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_queryGetAccessKeyInfoCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
    });
};
const deserializeAws_queryGetCallerIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetCallerIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetCallerIdentityResponse(data.GetCallerIdentityResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_queryGetCallerIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
    });
};
const deserializeAws_queryGetFederationTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetFederationTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetFederationTokenResponse(data.GetFederationTokenResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_queryGetFederationTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
const deserializeAws_queryGetSessionTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetSessionTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSessionTokenResponse(data.GetSessionTokenResult, context);
    const response = {
        $metadata: Aws_query_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_queryGetSessionTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
const deserializeAws_queryExpiredTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryExpiredTokenException(body.Error, context);
    const exception = new ExpiredTokenException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_queryIDPCommunicationErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIDPCommunicationErrorException(body.Error, context);
    const exception = new IDPCommunicationErrorException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_queryIDPRejectedClaimExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIDPRejectedClaimException(body.Error, context);
    const exception = new IDPRejectedClaimException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_queryInvalidAuthorizationMessageExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidAuthorizationMessageException(body.Error, context);
    const exception = new InvalidAuthorizationMessageException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const deserializeAws_queryInvalidIdentityTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidIdentityTokenException(body.Error, context);
    const exception = new InvalidIdentityTokenException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_queryMalformedPolicyDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMalformedPolicyDocumentException(body.Error, context);
    const exception = new MalformedPolicyDocumentException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_queryPackedPolicyTooLargeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPackedPolicyTooLargeException(body.Error, context);
    const exception = new PackedPolicyTooLargeException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_queryRegionDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryRegionDisabledException(body.Error, context);
    const exception = new RegionDisabledException({
        $metadata: Aws_query_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const serializeAws_queryAssumeRoleRequest = (input, context) => {
    const entries = {};
    if (input.RoleArn != null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.RoleSessionName != null) {
        entries["RoleSessionName"] = input.RoleSessionName;
    }
    if (input.PolicyArns != null) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        if (input.PolicyArns?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.Tags != null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        if (input.Tags?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TransitiveTagKeys != null) {
        const memberEntries = serializeAws_querytagKeyListType(input.TransitiveTagKeys, context);
        if (input.TransitiveTagKeys?.length === 0) {
            entries.TransitiveTagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TransitiveTagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ExternalId != null) {
        entries["ExternalId"] = input.ExternalId;
    }
    if (input.SerialNumber != null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.TokenCode != null) {
        entries["TokenCode"] = input.TokenCode;
    }
    if (input.SourceIdentity != null) {
        entries["SourceIdentity"] = input.SourceIdentity;
    }
    return entries;
};
const serializeAws_queryAssumeRoleWithSAMLRequest = (input, context) => {
    const entries = {};
    if (input.RoleArn != null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.PrincipalArn != null) {
        entries["PrincipalArn"] = input.PrincipalArn;
    }
    if (input.SAMLAssertion != null) {
        entries["SAMLAssertion"] = input.SAMLAssertion;
    }
    if (input.PolicyArns != null) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        if (input.PolicyArns?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    return entries;
};
const serializeAws_queryAssumeRoleWithWebIdentityRequest = (input, context) => {
    const entries = {};
    if (input.RoleArn != null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.RoleSessionName != null) {
        entries["RoleSessionName"] = input.RoleSessionName;
    }
    if (input.WebIdentityToken != null) {
        entries["WebIdentityToken"] = input.WebIdentityToken;
    }
    if (input.ProviderId != null) {
        entries["ProviderId"] = input.ProviderId;
    }
    if (input.PolicyArns != null) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        if (input.PolicyArns?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    return entries;
};
const serializeAws_queryDecodeAuthorizationMessageRequest = (input, context) => {
    const entries = {};
    if (input.EncodedMessage != null) {
        entries["EncodedMessage"] = input.EncodedMessage;
    }
    return entries;
};
const serializeAws_queryGetAccessKeyInfoRequest = (input, context) => {
    const entries = {};
    if (input.AccessKeyId != null) {
        entries["AccessKeyId"] = input.AccessKeyId;
    }
    return entries;
};
const serializeAws_queryGetCallerIdentityRequest = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryGetFederationTokenRequest = (input, context) => {
    const entries = {};
    if (input.Name != null) {
        entries["Name"] = input.Name;
    }
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    if (input.PolicyArns != null) {
        const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        if (input.PolicyArns?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.Tags != null) {
        const memberEntries = serializeAws_querytagListType(input.Tags, context);
        if (input.Tags?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryGetSessionTokenRequest = (input, context) => {
    const entries = {};
    if (input.DurationSeconds != null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.SerialNumber != null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.TokenCode != null) {
        entries["TokenCode"] = input.TokenCode;
    }
    return entries;
};
const serializeAws_querypolicyDescriptorListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryPolicyDescriptorType(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPolicyDescriptorType = (input, context) => {
    const entries = {};
    if (input.arn != null) {
        entries["arn"] = input.arn;
    }
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key != null) {
        entries["Key"] = input.Key;
    }
    if (input.Value != null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_querytagKeyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querytagListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const deserializeAws_queryAssumedRoleUser = (output, context) => {
    const contents = {
        AssumedRoleId: undefined,
        Arn: undefined,
    };
    if (output["AssumedRoleId"] !== undefined) {
        contents.AssumedRoleId = expectString(output["AssumedRoleId"]);
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = expectString(output["Arn"]);
    }
    return contents;
};
const deserializeAws_queryAssumeRoleResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
        AssumedRoleUser: undefined,
        PackedPolicySize: undefined,
        SourceIdentity: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = strictParseInt32(output["PackedPolicySize"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = expectString(output["SourceIdentity"]);
    }
    return contents;
};
const deserializeAws_queryAssumeRoleWithSAMLResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
        AssumedRoleUser: undefined,
        PackedPolicySize: undefined,
        Subject: undefined,
        SubjectType: undefined,
        Issuer: undefined,
        Audience: undefined,
        NameQualifier: undefined,
        SourceIdentity: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = __strictParseInt32(output["PackedPolicySize"]);
    }
    if (output["Subject"] !== undefined) {
        contents.Subject = __expectString(output["Subject"]);
    }
    if (output["SubjectType"] !== undefined) {
        contents.SubjectType = __expectString(output["SubjectType"]);
    }
    if (output["Issuer"] !== undefined) {
        contents.Issuer = __expectString(output["Issuer"]);
    }
    if (output["Audience"] !== undefined) {
        contents.Audience = __expectString(output["Audience"]);
    }
    if (output["NameQualifier"] !== undefined) {
        contents.NameQualifier = __expectString(output["NameQualifier"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = __expectString(output["SourceIdentity"]);
    }
    return contents;
};
const deserializeAws_queryAssumeRoleWithWebIdentityResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
        SubjectFromWebIdentityToken: undefined,
        AssumedRoleUser: undefined,
        PackedPolicySize: undefined,
        Provider: undefined,
        Audience: undefined,
        SourceIdentity: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["SubjectFromWebIdentityToken"] !== undefined) {
        contents.SubjectFromWebIdentityToken = expectString(output["SubjectFromWebIdentityToken"]);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = strictParseInt32(output["PackedPolicySize"]);
    }
    if (output["Provider"] !== undefined) {
        contents.Provider = expectString(output["Provider"]);
    }
    if (output["Audience"] !== undefined) {
        contents.Audience = expectString(output["Audience"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = expectString(output["SourceIdentity"]);
    }
    return contents;
};
const deserializeAws_queryCredentials = (output, context) => {
    const contents = {
        AccessKeyId: undefined,
        SecretAccessKey: undefined,
        SessionToken: undefined,
        Expiration: undefined,
    };
    if (output["AccessKeyId"] !== undefined) {
        contents.AccessKeyId = expectString(output["AccessKeyId"]);
    }
    if (output["SecretAccessKey"] !== undefined) {
        contents.SecretAccessKey = expectString(output["SecretAccessKey"]);
    }
    if (output["SessionToken"] !== undefined) {
        contents.SessionToken = expectString(output["SessionToken"]);
    }
    if (output["Expiration"] !== undefined) {
        contents.Expiration = expectNonNull(parseRfc3339DateTimeWithOffset(output["Expiration"]));
    }
    return contents;
};
const deserializeAws_queryDecodeAuthorizationMessageResponse = (output, context) => {
    const contents = {
        DecodedMessage: undefined,
    };
    if (output["DecodedMessage"] !== undefined) {
        contents.DecodedMessage = __expectString(output["DecodedMessage"]);
    }
    return contents;
};
const deserializeAws_queryExpiredTokenException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const deserializeAws_queryFederatedUser = (output, context) => {
    const contents = {
        FederatedUserId: undefined,
        Arn: undefined,
    };
    if (output["FederatedUserId"] !== undefined) {
        contents.FederatedUserId = __expectString(output["FederatedUserId"]);
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = __expectString(output["Arn"]);
    }
    return contents;
};
const deserializeAws_queryGetAccessKeyInfoResponse = (output, context) => {
    const contents = {
        Account: undefined,
    };
    if (output["Account"] !== undefined) {
        contents.Account = __expectString(output["Account"]);
    }
    return contents;
};
const deserializeAws_queryGetCallerIdentityResponse = (output, context) => {
    const contents = {
        UserId: undefined,
        Account: undefined,
        Arn: undefined,
    };
    if (output["UserId"] !== undefined) {
        contents.UserId = __expectString(output["UserId"]);
    }
    if (output["Account"] !== undefined) {
        contents.Account = __expectString(output["Account"]);
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = __expectString(output["Arn"]);
    }
    return contents;
};
const deserializeAws_queryGetFederationTokenResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
        FederatedUser: undefined,
        PackedPolicySize: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["FederatedUser"] !== undefined) {
        contents.FederatedUser = deserializeAws_queryFederatedUser(output["FederatedUser"], context);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = __strictParseInt32(output["PackedPolicySize"]);
    }
    return contents;
};
const deserializeAws_queryGetSessionTokenResponse = (output, context) => {
    const contents = {
        Credentials: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    return contents;
};
const deserializeAws_queryIDPCommunicationErrorException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const deserializeAws_queryIDPRejectedClaimException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const deserializeAws_queryInvalidAuthorizationMessageException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = __expectString(output["message"]);
    }
    return contents;
};
const deserializeAws_queryInvalidIdentityTokenException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const deserializeAws_queryMalformedPolicyDocumentException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const deserializeAws_queryPackedPolicyTooLargeException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const deserializeAws_queryRegionDisabledException = (output, context) => {
    const contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = expectString(output["message"]);
    }
    return contents;
};
const Aws_query_deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new httpRequest_HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        const parser = new fxp.XMLParser({
            attributeNamePrefix: "",
            htmlEntities: true,
            ignoreAttributes: false,
            ignoreDeclaration: true,
            parseTagValue: false,
            trimValues: false,
            tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        const parsedObj = parser.parse(encoded);
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return getValueFromTextNode(parsedObjToReturn);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
    }
    return value;
};
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => extendedEncodeURIComponent(key) + "=" + extendedEncodeURIComponent(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error?.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleCommand.js






class AssumeRoleCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, AssumeRoleCommand.getEndpointParameterInstructions()));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: AssumeRoleRequestFilterSensitiveLog,
            outputFilterSensitiveLog: AssumeRoleResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_queryAssumeRoleCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_queryAssumeRoleCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithWebIdentityCommand.js





class AssumeRoleWithWebIdentityCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, AssumeRoleWithWebIdentityCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "STSClient";
        const commandName = "AssumeRoleWithWebIdentityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
            outputFilterSensitiveLog: AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_queryAssumeRoleWithWebIdentityCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_queryAssumeRoleWithWebIdentityCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/defaultStsRoleAssumers.js


const ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
const decorateDefaultRegion = (region) => {
    if (typeof region !== "function") {
        return region === undefined ? ASSUME_ROLE_DEFAULT_REGION : region;
    }
    return async () => {
        try {
            return await region();
        }
        catch (e) {
            return ASSUME_ROLE_DEFAULT_REGION;
        }
    };
};
const getDefaultRoleAssumer = (stsOptions, stsClientCtor) => {
    let stsClient;
    let closureSourceCreds;
    return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
            const { logger, region, requestHandler } = stsOptions;
            stsClient = new stsClientCtor({
                logger,
                credentialDefaultProvider: () => async () => closureSourceCreds,
                region: decorateDefaultRegion(region || stsOptions.region),
                ...(requestHandler ? { requestHandler } : {}),
            });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
        };
    };
};
const getDefaultRoleAssumerWithWebIdentity = (stsOptions, stsClientCtor) => {
    let stsClient;
    return async (params) => {
        if (!stsClient) {
            const { logger, region, requestHandler } = stsOptions;
            stsClient = new stsClientCtor({
                logger,
                region: decorateDefaultRegion(region || stsOptions.region),
                ...(requestHandler ? { requestHandler } : {}),
            });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
        };
    };
};
const decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: getDefaultRoleAssumer(input, input.stsClientCtor),
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input, input.stsClientCtor),
    ...input,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-sdk-sts/dist-es/index.js

const resolveStsAuthConfig = (input, { stsClientCtor }) => resolveAwsAuthConfig({
    ...input,
    stsClientCtor,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/endpoint/EndpointParameters.js
const EndpointParameters_resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts",
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/package.json
const client_sts_package_namespaceObject = {"i8":"3.276.0"};
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js

const ENV_KEY = "AWS_ACCESS_KEY_ID";
const ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
const ENV_SESSION = "AWS_SESSION_TOKEN";
const ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
const fromEnv = () => async () => {
    const accessKeyId = process.env[ENV_KEY];
    const secretAccessKey = process.env[ENV_SECRET];
    const sessionToken = process.env[ENV_SESSION];
    const expiry = process.env[ENV_EXPIRATION];
    if (accessKeyId && secretAccessKey) {
        return {
            accessKeyId,
            secretAccessKey,
            ...(sessionToken && { sessionToken }),
            ...(expiry && { expiration: new Date(expiry) }),
        };
    }
    throw new CredentialsProviderError("Unable to find environment variable credentials.");
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-env/dist-es/index.js


;// CONCATENATED MODULE: external "os"
const external_os_namespaceObject = require("os");
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getHomeDir.js


const getHomeDir = () => {
    const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${external_path_namespaceObject.sep}` } = process.env;
    if (HOME)
        return HOME;
    if (USERPROFILE)
        return USERPROFILE;
    if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
    return (0,external_os_namespaceObject.homedir)();
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getProfileName.js
const ENV_PROFILE = "AWS_PROFILE";
const DEFAULT_PROFILE = "default";
const getProfileName = (init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js



const getSSOTokenFilepath = (id) => {
    const hasher = (0,external_crypto_.createHash)("sha1");
    const cacheName = hasher.update(id).digest("hex");
    return (0,external_path_namespaceObject.join)(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
};

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js


const { readFile } = external_fs_namespaceObject.promises;
const getSSOTokenFromFile = async (id) => {
    const ssoTokenFilepath = getSSOTokenFilepath(id);
    const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
    return JSON.parse(ssoTokenText);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getConfigFilepath.js


const ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
const getConfigFilepath = () => process.env[ENV_CONFIG_PATH] || (0,external_path_namespaceObject.join)(getHomeDir(), ".aws", "config");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getCredentialsFilepath.js


const ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
const getCredentialsFilepath = () => process.env[ENV_CREDENTIALS_PATH] || (0,external_path_namespaceObject.join)(getHomeDir(), ".aws", "credentials");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getProfileData.js
const profileKeyRegex = /^profile\s(["'])?([^\1]+)\1$/;
const getProfileData = (data) => Object.entries(data)
    .filter(([key]) => profileKeyRegex.test(key))
    .reduce((acc, [key, value]) => ({ ...acc, [profileKeyRegex.exec(key)[2]]: value }), {
    ...(data.default && { default: data.default }),
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/parseIni.js
const profileNameBlockList = ["__proto__", "profile __proto__"];
const parseIni = (iniData) => {
    const map = {};
    let currentSection;
    for (let line of iniData.split(/\r?\n/)) {
        line = line.split(/(^|\s)[;#]/)[0].trim();
        const isSection = line[0] === "[" && line[line.length - 1] === "]";
        if (isSection) {
            currentSection = line.substring(1, line.length - 1);
            if (profileNameBlockList.includes(currentSection)) {
                throw new Error(`Found invalid profile name "${currentSection}"`);
            }
        }
        else if (currentSection) {
            const indexOfEqualsSign = line.indexOf("=");
            const start = 0;
            const end = line.length - 1;
            const isAssignment = indexOfEqualsSign !== -1 && indexOfEqualsSign !== start && indexOfEqualsSign !== end;
            if (isAssignment) {
                const [name, value] = [
                    line.substring(0, indexOfEqualsSign).trim(),
                    line.substring(indexOfEqualsSign + 1).trim(),
                ];
                map[currentSection] = map[currentSection] || {};
                map[currentSection][name] = value;
            }
        }
    }
    return map;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/slurpFile.js

const { readFile: slurpFile_readFile } = external_fs_namespaceObject.promises;
const filePromisesHash = {};
const slurpFile = (path) => {
    if (!filePromisesHash[path]) {
        filePromisesHash[path] = slurpFile_readFile(path, "utf8");
    }
    return filePromisesHash[path];
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js





const swallowError = () => ({});
const loadSharedConfigFiles = async (init = {}) => {
    const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
    const parsedFiles = await Promise.all([
        slurpFile(configFilepath).then(parseIni).then(getProfileData).catch(swallowError),
        slurpFile(filepath).then(parseIni).catch(swallowError),
    ]);
    return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1],
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/getSsoSessionData.js
const ssoSessionKeyRegex = /^sso-session\s(["'])?([^\1]+)\1$/;
const getSsoSessionData = (data) => Object.entries(data)
    .filter(([key]) => ssoSessionKeyRegex.test(key))
    .reduce((acc, [key, value]) => ({ ...acc, [ssoSessionKeyRegex.exec(key)[2]]: value }), {});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/loadSsoSessionData.js




const loadSsoSessionData_swallowError = () => ({});
const loadSsoSessionData = async (init = {}) => slurpFile(init.configFilepath ?? getConfigFilepath())
    .then(parseIni)
    .then(getSsoSessionData)
    .catch(loadSsoSessionData_swallowError);

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/parseKnownFiles.js

const parseKnownFiles = async (init) => {
    const parsedFiles = await loadSharedConfigFiles(init);
    return {
        ...parsedFiles.configFile,
        ...parsedFiles.credentialsFile,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/shared-ini-file-loader/dist-es/index.js









;// CONCATENATED MODULE: external "url"
const external_url_namespaceObject = require("url");
;// CONCATENATED MODULE: external "http"
const external_http_namespaceObject = require("http");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/remoteProvider/httpRequest.js



function httpRequest(options) {
    return new Promise((resolve, reject) => {
        const req = (0,external_http_namespaceObject.request)({
            method: "GET",
            ...options,
            hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1"),
        });
        req.on("error", (err) => {
            reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
            req.destroy();
        });
        req.on("timeout", () => {
            reject(new ProviderError("TimeoutError from instance metadata service"));
            req.destroy();
        });
        req.on("response", (res) => {
            const { statusCode = 400 } = res;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode }));
                req.destroy();
            }
            const chunks = [];
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                resolve(external_buffer_namespaceObject.Buffer.concat(chunks));
                req.destroy();
            });
        });
        req.end();
    });
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/remoteProvider/ImdsCredentials.js
const isImdsCredentials = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.AccessKeyId === "string" &&
    typeof arg.SecretAccessKey === "string" &&
    typeof arg.Token === "string" &&
    typeof arg.Expiration === "string";
const fromImdsCredentials = (creds) => ({
    accessKeyId: creds.AccessKeyId,
    secretAccessKey: creds.SecretAccessKey,
    sessionToken: creds.Token,
    expiration: new Date(creds.Expiration),
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/remoteProvider/RemoteProviderInit.js
const DEFAULT_TIMEOUT = 1000;
const DEFAULT_MAX_RETRIES = 0;
const providerConfigFromInit = ({ maxRetries = DEFAULT_MAX_RETRIES, timeout = DEFAULT_TIMEOUT, }) => ({ maxRetries, timeout });

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/remoteProvider/retry.js
const retry = (toRetry, maxRetries) => {
    let promise = toRetry();
    for (let i = 0; i < maxRetries; i++) {
        promise = promise.catch(toRetry);
    }
    return promise;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/fromContainerMetadata.js






const ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
const ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
const ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
const fromContainerMetadata = (init = {}) => {
    const { timeout, maxRetries } = providerConfigFromInit(init);
    return () => retry(async () => {
        const requestOptions = await getCmdsUri();
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!isImdsCredentials(credsResponse)) {
            throw new CredentialsProviderError("Invalid response received from instance metadata service.");
        }
        return fromImdsCredentials(credsResponse);
    }, maxRetries);
};
const requestFromEcsImds = async (timeout, options) => {
    if (process.env[ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
            ...options.headers,
            Authorization: process.env[ENV_CMDS_AUTH_TOKEN],
        };
    }
    const buffer = await httpRequest({
        ...options,
        timeout,
    });
    return buffer.toString();
};
const CMDS_IP = "169.254.170.2";
const GREENGRASS_HOSTS = {
    localhost: true,
    "127.0.0.1": true,
};
const GREENGRASS_PROTOCOLS = {
    "http:": true,
    "https:": true,
};
const getCmdsUri = async () => {
    if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return {
            hostname: CMDS_IP,
            path: process.env[ENV_CMDS_RELATIVE_URI],
        };
    }
    if (process.env[ENV_CMDS_FULL_URI]) {
        const parsed = (0,external_url_namespaceObject.parse)(process.env[ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
            throw new CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, false);
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
            throw new CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, false);
        }
        return {
            ...parsed,
            port: parsed.port ? parseInt(parsed.port, 10) : undefined,
        };
    }
    throw new CredentialsProviderError("The container metadata credential provider cannot be used unless" +
        ` the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment` +
        " variable is set", false);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-config-provider/dist-es/fromEnv.js

const fromEnv_fromEnv = (envVarSelector) => async () => {
    try {
        const config = envVarSelector(process.env);
        if (config === undefined) {
            throw new Error();
        }
        return config;
    }
    catch (e) {
        throw new CredentialsProviderError(e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-config-provider/dist-es/fromSharedConfigFiles.js


const fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
    const profile = getProfileName(init);
    const { configFile, credentialsFile } = await loadSharedConfigFiles(init);
    const profileFromCredentials = credentialsFile[profile] || {};
    const profileFromConfig = configFile[profile] || {};
    const mergedProfile = preferredFile === "config"
        ? { ...profileFromCredentials, ...profileFromConfig }
        : { ...profileFromConfig, ...profileFromCredentials };
    try {
        const configValue = configSelector(mergedProfile);
        if (configValue === undefined) {
            throw new Error();
        }
        return configValue;
    }
    catch (e) {
        throw new CredentialsProviderError(e.message ||
            `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-config-provider/dist-es/fromStatic.js

const isFunction = (func) => typeof func === "function";
const fromStatic_fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : fromStatic(defaultValue);

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-config-provider/dist-es/configLoader.js




const loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => memoize(chain(fromEnv_fromEnv(environmentVariableSelector), fromSharedConfigFiles(configFileSelector, configuration), fromStatic_fromStatic(defaultValue)));

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-config-provider/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/config/Endpoint.js
var Endpoint;
(function (Endpoint) {
    Endpoint["IPv4"] = "http://169.254.169.254";
    Endpoint["IPv6"] = "http://[fd00:ec2::254]";
})(Endpoint || (Endpoint = {}));

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/config/EndpointConfigOptions.js
const ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
const CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
const ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_ENDPOINT_NAME],
    configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
    default: undefined,
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/config/EndpointMode.js
var EndpointMode;
(function (EndpointMode) {
    EndpointMode["IPv4"] = "IPv4";
    EndpointMode["IPv6"] = "IPv6";
})(EndpointMode || (EndpointMode = {}));

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/config/EndpointModeConfigOptions.js

const ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
const CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
const ENDPOINT_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_ENDPOINT_MODE_NAME],
    configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
    default: EndpointMode.IPv4,
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/utils/getInstanceMetadataEndpoint.js






const getInstanceMetadataEndpoint = async () => parseUrl((await getFromEndpointConfig()) || (await getFromEndpointModeConfig()));
const getFromEndpointConfig = async () => loadConfig(ENDPOINT_CONFIG_OPTIONS)();
const getFromEndpointModeConfig = async () => {
    const endpointMode = await loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS)();
    switch (endpointMode) {
        case EndpointMode.IPv4:
            return Endpoint.IPv4;
        case EndpointMode.IPv6:
            return Endpoint.IPv6;
        default:
            throw new Error(`Unsupported endpoint mode: ${endpointMode}.` + ` Select from ${Object.values(EndpointMode)}`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/utils/getExtendedInstanceMetadataCredentials.js
const STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
const STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
const STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
const getExtendedInstanceMetadataCredentials = (credentials, logger) => {
    const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS +
        Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
    const newExpiration = new Date(Date.now() + refreshInterval * 1000);
    logger.warn("Attempting credential expiration extension due to a credential service availability issue. A refresh of these " +
        "credentials will be attempted after ${new Date(newExpiration)}.\nFor more information, please visit: " +
        STATIC_STABILITY_DOC_URL);
    const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
    return {
        ...credentials,
        ...(originalExpiration ? { originalExpiration } : {}),
        expiration: newExpiration,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/utils/staticStabilityProvider.js

const staticStabilityProvider = (provider, options = {}) => {
    const logger = options?.logger || console;
    let pastCredentials;
    return async () => {
        let credentials;
        try {
            credentials = await provider();
            if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
                credentials = getExtendedInstanceMetadataCredentials(credentials, logger);
            }
        }
        catch (e) {
            if (pastCredentials) {
                logger.warn("Credential renew failed: ", e);
                credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger);
            }
            else {
                throw e;
            }
        }
        pastCredentials = credentials;
        return credentials;
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/fromInstanceMetadata.js







const IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
const IMDS_TOKEN_PATH = "/latest/api/token";
const fromInstanceMetadata = (init = {}) => staticStabilityProvider(getInstanceImdsProvider(init), { logger: init.logger });
const getInstanceImdsProvider = (init) => {
    let disableFetchToken = false;
    const { timeout, maxRetries } = providerConfigFromInit(init);
    const getCredentials = async (maxRetries, options) => {
        const profile = (await retry(async () => {
            let profile;
            try {
                profile = await getProfile(options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return profile;
        }, maxRetries)).trim();
        return retry(async () => {
            let creds;
            try {
                creds = await getCredentialsFromProfile(profile, options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return creds;
        }, maxRetries);
    };
    return async () => {
        const endpoint = await getInstanceMetadataEndpoint();
        if (disableFetchToken) {
            return getCredentials(maxRetries, { ...endpoint, timeout });
        }
        else {
            let token;
            try {
                token = (await getMetadataToken({ ...endpoint, timeout })).toString();
            }
            catch (error) {
                if (error?.statusCode === 400) {
                    throw Object.assign(error, {
                        message: "EC2 Metadata token request returned error",
                    });
                }
                else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
                    disableFetchToken = true;
                }
                return getCredentials(maxRetries, { ...endpoint, timeout });
            }
            return getCredentials(maxRetries, {
                ...endpoint,
                headers: {
                    "x-aws-ec2-metadata-token": token,
                },
                timeout,
            });
        }
    };
};
const getMetadataToken = async (options) => httpRequest({
    ...options,
    path: IMDS_TOKEN_PATH,
    method: "PUT",
    headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600",
    },
});
const getProfile = async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString();
const getCredentialsFromProfile = async (profile, options) => {
    const credsResponse = JSON.parse((await httpRequest({
        ...options,
        path: IMDS_PATH + profile,
    })).toString());
    if (!isImdsCredentials(credsResponse)) {
        throw new CredentialsProviderError("Invalid response received from instance metadata service.");
    }
    return fromImdsCredentials(credsResponse);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-imds/dist-es/index.js







;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js



const resolveCredentialSource = (credentialSource, profileName) => {
    const sourceProvidersMap = {
        EcsContainer: fromContainerMetadata,
        Ec2InstanceMetadata: fromInstanceMetadata,
        Environment: fromEnv,
    };
    if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource]();
    }
    else {
        throw new CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, ` +
            `expected EcsContainer or Ec2InstanceMetadata or Environment.`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js




const isAssumeRoleProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 &&
    (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg));
const isAssumeRoleWithSourceProfile = (arg) => typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
const isAssumeRoleWithProviderProfile = (arg) => typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
const resolveAssumeRoleCredentials = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (!options.roleAssumer) {
        throw new CredentialsProviderError(`Profile ${profileName} requires a role to be assumed, but no role assumption callback was provided.`, false);
    }
    const { source_profile } = data;
    if (source_profile && source_profile in visitedProfiles) {
        throw new CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile` +
            ` ${getProfileName(options)}. Profiles visited: ` +
            Object.keys(visitedProfiles).join(", "), false);
    }
    const sourceCredsProvider = source_profile
        ? resolveProfileData(source_profile, profiles, options, {
            ...visitedProfiles,
            [source_profile]: true,
        })
        : resolveCredentialSource(data.credential_source, profileName)();
    const params = {
        RoleArn: data.role_arn,
        RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
        ExternalId: data.external_id,
    };
    const { mfa_serial } = data;
    if (mfa_serial) {
        if (!options.mfaCodeProvider) {
            throw new CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, false);
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
    }
    const sourceCreds = await sourceCredsProvider;
    return options.roleAssumer(sourceCreds, params);
};

;// CONCATENATED MODULE: external "child_process"
const external_child_process_namespaceObject = require("child_process");
;// CONCATENATED MODULE: external "util"
const external_util_namespaceObject = require("util");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js
const getValidatedProcessCredentials = (profileName, data) => {
    if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
    }
    if (data.AccessKeyId === undefined || data.SecretAccessKey === undefined) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
    }
    if (data.Expiration) {
        const currentTime = new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
            throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
    }
    return {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...(data.SessionToken && { sessionToken: data.SessionToken }),
        ...(data.Expiration && { expiration: new Date(data.Expiration) }),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js




const resolveProcessCredentials = async (profileName, profiles) => {
    const profile = profiles[profileName];
    if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== undefined) {
            const execPromise = (0,external_util_namespaceObject.promisify)(external_child_process_namespaceObject.exec);
            try {
                const { stdout } = await execPromise(credentialProcess);
                let data;
                try {
                    data = JSON.parse(stdout.trim());
                }
                catch {
                    throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
                }
                return getValidatedProcessCredentials(profileName, data);
            }
            catch (error) {
                throw new CredentialsProviderError(error.message);
            }
        }
        else {
            throw new CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`);
        }
    }
    else {
        throw new CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js


const fromProcess = (init = {}) => async () => {
    const profiles = await parseKnownFiles(init);
    return resolveProcessCredentials(getProfileName(init), profiles);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-process/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js

const isProcessProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.credential_process === "string";
const resolveProcessCredentials_resolveProcessCredentials = async (options, profile) => fromProcess({
    ...options,
    profile,
})();

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js
const isSsoProfile = (arg) => arg &&
    (typeof arg.sso_start_url === "string" ||
        typeof arg.sso_account_id === "string" ||
        typeof arg.sso_session === "string" ||
        typeof arg.sso_region === "string" ||
        typeof arg.sso_role_name === "string");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js
const endpoint_EndpointParameters_resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal",
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/package.json
const client_sso_package_namespaceObject = {"i8":"3.272.0"};
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/hash-node/dist-es/index.js




class Hash {
    constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
    }
    update(toHash, encoding) {
        this.hash.update(toUint8Array(castSourceData(toHash, encoding)));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
    reset() {
        this.hash = this.secret
            ? (0,external_crypto_.createHmac)(this.algorithmIdentifier, castSourceData(this.secret))
            : (0,external_crypto_.createHash)(this.algorithmIdentifier);
    }
}
function castSourceData(toCast, encoding) {
    if (external_buffer_namespaceObject.Buffer.isBuffer(toCast)) {
        return toCast;
    }
    if (typeof toCast === "string") {
        return fromString(toCast, encoding);
    }
    if (ArrayBuffer.isView(toCast)) {
        return fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
    }
    return fromArrayBuffer(toCast);
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/querystring-builder/dist-es/index.js

function dist_es_buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = escapeUri(key);
        if (Array.isArray(value)) {
            for (let i = 0, iLen = value.length; i < iLen; i++) {
                parts.push(`${key}=${escapeUri(value[i])}`);
            }
        }
        else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${escapeUri(value)}`;
            }
            parts.push(qsEntry);
        }
    }
    return parts.join("&");
}

;// CONCATENATED MODULE: external "https"
const external_https_namespaceObject = require("https");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-http-handler/dist-es/constants.js
const constants_NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-http-handler/dist-es/get-transformed-headers.js
const get_transformed_headers_getTransformedHeaders = (headers) => {
    const transformedHeaders = {};
    for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
    }
    return transformedHeaders;
};


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-http-handler/dist-es/set-connection-timeout.js
const setConnectionTimeout = (request, reject, timeoutInMs = 0) => {
    if (!timeoutInMs) {
        return;
    }
    request.on("socket", (socket) => {
        if (socket.connecting) {
            const timeoutId = setTimeout(() => {
                request.destroy();
                reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
                    name: "TimeoutError",
                }));
            }, timeoutInMs);
            socket.on("connect", () => {
                clearTimeout(timeoutId);
            });
        }
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-http-handler/dist-es/set-socket-timeout.js
const setSocketTimeout = (request, reject, timeoutInMs = 0) => {
    request.setTimeout(timeoutInMs, () => {
        request.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
    });
};

;// CONCATENATED MODULE: external "stream"
const external_stream_namespaceObject = require("stream");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-http-handler/dist-es/write-request-body.js

function write_request_body_writeRequestBody(httpRequest, request) {
    const expect = request.headers["Expect"] || request.headers["expect"];
    if (expect === "100-continue") {
        httpRequest.on("continue", () => {
            writeBody(httpRequest, request.body);
        });
    }
    else {
        writeBody(httpRequest, request.body);
    }
}
function writeBody(httpRequest, body) {
    if (body instanceof external_stream_namespaceObject.Readable) {
        body.pipe(httpRequest);
    }
    else if (body) {
        httpRequest.end(Buffer.from(body));
    }
    else {
        httpRequest.end();
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-http-handler/dist-es/node-http-handler.js









class NodeHttpHandler {
    constructor(options) {
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((_options) => {
                    resolve(this.resolveDefaultConfig(_options));
                })
                    .catch(reject);
            }
            else {
                resolve(this.resolveDefaultConfig(options));
            }
        });
    }
    resolveDefaultConfig(options) {
        const { connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
            connectionTimeout,
            socketTimeout,
            httpAgent: httpAgent || new external_http_namespaceObject.Agent({ keepAlive, maxSockets }),
            httpsAgent: httpsAgent || new external_https_namespaceObject.Agent({ keepAlive, maxSockets }),
        };
    }
    destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        return new Promise((resolve, reject) => {
            if (!this.config) {
                throw new Error("Node HTTP request handler config is not resolved");
            }
            if (abortSignal?.aborted) {
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            const isSSL = request.protocol === "https:";
            const queryString = dist_es_buildQueryString(request.query || {});
            const nodeHttpsOptions = {
                headers: request.headers,
                host: request.hostname,
                method: request.method,
                path: queryString ? `${request.path}?${queryString}` : request.path,
                port: request.port,
                agent: isSSL ? this.config.httpsAgent : this.config.httpAgent,
            };
            const requestFunc = isSSL ? external_https_namespaceObject.request : external_http_namespaceObject.request;
            const req = requestFunc(nodeHttpsOptions, (res) => {
                const httpResponse = new httpResponse_HttpResponse({
                    statusCode: res.statusCode || -1,
                    headers: get_transformed_headers_getTransformedHeaders(res.headers),
                    body: res,
                });
                resolve({ response: httpResponse });
            });
            req.on("error", (err) => {
                if (constants_NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
                    reject(Object.assign(err, { name: "TimeoutError" }));
                }
                else {
                    reject(err);
                }
            });
            setConnectionTimeout(req, reject, this.config.connectionTimeout);
            setSocketTimeout(req, reject, this.config.socketTimeout);
            if (abortSignal) {
                abortSignal.onabort = () => {
                    req.abort();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }
            write_request_body_writeRequestBody(req, request);
        });
    }
}

;// CONCATENATED MODULE: external "http2"
const external_http2_namespaceObject = require("http2");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-http-handler/dist-es/node-http2-handler.js





class NodeHttp2Handler {
    constructor(options) {
        this.metadata = { handlerProtocol: "h2" };
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((opts) => {
                    resolve(opts || {});
                })
                    .catch(reject);
            }
            else {
                resolve(options || {});
            }
        });
        this.sessionCache = new Map();
    }
    destroy() {
        for (const sessions of this.sessionCache.values()) {
            sessions.forEach((session) => this.destroySession(session));
        }
        this.sessionCache.clear();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        const { requestTimeout, disableConcurrentStreams } = this.config;
        return new Promise((resolve, rejectOriginal) => {
            let fulfilled = false;
            if (abortSignal?.aborted) {
                fulfilled = true;
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                rejectOriginal(abortError);
                return;
            }
            const { hostname, method, port, protocol, path, query } = request;
            const authority = `${protocol}//${hostname}${port ? `:${port}` : ""}`;
            const session = this.getSession(authority, disableConcurrentStreams || false);
            const reject = (err) => {
                if (disableConcurrentStreams) {
                    this.destroySession(session);
                }
                fulfilled = true;
                rejectOriginal(err);
            };
            const queryString = buildQueryString(query || {});
            const req = session.request({
                ...request.headers,
                [constants.HTTP2_HEADER_PATH]: queryString ? `${path}?${queryString}` : path,
                [constants.HTTP2_HEADER_METHOD]: method,
            });
            session.ref();
            req.on("response", (headers) => {
                const httpResponse = new HttpResponse({
                    statusCode: headers[":status"] || -1,
                    headers: getTransformedHeaders(headers),
                    body: req,
                });
                fulfilled = true;
                resolve({ response: httpResponse });
                if (disableConcurrentStreams) {
                    session.close();
                    this.deleteSessionFromCache(authority, session);
                }
            });
            if (requestTimeout) {
                req.setTimeout(requestTimeout, () => {
                    req.close();
                    const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
                    timeoutError.name = "TimeoutError";
                    reject(timeoutError);
                });
            }
            if (abortSignal) {
                abortSignal.onabort = () => {
                    req.close();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }
            req.on("frameError", (type, code, id) => {
                reject(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
            });
            req.on("error", reject);
            req.on("aborted", () => {
                reject(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`));
            });
            req.on("close", () => {
                session.unref();
                if (disableConcurrentStreams) {
                    session.destroy();
                }
                if (!fulfilled) {
                    reject(new Error("Unexpected error: http2 request did not get a response"));
                }
            });
            writeRequestBody(req, request);
        });
    }
    getSession(authority, disableConcurrentStreams) {
        const sessionCache = this.sessionCache;
        const existingSessions = sessionCache.get(authority) || [];
        if (existingSessions.length > 0 && !disableConcurrentStreams)
            return existingSessions[0];
        const newSession = connect(authority);
        newSession.unref();
        const destroySessionCb = () => {
            this.destroySession(newSession);
            this.deleteSessionFromCache(authority, newSession);
        };
        newSession.on("goaway", destroySessionCb);
        newSession.on("error", destroySessionCb);
        newSession.on("frameError", destroySessionCb);
        newSession.on("close", () => this.deleteSessionFromCache(authority, newSession));
        if (this.config?.sessionTimeout) {
            newSession.setTimeout(this.config.sessionTimeout, destroySessionCb);
        }
        existingSessions.push(newSession);
        sessionCache.set(authority, existingSessions);
        return newSession;
    }
    destroySession(session) {
        if (!session.destroyed) {
            session.destroy();
        }
    }
    deleteSessionFromCache(authority, session) {
        const existingSessions = this.sessionCache.get(authority) || [];
        if (!existingSessions.includes(session)) {
            return;
        }
        this.sessionCache.set(authority, existingSessions.filter((s) => s !== session));
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-http-handler/dist-es/stream-collector/collector.js

class Collector extends external_stream_namespaceObject.Writable {
    constructor() {
        super(...arguments);
        this.bufferedBytes = [];
    }
    _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-http-handler/dist-es/stream-collector/index.js

const streamCollector = (stream) => new Promise((resolve, reject) => {
    const collector = new Collector();
    stream.pipe(collector);
    stream.on("error", (err) => {
        collector.end();
        reject(err);
    });
    collector.on("error", reject);
    collector.on("finish", function () {
        const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
        resolve(bytes);
    });
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/node-http-handler/dist-es/index.js




;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-body-length-node/dist-es/calculateBodyLength.js

const calculateBodyLength = (body) => {
    if (!body) {
        return 0;
    }
    if (typeof body === "string") {
        return Buffer.from(body).length;
    }
    else if (typeof body.byteLength === "number") {
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return (0,external_fs_namespaceObject.lstatSync)(body.path).size;
    }
    else if (typeof body.fd === "number") {
        return (0,external_fs_namespaceObject.fstatSync)(body.fd).size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-body-length-node/dist-es/index.js


;// CONCATENATED MODULE: external "process"
const external_process_namespaceObject = require("process");
// EXTERNAL MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js
var is_crt_available = __webpack_require__(890);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js




const UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
const UA_APP_ID_INI_NAME = "sdk-ua-app-id";
const defaultUserAgent = ({ serviceId, clientVersion }) => {
    const sections = [
        ["aws-sdk-js", clientVersion],
        [`os/${(0,external_os_namespaceObject.platform)()}`, (0,external_os_namespaceObject.release)()],
        ["lang/js"],
        ["md/nodejs", `${external_process_namespaceObject.versions.node}`],
    ];
    const crtAvailable = (0,is_crt_available/* isCrtAvailable */.E)();
    if (crtAvailable) {
        sections.push(crtAvailable);
    }
    if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
    }
    if (external_process_namespaceObject.env.AWS_EXECUTION_ENV) {
        sections.push([`exec-env/${external_process_namespaceObject.env.AWS_EXECUTION_ENV}`]);
    }
    const appIdPromise = loadConfig({
        environmentVariableSelector: (env) => env[UA_APP_ID_ENV_NAME],
        configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
        default: undefined,
    })();
    let resolvedUserAgent = undefined;
    return async () => {
        if (!resolvedUserAgent) {
            const appId = await appIdPromise;
            resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        }
        return resolvedUserAgent;
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-base64/dist-es/fromBase64.js

const BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
const fromBase64 = (input) => {
    if ((input.length * 3) % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
    }
    if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
    }
    const buffer = fromString(input, "base64");
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-base64/dist-es/toBase64.js

const toBase64 = (input) => fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-base64/dist-es/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
const partitions_namespaceObject = JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"aws-global":{"description":"AWS Standard global region"},"ca-central-1":{"description":"Canada (Central)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"AWS China global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"AWS GovCloud (US) global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"c2s.ic.gov","name":"aws-iso","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"AWS ISO (US) global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"sc2s.sgov.gov","name":"aws-iso-b","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"AWS ISOB (US) global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"}}}],"version":"1.1"}');
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js

const { partitions } = partitions_namespaceObject;
const DEFAULT_PARTITION = partitions.find((partition) => partition.id === "aws");
const partition = (value) => {
    for (const partition of partitions) {
        const { regions, outputs } = partition;
        for (const [region, regionData] of Object.entries(regions)) {
            if (region === value) {
                return {
                    ...outputs,
                    ...regionData,
                };
            }
        }
    }
    for (const partition of partitions) {
        const { regionRegex, outputs } = partition;
        if (new RegExp(regionRegex).test(value)) {
            return {
                ...outputs,
            };
        }
    }
    if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex," +
            " and default partition with id 'aws' doesn't exist.");
    }
    return {
        ...DEFAULT_PARTITION.outputs,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/debug/debugId.js
const debugId = "endpoints";

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/debug/toDebugString.js
function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
        return input;
    }
    if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js
class EndpointError extends Error {
    constructor(message) {
        super(message);
        this.name = "EndpointError";
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js







;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js
const IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
const isIpAddress = (value) => IP_V4_REGEX.test(value) || (value.startsWith("[") && value.endsWith("]"));

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isValidHostLabel.js
const VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
const isValidHostLabel = (value, allowSubDomains = false) => {
    if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
    }
    const labels = value.split(".");
    for (const label of labels) {
        if (!isValidHostLabel(label)) {
            return false;
        }
    }
    return true;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js


const isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
    if (allowSubDomains) {
        for (const label of value.split(".")) {
            if (!isVirtualHostableS3Bucket(label)) {
                return false;
            }
        }
        return true;
    }
    if (!isValidHostLabel(value)) {
        return false;
    }
    if (value.length < 3 || value.length > 63) {
        return false;
    }
    if (value !== value.toLowerCase()) {
        return false;
    }
    if (isIpAddress(value)) {
        return false;
    }
    return true;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
const parseArn = (value) => {
    const segments = value.split(":");
    if (segments.length < 6)
        return null;
    const [arn, partition, service, region, accountId, ...resourceId] = segments;
    if (arn !== "arn" || partition === "" || service === "" || resourceId[0] === "")
        return null;
    return {
        partition,
        service,
        region,
        accountId,
        resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/index.js




;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/booleanEquals.js
const booleanEquals = (value1, value2) => value1 === value2;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/getAttrPathList.js

const getAttrPathList = (path) => {
    const parts = path.split(".");
    const pathList = [];
    for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
            if (part.indexOf("]") !== part.length - 1) {
                throw new EndpointError(`Path: '${path}' does not end with ']'`);
            }
            const arrayIndex = part.slice(squareBracketIndex + 1, -1);
            if (Number.isNaN(parseInt(arrayIndex))) {
                throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
            }
            if (squareBracketIndex !== 0) {
                pathList.push(part.slice(0, squareBracketIndex));
            }
            pathList.push(arrayIndex);
        }
        else {
            pathList.push(part);
        }
    }
    return pathList;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/getAttr.js


const getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
        throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    }
    else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
    }
    return acc[index];
}, value);

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isSet.js
const isSet = (value) => value != null;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/not.js
const not = (value) => !value;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/types/dist-es/auth.js
var HttpAuthLocation;
(function (HttpAuthLocation) {
    HttpAuthLocation["HEADER"] = "header";
    HttpAuthLocation["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/types/dist-es/dns.js
var HostAddressType;
(function (HostAddressType) {
    HostAddressType["AAAA"] = "AAAA";
    HostAddressType["A"] = "A";
})(HostAddressType || (HostAddressType = {}));

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/types/dist-es/endpoint.js
var EndpointURLScheme;
(function (EndpointURLScheme) {
    EndpointURLScheme["HTTP"] = "http";
    EndpointURLScheme["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/types/dist-es/index.js




























;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/parseURL.js


const DEFAULT_PORTS = {
    [EndpointURLScheme.HTTP]: 80,
    [EndpointURLScheme.HTTPS]: 443,
};
const parseURL = (value) => {
    const whatwgURL = (() => {
        try {
            if (value instanceof URL) {
                return value;
            }
            if (typeof value === "object" && "hostname" in value) {
                const { hostname, port, protocol = "", path = "", query = {} } = value;
                const url = new URL(`${protocol}//${hostname}${port ? `:${port}` : ""}${path}`);
                url.search = Object.entries(query)
                    .map(([k, v]) => `${k}=${v}`)
                    .join("&");
                return url;
            }
            return new URL(value);
        }
        catch (error) {
            return null;
        }
    })();
    if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
    }
    const urlString = whatwgURL.href;
    const { host, hostname, pathname, protocol, search } = whatwgURL;
    if (search) {
        return null;
    }
    const scheme = protocol.slice(0, -1);
    if (!Object.values(EndpointURLScheme).includes(scheme)) {
        return null;
    }
    const isIp = isIpAddress(hostname);
    const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) ||
        (typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`));
    const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
    return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/stringEquals.js
const stringEquals = (value1, value2) => value1 === value2;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/substring.js
const substring = (input, start, stop, reverse) => {
    if (start >= stop || input.length < stop) {
        return null;
    }
    if (!reverse) {
        return input.substring(start, stop);
    }
    return input.substring(input.length - stop, input.length - start);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/uriEncode.js
const uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/index.js











;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateTemplate.js

const evaluateTemplate = (template, options) => {
    const evaluatedTemplateArr = [];
    const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    let currentIndex = 0;
    while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(currentIndex));
            break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex));
            break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
            currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
            const [refName, attrName] = parameterName.split("#");
            evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
        }
        else {
            evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
    }
    return evaluatedTemplateArr.join("");
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getReferenceValue.js
const getReferenceValue = ({ ref }, options) => {
    const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    return referenceRecord[ref];
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateExpression.js




const evaluateExpression = (obj, keyName, options) => {
    if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
    }
    else if (obj["fn"]) {
        return callFunction(obj, options);
    }
    else if (obj["ref"]) {
        return getReferenceValue(obj, options);
    }
    throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/callFunction.js


const callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
    return fn.split(".").reduce((acc, key) => acc[key], lib_namespaceObject)(...evaluatedArgs);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateCondition.js



const evaluateCondition = ({ assign, ...fnArgs }, options) => {
    if (assign && assign in options.referenceRecord) {
        throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
    }
    const value = callFunction(fnArgs, options);
    options.logger?.debug?.(debugId, `evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
    return {
        result: value === "" ? true : !!value,
        ...(assign != null && { toAssign: { name: assign, value } }),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateConditions.js


const evaluateConditions = (conditions = [], options) => {
    const conditionsReferenceRecord = {};
    for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, {
            ...options,
            referenceRecord: {
                ...options.referenceRecord,
                ...conditionsReferenceRecord,
            },
        });
        if (!result) {
            return { result };
        }
        if (toAssign) {
            conditionsReferenceRecord[toAssign.name] = toAssign.value;
            options.logger?.debug?.(debugId, `assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
    }
    return { result: true, referenceRecord: conditionsReferenceRecord };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointHeaders.js


const getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
    ...acc,
    [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
            throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
    }),
}), {});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointProperty.js



const getEndpointProperty = (property, options) => {
    if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
    }
    switch (typeof property) {
        case "string":
            return evaluateTemplate(property, options);
        case "object":
            if (property === null) {
                throw new EndpointError(`Unexpected endpoint property: ${property}`);
            }
            return getEndpointProperties(property, options);
        case "boolean":
            return property;
        default:
            throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointProperties.js

const getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
    ...acc,
    [propertyKey]: getEndpointProperty(propertyVal, options),
}), {});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointUrl.js


const getEndpointUrl = (endpointUrl, options) => {
    const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
    if (typeof expression === "string") {
        try {
            return new URL(expression);
        }
        catch (error) {
            console.error(`Failed to construct URL with ${expression}`, error);
            throw error;
        }
    }
    throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateEndpointRule.js





const evaluateEndpointRule = (endpointRule, options) => {
    const { conditions, endpoint } = endpointRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    };
    const { url, properties, headers } = endpoint;
    options.logger?.debug?.(debugId, `Resolving endpoint from template: ${toDebugString(endpoint)}`);
    return {
        ...(headers != undefined && {
            headers: getEndpointHeaders(headers, endpointRuleOptions),
        }),
        ...(properties != undefined && {
            properties: getEndpointProperties(properties, endpointRuleOptions),
        }),
        url: getEndpointUrl(url, endpointRuleOptions),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateErrorRule.js



const evaluateErrorRule = (errorRule, options) => {
    const { conditions, error } = errorRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    throw new EndpointError(evaluateExpression(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    }));
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateTreeRule.js


const evaluateTreeRule = (treeRule, options) => {
    const { conditions, rules } = treeRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    return evaluateRules(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateRules.js




const evaluateRules = (rules, options) => {
    for (const rule of rules) {
        if (rule.type === "endpoint") {
            const endpointOrUndefined = evaluateEndpointRule(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else if (rule.type === "error") {
            evaluateErrorRule(rule, options);
        }
        else if (rule.type === "tree") {
            const endpointOrUndefined = evaluateTreeRule(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else {
            throw new EndpointError(`Unknown endpoint rule: ${rule}`);
        }
    }
    throw new EndpointError(`Rules evaluation failed`);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js



const resolveEndpoint = (ruleSetObject, options) => {
    const { endpointParams, logger } = options;
    const { parameters, rules } = ruleSetObject;
    options.logger?.debug?.(debugId, `Initial EndpointParams: ${toDebugString(endpointParams)}`);
    const paramsWithDefault = Object.entries(parameters)
        .filter(([, v]) => v.default != null)
        .map(([k, v]) => [k, v.default]);
    if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
            endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
    }
    const requiredParams = Object.entries(parameters)
        .filter(([, v]) => v.required)
        .map(([k]) => k);
    for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
            throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
    }
    const endpoint = evaluateRules(rules, { endpointParams, logger, referenceRecord: {} });
    if (options.endpointParams?.Endpoint) {
        try {
            const givenEndpoint = new URL(options.endpointParams.Endpoint);
            const { protocol, port } = givenEndpoint;
            endpoint.url.protocol = protocol;
            endpoint.url.port = port;
        }
        catch (e) {
        }
    }
    options.logger?.debug?.(debugId, `Resolved endpoint: ${toDebugString(endpoint)}`);
    return endpoint;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/index.js




;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/endpoint/ruleset.js
const p = "required", q = "fn", r = "argv", s = "ref";
const a = "PartitionResult", b = "tree", c = "error", d = "endpoint", e = { [p]: false, "type": "String" }, f = { [p]: true, "default": false, "type": "Boolean" }, g = { [s]: "Endpoint" }, h = { [q]: "booleanEquals", [r]: [{ [s]: "UseFIPS" }, true] }, i = { [q]: "booleanEquals", [r]: [{ [s]: "UseDualStack" }, true] }, j = {}, k = { [q]: "booleanEquals", [r]: [true, { [q]: "getAttr", [r]: [{ [s]: a }, "supportsFIPS"] }] }, l = { [q]: "booleanEquals", [r]: [true, { [q]: "getAttr", [r]: [{ [s]: a }, "supportsDualStack"] }] }, m = [g], n = [h], o = [i];
const _data = { version: "1.0", parameters: { Region: e, UseDualStack: f, UseFIPS: f, Endpoint: e }, rules: [{ conditions: [{ [q]: "aws.partition", [r]: [{ [s]: "Region" }], assign: a }], type: b, rules: [{ conditions: [{ [q]: "isSet", [r]: m }, { [q]: "parseURL", [r]: m, assign: "url" }], type: b, rules: [{ conditions: n, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: c }, { type: b, rules: [{ conditions: o, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: c }, { endpoint: { url: g, properties: j, headers: j }, type: d }] }] }, { conditions: [h, i], type: b, rules: [{ conditions: [k, l], type: b, rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j, headers: j }, type: d }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: c }] }, { conditions: n, type: b, rules: [{ conditions: [k], type: b, rules: [{ type: b, rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: j, headers: j }, type: d }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: c }] }, { conditions: o, type: b, rules: [{ conditions: [l], type: b, rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j, headers: j }, type: d }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: c }] }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: j, headers: j }, type: d }] }] };
const ruleSet = _data;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js


const defaultEndpointResolver = (endpointParams, context = {}) => {
    return resolveEndpoint(ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js





const getRuntimeConfig = (config) => ({
    apiVersion: "2019-06-10",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    logger: config?.logger ?? new NoOpLogger(),
    serviceId: config?.serviceId ?? "SSO",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-defaults-mode-node/dist-es/constants.js
const AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
const AWS_REGION_ENV = "AWS_REGION";
const AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
const ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
const DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
const IMDS_REGION_PATH = "/latest/meta-data/placement/region";

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-defaults-mode-node/dist-es/defaultsModeConfig.js
const AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
const AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
const NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
    },
    configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
    },
    default: "legacy",
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js






const resolveDefaultsModeConfig = ({ region = loadConfig(NODE_REGION_CONFIG_OPTIONS), defaultsMode = loadConfig(NODE_DEFAULTS_MODE_CONFIG_OPTIONS), } = {}) => memoize(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
        case "auto":
            return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
            return Promise.resolve(mode?.toLocaleLowerCase());
        case undefined:
            return Promise.resolve("legacy");
        default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
});
const resolveNodeDefaultsModeAuto = async (clientRegion) => {
    if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
            return "standard";
        }
        if (resolvedRegion === inferredRegion) {
            return "in-region";
        }
        else {
            return "cross-region";
        }
    }
    return "standard";
};
const inferPhysicalRegion = async () => {
    if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
        return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
    }
    if (!process.env[ENV_IMDS_DISABLED]) {
        try {
            const endpoint = await getInstanceMetadataEndpoint();
            return (await httpRequest({ ...endpoint, path: IMDS_REGION_PATH })).toString();
        }
        catch (e) {
        }
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-defaults-mode-node/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.js













const runtimeConfig_getRuntimeConfig = (config) => {
    emitWarningIfUnsupportedVersion(process.version);
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getRuntimeConfig(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: client_sso_package_namespaceObject.i8 }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ??
            loadConfig({
                ...NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/SSOClient.js











class SSOClient extends Client {
    constructor(configuration) {
        const _config_0 = runtimeConfig_getRuntimeConfig(configuration);
        const _config_1 = endpoint_EndpointParameters_resolveClientEndpointParameters(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveUserAgentConfig(_config_5);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/models/SSOServiceException.js

class SSOServiceException extends ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOServiceException.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/models/models_0.js


class InvalidRequestException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
    }
}
class ResourceNotFoundException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
class TooManyRequestsException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
class UnauthorizedException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
const AccountInfoFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetRoleCredentialsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: constants_SENSITIVE_STRING }),
});
const RoleCredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.secretAccessKey && { secretAccessKey: constants_SENSITIVE_STRING }),
    ...(obj.sessionToken && { sessionToken: constants_SENSITIVE_STRING }),
});
const GetRoleCredentialsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }),
});
const ListAccountRolesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
const RoleInfoFilterSensitiveLog = (obj) => ({
    ...obj,
});
const ListAccountRolesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const ListAccountsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
const ListAccountsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const LogoutRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js




const serializeAws_restJson1GetRoleCredentialsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = Aws_restJson1_map({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken,
    });
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/federation/credentials";
    const query = Aws_restJson1_map({
        role_name: [, expectNonNull(input.roleName, `roleName`)],
        account_id: [, expectNonNull(input.accountId, `accountId`)],
    });
    let body;
    return new httpRequest_HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
const serializeAws_restJson1ListAccountRolesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = Aws_restJson1_map({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken,
    });
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assignment/roles";
    const query = Aws_restJson1_map({
        next_token: [, input.nextToken],
        max_result: [() => input.maxResults !== void 0, () => input.maxResults.toString()],
        account_id: [, __expectNonNull(input.accountId, `accountId`)],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
const serializeAws_restJson1ListAccountsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = Aws_restJson1_map({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken,
    });
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assignment/accounts";
    const query = Aws_restJson1_map({
        next_token: [, input.nextToken],
        max_result: [() => input.maxResults !== void 0, () => input.maxResults.toString()],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
const serializeAws_restJson1LogoutCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = Aws_restJson1_map({}, isSerializableHeaderValue, {
        "x-amz-sso_bearer_token": input.accessToken,
    });
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/logout";
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
const deserializeAws_restJson1GetRoleCredentialsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRoleCredentialsCommandError(output, context);
    }
    const contents = Aws_restJson1_map({
        $metadata: Aws_restJson1_deserializeMetadata(output),
    });
    const data = expectNonNull(expectObject(await Aws_restJson1_parseBody(output.body, context)), "body");
    if (data.roleCredentials != null) {
        contents.roleCredentials = deserializeAws_restJson1RoleCredentials(data.roleCredentials, context);
    }
    return contents;
};
const deserializeAws_restJson1GetRoleCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_restJson1_parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: SSOServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1ListAccountRolesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAccountRolesCommandError(output, context);
    }
    const contents = Aws_restJson1_map({
        $metadata: Aws_restJson1_deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await Aws_restJson1_parseBody(output.body, context)), "body");
    if (data.nextToken != null) {
        contents.nextToken = __expectString(data.nextToken);
    }
    if (data.roleList != null) {
        contents.roleList = deserializeAws_restJson1RoleListType(data.roleList, context);
    }
    return contents;
};
const deserializeAws_restJson1ListAccountRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_restJson1_parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1ListAccountsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAccountsCommandError(output, context);
    }
    const contents = Aws_restJson1_map({
        $metadata: Aws_restJson1_deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await Aws_restJson1_parseBody(output.body, context)), "body");
    if (data.accountList != null) {
        contents.accountList = deserializeAws_restJson1AccountListType(data.accountList, context);
    }
    if (data.nextToken != null) {
        contents.nextToken = __expectString(data.nextToken);
    }
    return contents;
};
const deserializeAws_restJson1ListAccountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_restJson1_parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1LogoutCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1LogoutCommandError(output, context);
    }
    const contents = Aws_restJson1_map({
        $metadata: Aws_restJson1_deserializeMetadata(output),
    });
    await Aws_restJson1_collectBody(output.body, context);
    return contents;
};
const deserializeAws_restJson1LogoutCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_restJson1_parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
const Aws_restJson1_map = map;
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = expectString(data.message);
    }
    const exception = new InvalidRequestException({
        $metadata: Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = expectString(data.message);
    }
    const exception = new ResourceNotFoundException({
        $metadata: Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = expectString(data.message);
    }
    const exception = new TooManyRequestsException({
        $metadata: Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.message != null) {
        contents.message = expectString(data.message);
    }
    const exception = new UnauthorizedException({
        $metadata: Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1AccountInfo = (output, context) => {
    return {
        accountId: __expectString(output.accountId),
        accountName: __expectString(output.accountName),
        emailAddress: __expectString(output.emailAddress),
    };
};
const deserializeAws_restJson1AccountListType = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AccountInfo(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1RoleCredentials = (output, context) => {
    return {
        accessKeyId: expectString(output.accessKeyId),
        expiration: expectLong(output.expiration),
        secretAccessKey: expectString(output.secretAccessKey),
        sessionToken: expectString(output.sessionToken),
    };
};
const deserializeAws_restJson1RoleInfo = (output, context) => {
    return {
        accountId: __expectString(output.accountId),
        roleName: __expectString(output.roleName),
    };
};
const deserializeAws_restJson1RoleListType = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RoleInfo(entry, context);
    });
    return retVal;
};
const Aws_restJson1_deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const Aws_restJson1_collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const Aws_restJson1_collectBodyString = (streamBody, context) => Aws_restJson1_collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const Aws_restJson1_parseBody = (streamBody, context) => Aws_restJson1_collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const Aws_restJson1_parseErrorBody = async (errorBody, context) => {
    const value = await Aws_restJson1_parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js





class GetRoleCredentialsCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, GetRoleCredentialsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "GetRoleCredentialsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: GetRoleCredentialsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: GetRoleCredentialsResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_restJson1GetRoleCredentialsCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_restJson1GetRoleCredentialsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/constants.js
const EXPIRE_WINDOW_MS = 5 * 60 * 1000;
const REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/models/SSOOIDCServiceException.js

class SSOOIDCServiceException extends ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOOIDCServiceException.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/models/models_0.js

class AccessDeniedException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class AuthorizationPendingException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AuthorizationPendingException",
            $fault: "client",
            ...opts,
        });
        this.name = "AuthorizationPendingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class models_0_ExpiredTokenException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, models_0_ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InternalServerException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidClientException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidGrantException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidGrantException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidGrantException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class models_0_InvalidRequestException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, models_0_InvalidRequestException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidScopeException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidScopeException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidScopeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class SlowDownException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "SlowDownException",
            $fault: "client",
            ...opts,
        });
        this.name = "SlowDownException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class UnauthorizedClientException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class UnsupportedGrantTypeException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedGrantTypeException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedGrantTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class models_0_InvalidClientMetadataException extends (/* unused pure expression or super */ null && (__BaseException)) {
    constructor(opts) {
        super({
            name: "InvalidClientMetadataException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientMetadataException";
        this.$fault = "client";
        Object.setPrototypeOf(this, models_0_InvalidClientMetadataException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
const CreateTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const CreateTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const RegisterClientRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const RegisterClientResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const StartDeviceAuthorizationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const StartDeviceAuthorizationResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/protocols/Aws_restJson1.js




const serializeAws_restJson1CreateTokenCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/token";
    let body;
    body = JSON.stringify({
        ...(input.clientId != null && { clientId: input.clientId }),
        ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
        ...(input.code != null && { code: input.code }),
        ...(input.deviceCode != null && { deviceCode: input.deviceCode }),
        ...(input.grantType != null && { grantType: input.grantType }),
        ...(input.redirectUri != null && { redirectUri: input.redirectUri }),
        ...(input.refreshToken != null && { refreshToken: input.refreshToken }),
        ...(input.scope != null && { scope: serializeAws_restJson1Scopes(input.scope, context) }),
    });
    return new httpRequest_HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
const serializeAws_restJson1RegisterClientCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/client/register";
    let body;
    body = JSON.stringify({
        ...(input.clientName != null && { clientName: input.clientName }),
        ...(input.clientType != null && { clientType: input.clientType }),
        ...(input.scopes != null && { scopes: serializeAws_restJson1Scopes(input.scopes, context) }),
    });
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
const serializeAws_restJson1StartDeviceAuthorizationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/device_authorization";
    let body;
    body = JSON.stringify({
        ...(input.clientId != null && { clientId: input.clientId }),
        ...(input.clientSecret != null && { clientSecret: input.clientSecret }),
        ...(input.startUrl != null && { startUrl: input.startUrl }),
    });
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
const deserializeAws_restJson1CreateTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateTokenCommandError(output, context);
    }
    const contents = protocols_Aws_restJson1_map({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(output),
    });
    const data = expectNonNull(expectObject(await protocols_Aws_restJson1_parseBody(output.body, context)), "body");
    if (data.accessToken != null) {
        contents.accessToken = expectString(data.accessToken);
    }
    if (data.expiresIn != null) {
        contents.expiresIn = expectInt32(data.expiresIn);
    }
    if (data.idToken != null) {
        contents.idToken = expectString(data.idToken);
    }
    if (data.refreshToken != null) {
        contents.refreshToken = expectString(data.refreshToken);
    }
    if (data.tokenType != null) {
        contents.tokenType = expectString(data.tokenType);
    }
    return contents;
};
const deserializeAws_restJson1CreateTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await protocols_Aws_restJson1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_restJson1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
            throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
            throw await deserializeAws_restJson1AuthorizationPendingExceptionResponse(parsedOutput, context);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
            throw await deserializeAws_restJson1ExpiredTokenExceptionResponse(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
            throw await deserializeAws_restJson1InvalidClientExceptionResponse(parsedOutput, context);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
            throw await deserializeAws_restJson1InvalidGrantExceptionResponse(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await Aws_restJson1_deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
            throw await deserializeAws_restJson1InvalidScopeExceptionResponse(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
            throw await deserializeAws_restJson1SlowDownExceptionResponse(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
            throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
            throw await deserializeAws_restJson1UnsupportedGrantTypeExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: SSOOIDCServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1RegisterClientCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RegisterClientCommandError(output, context);
    }
    const contents = protocols_Aws_restJson1_map({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await protocols_Aws_restJson1_parseBody(output.body, context)), "body");
    if (data.authorizationEndpoint != null) {
        contents.authorizationEndpoint = __expectString(data.authorizationEndpoint);
    }
    if (data.clientId != null) {
        contents.clientId = __expectString(data.clientId);
    }
    if (data.clientIdIssuedAt != null) {
        contents.clientIdIssuedAt = __expectLong(data.clientIdIssuedAt);
    }
    if (data.clientSecret != null) {
        contents.clientSecret = __expectString(data.clientSecret);
    }
    if (data.clientSecretExpiresAt != null) {
        contents.clientSecretExpiresAt = __expectLong(data.clientSecretExpiresAt);
    }
    if (data.tokenEndpoint != null) {
        contents.tokenEndpoint = __expectString(data.tokenEndpoint);
    }
    return contents;
};
const deserializeAws_restJson1RegisterClientCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await protocols_Aws_restJson1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_restJson1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "InvalidClientMetadataException":
        case "com.amazonaws.ssooidc#InvalidClientMetadataException":
            throw await deserializeAws_restJson1InvalidClientMetadataExceptionResponse(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await Aws_restJson1_deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
            throw await deserializeAws_restJson1InvalidScopeExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
const deserializeAws_restJson1StartDeviceAuthorizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartDeviceAuthorizationCommandError(output, context);
    }
    const contents = protocols_Aws_restJson1_map({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await protocols_Aws_restJson1_parseBody(output.body, context)), "body");
    if (data.deviceCode != null) {
        contents.deviceCode = __expectString(data.deviceCode);
    }
    if (data.expiresIn != null) {
        contents.expiresIn = __expectInt32(data.expiresIn);
    }
    if (data.interval != null) {
        contents.interval = __expectInt32(data.interval);
    }
    if (data.userCode != null) {
        contents.userCode = __expectString(data.userCode);
    }
    if (data.verificationUri != null) {
        contents.verificationUri = __expectString(data.verificationUri);
    }
    if (data.verificationUriComplete != null) {
        contents.verificationUriComplete = __expectString(data.verificationUriComplete);
    }
    return contents;
};
const deserializeAws_restJson1StartDeviceAuthorizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await protocols_Aws_restJson1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_restJson1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
            throw await deserializeAws_restJson1InvalidClientExceptionResponse(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await Aws_restJson1_deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
            throw await deserializeAws_restJson1SlowDownExceptionResponse(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
            throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: __BaseException,
                errorCode,
            });
    }
};
const protocols_Aws_restJson1_map = map;
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = protocols_Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = expectString(data.error_description);
    }
    const exception = new AccessDeniedException({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1AuthorizationPendingExceptionResponse = async (parsedOutput, context) => {
    const contents = protocols_Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = expectString(data.error_description);
    }
    const exception = new AuthorizationPendingException({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1ExpiredTokenExceptionResponse = async (parsedOutput, context) => {
    const contents = protocols_Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = expectString(data.error_description);
    }
    const exception = new models_0_ExpiredTokenException({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = protocols_Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = expectString(data.error_description);
    }
    const exception = new InternalServerException({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidClientExceptionResponse = async (parsedOutput, context) => {
    const contents = protocols_Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = expectString(data.error_description);
    }
    const exception = new InvalidClientException({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidClientMetadataExceptionResponse = async (parsedOutput, context) => {
    const contents = protocols_Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = __expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = __expectString(data.error_description);
    }
    const exception = new InvalidClientMetadataException({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidGrantExceptionResponse = async (parsedOutput, context) => {
    const contents = protocols_Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = expectString(data.error_description);
    }
    const exception = new InvalidGrantException({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const Aws_restJson1_deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = protocols_Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = expectString(data.error_description);
    }
    const exception = new models_0_InvalidRequestException({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1InvalidScopeExceptionResponse = async (parsedOutput, context) => {
    const contents = protocols_Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = expectString(data.error_description);
    }
    const exception = new InvalidScopeException({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1SlowDownExceptionResponse = async (parsedOutput, context) => {
    const contents = protocols_Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = expectString(data.error_description);
    }
    const exception = new SlowDownException({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1UnauthorizedClientExceptionResponse = async (parsedOutput, context) => {
    const contents = protocols_Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = expectString(data.error_description);
    }
    const exception = new UnauthorizedClientException({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeAws_restJson1UnsupportedGrantTypeExceptionResponse = async (parsedOutput, context) => {
    const contents = protocols_Aws_restJson1_map({});
    const data = parsedOutput.body;
    if (data.error != null) {
        contents.error = expectString(data.error);
    }
    if (data.error_description != null) {
        contents.error_description = expectString(data.error_description);
    }
    const exception = new UnsupportedGrantTypeException({
        $metadata: protocols_Aws_restJson1_deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const serializeAws_restJson1Scopes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const protocols_Aws_restJson1_deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const protocols_Aws_restJson1_collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const protocols_Aws_restJson1_collectBodyString = (streamBody, context) => protocols_Aws_restJson1_collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const Aws_restJson1_isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const protocols_Aws_restJson1_parseBody = (streamBody, context) => protocols_Aws_restJson1_collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const protocols_Aws_restJson1_parseErrorBody = async (errorBody, context) => {
    const value = await protocols_Aws_restJson1_parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const Aws_restJson1_loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenCommand.js





class CreateTokenCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, CreateTokenCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOOIDCClient";
        const commandName = "CreateTokenCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: CreateTokenRequestFilterSensitiveLog,
            outputFilterSensitiveLog: CreateTokenResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_restJson1CreateTokenCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_restJson1CreateTokenCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/EndpointParameters.js
const dist_es_endpoint_EndpointParameters_resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssooidc",
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/package.json
const client_sso_oidc_package_namespaceObject = {"i8":"3.272.0"};
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/ruleset.js
const ruleset_p = "required", ruleset_q = "fn", ruleset_r = "argv", ruleset_s = "ref";
const ruleset_a = "PartitionResult", ruleset_b = "tree", ruleset_c = "error", ruleset_d = "endpoint", ruleset_e = { [ruleset_p]: false, "type": "String" }, ruleset_f = { [ruleset_p]: true, "default": false, "type": "Boolean" }, ruleset_g = { [ruleset_s]: "Endpoint" }, ruleset_h = { [ruleset_q]: "booleanEquals", [ruleset_r]: [{ [ruleset_s]: "UseFIPS" }, true] }, ruleset_i = { [ruleset_q]: "booleanEquals", [ruleset_r]: [{ [ruleset_s]: "UseDualStack" }, true] }, ruleset_j = {}, ruleset_k = { [ruleset_q]: "booleanEquals", [ruleset_r]: [true, { [ruleset_q]: "getAttr", [ruleset_r]: [{ [ruleset_s]: ruleset_a }, "supportsFIPS"] }] }, ruleset_l = { [ruleset_q]: "booleanEquals", [ruleset_r]: [true, { [ruleset_q]: "getAttr", [ruleset_r]: [{ [ruleset_s]: ruleset_a }, "supportsDualStack"] }] }, ruleset_m = [ruleset_g], ruleset_n = [ruleset_h], ruleset_o = [ruleset_i];
const ruleset_data = { version: "1.0", parameters: { Region: ruleset_e, UseDualStack: ruleset_f, UseFIPS: ruleset_f, Endpoint: ruleset_e }, rules: [{ conditions: [{ [ruleset_q]: "aws.partition", [ruleset_r]: [{ [ruleset_s]: "Region" }], assign: ruleset_a }], type: ruleset_b, rules: [{ conditions: [{ [ruleset_q]: "isSet", [ruleset_r]: ruleset_m }, { [ruleset_q]: "parseURL", [ruleset_r]: ruleset_m, assign: "url" }], type: ruleset_b, rules: [{ conditions: ruleset_n, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: ruleset_c }, { type: ruleset_b, rules: [{ conditions: ruleset_o, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: ruleset_c }, { endpoint: { url: ruleset_g, properties: ruleset_j, headers: ruleset_j }, type: ruleset_d }] }] }, { conditions: [ruleset_h, ruleset_i], type: ruleset_b, rules: [{ conditions: [ruleset_k, ruleset_l], type: ruleset_b, rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: ruleset_j, headers: ruleset_j }, type: ruleset_d }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: ruleset_c }] }, { conditions: ruleset_n, type: ruleset_b, rules: [{ conditions: [ruleset_k], type: ruleset_b, rules: [{ type: ruleset_b, rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: ruleset_j, headers: ruleset_j }, type: ruleset_d }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: ruleset_c }] }, { conditions: ruleset_o, type: ruleset_b, rules: [{ conditions: [ruleset_l], type: ruleset_b, rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: ruleset_j, headers: ruleset_j }, type: ruleset_d }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: ruleset_c }] }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: ruleset_j, headers: ruleset_j }, type: ruleset_d }] }] };
const ruleset_ruleSet = ruleset_data;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/endpointResolver.js


const endpointResolver_defaultEndpointResolver = (endpointParams, context = {}) => {
    return resolveEndpoint(ruleset_ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.shared.js





const runtimeConfig_shared_getRuntimeConfig = (config) => ({
    apiVersion: "2019-06-10",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? endpointResolver_defaultEndpointResolver,
    logger: config?.logger ?? new NoOpLogger(),
    serviceId: config?.serviceId ?? "SSO OIDC",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.js













const dist_es_runtimeConfig_getRuntimeConfig = (config) => {
    emitWarningIfUnsupportedVersion(process.version);
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = runtimeConfig_shared_getRuntimeConfig(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: client_sso_oidc_package_namespaceObject.i8 }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ??
            loadConfig({
                ...NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/SSOOIDCClient.js











class SSOOIDCClient extends Client {
    constructor(configuration) {
        const _config_0 = dist_es_runtimeConfig_getRuntimeConfig(configuration);
        const _config_1 = dist_es_endpoint_EndpointParameters_resolveClientEndpointParameters(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveUserAgentConfig(_config_5);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js

const ssoOidcClientsHash = {};
const getSsoOidcClient = (ssoRegion) => {
    if (ssoOidcClientsHash[ssoRegion]) {
        return ssoOidcClientsHash[ssoRegion];
    }
    const ssoOidcClient = new SSOOIDCClient({ region: ssoRegion });
    ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
    return ssoOidcClient;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js


const getNewSsoOidcToken = (ssoToken, ssoRegion) => {
    const ssoOidcClient = getSsoOidcClient(ssoRegion);
    return ssoOidcClient.send(new CreateTokenCommand({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token",
    }));
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js


const validateTokenExpiry = (token) => {
    if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js


const validateTokenKey = (key, value, forRefresh = false) => {
    if (typeof value === "undefined") {
        throw new TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js


const { writeFile } = external_fs_namespaceObject.promises;
const writeSSOTokenToFile = (id, ssoToken) => {
    const tokenFilepath = getSSOTokenFilepath(id);
    const tokenString = JSON.stringify(ssoToken, null, 2);
    return writeFile(tokenFilepath, tokenString);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/fromSso.js







const lastRefreshAttemptTime = new Date(0);
const fromSso = (init = {}) => async () => {
    const profiles = await parseKnownFiles(init);
    const profileName = getProfileName(init);
    const profile = profiles[profileName];
    if (!profile) {
        throw new TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
    }
    else if (!profile["sso_session"]) {
        throw new TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
    }
    const ssoSessionName = profile["sso_session"];
    const ssoSessions = await loadSsoSessionData(init);
    const ssoSession = ssoSessions[ssoSessionName];
    if (!ssoSession) {
        throw new TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
    }
    for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
            throw new TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
    }
    const ssoStartUrl = ssoSession["sso_start_url"];
    const ssoRegion = ssoSession["sso_region"];
    let ssoToken;
    try {
        ssoToken = await getSSOTokenFromFile(ssoSessionName);
    }
    catch (e) {
        throw new TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
    }
    validateTokenKey("accessToken", ssoToken.accessToken);
    validateTokenKey("expiresAt", ssoToken.expiresAt);
    const { accessToken, expiresAt } = ssoToken;
    const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
    if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
        return existingToken;
    }
    if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1000) {
        validateTokenExpiry(existingToken);
        return existingToken;
    }
    validateTokenKey("clientId", ssoToken.clientId, true);
    validateTokenKey("clientSecret", ssoToken.clientSecret, true);
    validateTokenKey("refreshToken", ssoToken.refreshToken, true);
    try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion);
        validateTokenKey("accessToken", newSsoOidcToken.accessToken);
        validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1000);
        try {
            await writeSSOTokenToFile(ssoSessionName, {
                ...ssoToken,
                accessToken: newSsoOidcToken.accessToken,
                expiresAt: newTokenExpiration.toISOString(),
                refreshToken: newSsoOidcToken.refreshToken,
            });
        }
        catch (error) {
        }
        return {
            token: newSsoOidcToken.accessToken,
            expiration: newTokenExpiration,
        };
    }
    catch (error) {
        validateTokenExpiry(existingToken);
        return existingToken;
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js




const resolveSSOCredentials_EXPIRE_WINDOW_MS = 15 * 60 * 1000;
const SHOULD_FAIL_CREDENTIAL_CHAIN = false;
const resolveSSOCredentials = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, profile, }) => {
    let token;
    const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
    if (ssoSession) {
        try {
            const _token = await fromSso({ profile })();
            token = {
                accessToken: _token.token,
                expiresAt: new Date(_token.expiration).toISOString(),
            };
        }
        catch (e) {
            throw new CredentialsProviderError(e.message, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
    }
    else {
        try {
            token = await getSSOTokenFromFile(ssoStartUrl);
        }
        catch (e) {
            throw new CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
    }
    if (new Date(token.expiresAt).getTime() - Date.now() <= resolveSSOCredentials_EXPIRE_WINDOW_MS) {
        throw new CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { accessToken } = token;
    const sso = ssoClient || new SSOClient({ region: ssoRegion });
    let ssoResp;
    try {
        ssoResp = await sso.send(new GetRoleCredentialsCommand({
            accountId: ssoAccountId,
            roleName: ssoRoleName,
            accessToken,
        }));
    }
    catch (e) {
        throw CredentialsProviderError.from(e, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration } = {} } = ssoResp;
    if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration) };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js

const validateSsoProfile = (profile) => {
    const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
    if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", ` +
            `"sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, false);
    }
    return profile;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js





const fromSSO = (init = {}) => async () => {
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, ssoSession } = init;
    const profileName = getProfileName(init);
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await parseKnownFiles(init);
        const profile = profiles[profileName];
        if (!profile) {
            throw new CredentialsProviderError(`Profile ${profileName} was not found.`);
        }
        if (!isSsoProfile(profile)) {
            throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
        }
        if (profile?.sso_session) {
            const ssoSessions = await loadSsoSessionData(init);
            const session = ssoSessions[profile.sso_session];
            const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
            if (ssoRegion && ssoRegion !== session.sso_region) {
                throw new CredentialsProviderError(`Conflicting SSO region` + conflictMsg, false);
            }
            if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
                throw new CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, false);
            }
            profile.sso_region = session.sso_region;
            profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile);
        return resolveSSOCredentials({
            ssoStartUrl: sso_start_url,
            ssoSession: sso_session,
            ssoAccountId: sso_account_id,
            ssoRegion: sso_region,
            ssoRoleName: sso_role_name,
            ssoClient: ssoClient,
            profile: profileName,
        });
    }
    else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new CredentialsProviderError("Incomplete configuration. The fromSSO() argument hash must include " +
            '"ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
    }
    else {
        return resolveSSOCredentials({
            ssoStartUrl,
            ssoSession,
            ssoAccountId,
            ssoRegion,
            ssoRoleName,
            ssoClient,
            profile: profileName,
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/index.js





;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js


const resolveSsoCredentials = (data) => {
    const { sso_start_url, sso_account_id, sso_session, sso_region, sso_role_name } = validateSsoProfile(data);
    return fromSSO({
        ssoStartUrl: sso_start_url,
        ssoAccountId: sso_account_id,
        ssoSession: sso_session,
        ssoRegion: sso_region,
        ssoRoleName: sso_role_name,
    })();
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js
const isStaticCredsProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.aws_access_key_id === "string" &&
    typeof arg.aws_secret_access_key === "string" &&
    ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
const resolveStaticCredentials = (profile) => Promise.resolve({
    accessKeyId: profile.aws_access_key_id,
    secretAccessKey: profile.aws_secret_access_key,
    sessionToken: profile.aws_session_token,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js

const fromWebToken = (init) => () => {
    const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds, roleAssumerWithWebIdentity, } = init;
    if (!roleAssumerWithWebIdentity) {
        throw new CredentialsProviderError(`Role Arn '${roleArn}' needs to be assumed with web identity,` +
            ` but no role assumption callback was provided.`, false);
    }
    return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds,
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js



const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
const fromTokenFile = (init = {}) => async () => {
    return resolveTokenFile(init);
};
const resolveTokenFile = (init) => {
    const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
    const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
    const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
    if (!webIdentityTokenFile || !roleArn) {
        throw new CredentialsProviderError("Web identity configuration not specified");
    }
    return fromWebToken({
        ...init,
        webIdentityToken: (0,external_fs_namespaceObject.readFileSync)(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName,
    })();
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js

const isWebIdentityProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.web_identity_token_file === "string" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
const resolveWebIdentityCredentials = async (profile, options) => fromTokenFile({
    webIdentityTokenFile: profile.web_identity_token_file,
    roleArn: profile.role_arn,
    roleSessionName: profile.role_session_name,
    roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
})();

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js






const resolveProfileData = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data);
    }
    if (isAssumeRoleProfile(data)) {
        return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
    }
    if (isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data);
    }
    if (isWebIdentityProfile(data)) {
        return resolveWebIdentityCredentials(data, options);
    }
    if (isProcessProfile(data)) {
        return resolveProcessCredentials_resolveProcessCredentials(options, profileName);
    }
    if (isSsoProfile(data)) {
        return resolveSsoCredentials(data);
    }
    throw new CredentialsProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js


const fromIni = (init = {}) => async () => {
    const profiles = await parseKnownFiles(init);
    return resolveProfileData(getProfileName(init), profiles, init);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-node/dist-es/remoteProvider.js


const remoteProvider_ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
const remoteProvider = (init) => {
    if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        return fromContainerMetadata(init);
    }
    if (process.env[remoteProvider_ENV_IMDS_DISABLED]) {
        return async () => {
            throw new CredentialsProviderError("EC2 Instance Metadata Service access disabled");
        };
    }
    return fromInstanceMetadata(init);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js








const defaultProvider = (init = {}) => memoize(chain(...(init.profile || process.env[ENV_PROFILE] ? [] : [fromEnv()]), fromSSO(init), fromIni(init), fromProcess(init), fromTokenFile(init), remoteProvider(init), async () => {
    throw new CredentialsProviderError("Could not load credentials from any providers", false);
}), (credentials) => credentials.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000, (credentials) => credentials.expiration !== undefined);

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-node/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/endpoint/ruleset.js
const G = "required", H = "type", I = "fn", J = "argv", K = "ref", L = "properties", M = "headers";
const endpoint_ruleset_a = false, endpoint_ruleset_b = true, endpoint_ruleset_c = "PartitionResult", endpoint_ruleset_d = "tree", endpoint_ruleset_e = "booleanEquals", endpoint_ruleset_f = "stringEquals", endpoint_ruleset_g = "sigv4", endpoint_ruleset_h = "us-east-1", endpoint_ruleset_i = "sts", endpoint_ruleset_j = "endpoint", endpoint_ruleset_k = "https://sts.{Region}.{PartitionResult#dnsSuffix}", endpoint_ruleset_l = "error", endpoint_ruleset_m = "getAttr", endpoint_ruleset_n = { [G]: false, [H]: "String" }, endpoint_ruleset_o = { [G]: true, "default": false, [H]: "Boolean" }, endpoint_ruleset_p = { [K]: "Region" }, endpoint_ruleset_q = { [K]: "UseFIPS" }, endpoint_ruleset_r = { [K]: "UseDualStack" }, endpoint_ruleset_s = { [I]: "isSet", [J]: [{ [K]: "Endpoint" }] }, t = { [K]: "Endpoint" }, u = { "url": "https://sts.amazonaws.com", [L]: { "authSchemes": [{ "name": endpoint_ruleset_g, "signingRegion": endpoint_ruleset_h, "signingName": endpoint_ruleset_i }] }, [M]: {} }, v = {}, w = { "conditions": [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "aws-global"] }], [endpoint_ruleset_j]: u, [H]: endpoint_ruleset_j }, x = { [I]: endpoint_ruleset_e, [J]: [endpoint_ruleset_q, true] }, y = { [I]: endpoint_ruleset_e, [J]: [endpoint_ruleset_r, true] }, z = { [I]: endpoint_ruleset_e, [J]: [true, { [I]: endpoint_ruleset_m, [J]: [{ [K]: endpoint_ruleset_c }, "supportsFIPS"] }] }, A = { [K]: endpoint_ruleset_c }, B = { [I]: endpoint_ruleset_e, [J]: [true, { [I]: endpoint_ruleset_m, [J]: [A, "supportsDualStack"] }] }, C = { "url": endpoint_ruleset_k, [L]: {}, [M]: {} }, D = [t], E = [x], F = [y];
const endpoint_ruleset_data = { version: "1.0", parameters: { Region: endpoint_ruleset_n, UseDualStack: endpoint_ruleset_o, UseFIPS: endpoint_ruleset_o, Endpoint: endpoint_ruleset_n, UseGlobalEndpoint: endpoint_ruleset_o }, rules: [{ conditions: [{ [I]: "aws.partition", [J]: [endpoint_ruleset_p], assign: endpoint_ruleset_c }], [H]: endpoint_ruleset_d, rules: [{ conditions: [{ [I]: endpoint_ruleset_e, [J]: [{ [K]: "UseGlobalEndpoint" }, endpoint_ruleset_b] }, { [I]: endpoint_ruleset_e, [J]: [endpoint_ruleset_q, endpoint_ruleset_a] }, { [I]: endpoint_ruleset_e, [J]: [endpoint_ruleset_r, endpoint_ruleset_a] }, { [I]: "not", [J]: [endpoint_ruleset_s] }], [H]: endpoint_ruleset_d, rules: [{ conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "ap-northeast-1"] }], endpoint: u, [H]: endpoint_ruleset_j }, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "ap-south-1"] }], endpoint: u, [H]: endpoint_ruleset_j }, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "ap-southeast-1"] }], endpoint: u, [H]: endpoint_ruleset_j }, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "ap-southeast-2"] }], endpoint: u, [H]: endpoint_ruleset_j }, w, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "ca-central-1"] }], endpoint: u, [H]: endpoint_ruleset_j }, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "eu-central-1"] }], endpoint: u, [H]: endpoint_ruleset_j }, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "eu-north-1"] }], endpoint: u, [H]: endpoint_ruleset_j }, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "eu-west-1"] }], endpoint: u, [H]: endpoint_ruleset_j }, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "eu-west-2"] }], endpoint: u, [H]: endpoint_ruleset_j }, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "eu-west-3"] }], endpoint: u, [H]: endpoint_ruleset_j }, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "sa-east-1"] }], endpoint: u, [H]: endpoint_ruleset_j }, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, endpoint_ruleset_h] }], endpoint: u, [H]: endpoint_ruleset_j }, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "us-east-2"] }], endpoint: u, [H]: endpoint_ruleset_j }, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "us-west-1"] }], endpoint: u, [H]: endpoint_ruleset_j }, { conditions: [{ [I]: endpoint_ruleset_f, [J]: [endpoint_ruleset_p, "us-west-2"] }], endpoint: u, [H]: endpoint_ruleset_j }, { endpoint: { url: endpoint_ruleset_k, [L]: { authSchemes: [{ name: endpoint_ruleset_g, signingRegion: "{Region}", signingName: endpoint_ruleset_i }] }, [M]: v }, [H]: endpoint_ruleset_j }] }, { conditions: [endpoint_ruleset_s, { [I]: "parseURL", [J]: D, assign: "url" }], [H]: endpoint_ruleset_d, rules: [{ conditions: E, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [H]: endpoint_ruleset_l }, { [H]: endpoint_ruleset_d, rules: [{ conditions: F, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [H]: endpoint_ruleset_l }, { endpoint: { url: t, [L]: v, [M]: v }, [H]: endpoint_ruleset_j }] }] }, { conditions: [x, y], [H]: endpoint_ruleset_d, rules: [{ conditions: [z, B], [H]: endpoint_ruleset_d, rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", [L]: v, [M]: v }, [H]: endpoint_ruleset_j }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [H]: endpoint_ruleset_l }] }, { conditions: E, [H]: endpoint_ruleset_d, rules: [{ conditions: [z], [H]: endpoint_ruleset_d, rules: [{ [H]: endpoint_ruleset_d, rules: [{ conditions: [{ [I]: endpoint_ruleset_f, [J]: ["aws-us-gov", { [I]: endpoint_ruleset_m, [J]: [A, "name"] }] }], endpoint: C, [H]: endpoint_ruleset_j }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", [L]: v, [M]: v }, [H]: endpoint_ruleset_j }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", [H]: endpoint_ruleset_l }] }, { conditions: F, [H]: endpoint_ruleset_d, rules: [{ conditions: [B], [H]: endpoint_ruleset_d, rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", [L]: v, [M]: v }, [H]: endpoint_ruleset_j }] }, { error: "DualStack is enabled but this partition does not support DualStack", [H]: endpoint_ruleset_l }] }, { [H]: endpoint_ruleset_d, rules: [w, { endpoint: C, [H]: endpoint_ruleset_j }] }] }] };
const endpoint_ruleset_ruleSet = endpoint_ruleset_data;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/endpoint/endpointResolver.js


const endpoint_endpointResolver_defaultEndpointResolver = (endpointParams, context = {}) => {
    return resolveEndpoint(endpoint_ruleset_ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.shared.js





const dist_es_runtimeConfig_shared_getRuntimeConfig = (config) => ({
    apiVersion: "2011-06-15",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? endpoint_endpointResolver_defaultEndpointResolver,
    logger: config?.logger ?? new NoOpLogger(),
    serviceId: config?.serviceId ?? "STS",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.js















const client_sts_dist_es_runtimeConfig_getRuntimeConfig = (config) => {
    emitWarningIfUnsupportedVersion(process.version);
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = dist_es_runtimeConfig_shared_getRuntimeConfig(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? decorateDefaultCredentialProvider(defaultProvider),
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: client_sts_package_namespaceObject.i8 }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ??
            loadConfig({
                ...NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/STSClient.js












class STSClient extends Client {
    constructor(configuration) {
        const _config_0 = client_sts_dist_es_runtimeConfig_getRuntimeConfig(configuration);
        const _config_1 = EndpointParameters_resolveClientEndpointParameters(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveStsAuthConfig(_config_5, { stsClientCtor: STSClient });
        const _config_7 = resolveUserAgentConfig(_config_6);
        super(_config_7);
        this.config = _config_7;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/defaultRoleAssumers.js


const getCustomizableStsClientCtor = (baseCtor, customizations) => {
    if (!customizations)
        return baseCtor;
    else
        return class CustomizableSTSClient extends baseCtor {
            constructor(config) {
                super(config);
                for (const customization of customizations) {
                    this.middlewareStack.use(customization);
                }
            }
        };
};
const defaultRoleAssumers_getDefaultRoleAssumer = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
const defaultRoleAssumers_getDefaultRoleAssumerWithWebIdentity = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
const defaultRoleAssumers_decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: defaultRoleAssumers_getDefaultRoleAssumer(input),
    roleAssumerWithWebIdentity: defaultRoleAssumers_getDefaultRoleAssumerWithWebIdentity(input),
    ...input,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/endpoint/ruleset.js
const dist_es_endpoint_ruleset_s = "fn", ruleset_t = "argv", ruleset_u = "ref";
const dist_es_endpoint_ruleset_a = true, dist_es_endpoint_ruleset_b = false, dist_es_endpoint_ruleset_c = "String", dist_es_endpoint_ruleset_d = "PartitionResult", dist_es_endpoint_ruleset_e = "tree", dist_es_endpoint_ruleset_f = "error", dist_es_endpoint_ruleset_g = "endpoint", dist_es_endpoint_ruleset_h = "stringEquals", dist_es_endpoint_ruleset_i = { "required": true, "default": false, "type": "Boolean" }, dist_es_endpoint_ruleset_j = { [ruleset_u]: "Region" }, dist_es_endpoint_ruleset_k = { [ruleset_u]: "Endpoint" }, dist_es_endpoint_ruleset_l = { [dist_es_endpoint_ruleset_s]: "booleanEquals", [ruleset_t]: [{ [ruleset_u]: "UseFIPS" }, true] }, dist_es_endpoint_ruleset_m = { [dist_es_endpoint_ruleset_s]: "booleanEquals", [ruleset_t]: [{ [ruleset_u]: "UseDualStack" }, true] }, dist_es_endpoint_ruleset_n = {}, dist_es_endpoint_ruleset_o = { [dist_es_endpoint_ruleset_s]: "booleanEquals", [ruleset_t]: [true, { [dist_es_endpoint_ruleset_s]: "getAttr", [ruleset_t]: [{ [ruleset_u]: dist_es_endpoint_ruleset_d }, "supportsFIPS"] }] }, dist_es_endpoint_ruleset_p = { [dist_es_endpoint_ruleset_s]: "booleanEquals", [ruleset_t]: [true, { [dist_es_endpoint_ruleset_s]: "getAttr", [ruleset_t]: [{ [ruleset_u]: dist_es_endpoint_ruleset_d }, "supportsDualStack"] }] }, dist_es_endpoint_ruleset_q = [dist_es_endpoint_ruleset_l], dist_es_endpoint_ruleset_r = [dist_es_endpoint_ruleset_m];
const dist_es_endpoint_ruleset_data = { version: "1.0", parameters: { Region: { required: dist_es_endpoint_ruleset_a, type: dist_es_endpoint_ruleset_c }, UseDualStack: dist_es_endpoint_ruleset_i, UseFIPS: dist_es_endpoint_ruleset_i, Endpoint: { required: dist_es_endpoint_ruleset_b, type: dist_es_endpoint_ruleset_c } }, rules: [{ conditions: [{ [dist_es_endpoint_ruleset_s]: "aws.partition", [ruleset_t]: [dist_es_endpoint_ruleset_j], assign: dist_es_endpoint_ruleset_d }], type: dist_es_endpoint_ruleset_e, rules: [{ conditions: [{ [dist_es_endpoint_ruleset_s]: "isSet", [ruleset_t]: [dist_es_endpoint_ruleset_k] }], type: dist_es_endpoint_ruleset_e, rules: [{ conditions: dist_es_endpoint_ruleset_q, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: dist_es_endpoint_ruleset_f }, { type: dist_es_endpoint_ruleset_e, rules: [{ conditions: dist_es_endpoint_ruleset_r, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: dist_es_endpoint_ruleset_f }, { endpoint: { url: dist_es_endpoint_ruleset_k, properties: dist_es_endpoint_ruleset_n, headers: dist_es_endpoint_ruleset_n }, type: dist_es_endpoint_ruleset_g }] }] }, { conditions: [dist_es_endpoint_ruleset_l, dist_es_endpoint_ruleset_m], type: dist_es_endpoint_ruleset_e, rules: [{ conditions: [dist_es_endpoint_ruleset_o, dist_es_endpoint_ruleset_p], type: dist_es_endpoint_ruleset_e, rules: [{ endpoint: { url: "https://logs-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: dist_es_endpoint_ruleset_n, headers: dist_es_endpoint_ruleset_n }, type: dist_es_endpoint_ruleset_g }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: dist_es_endpoint_ruleset_f }] }, { conditions: dist_es_endpoint_ruleset_q, type: dist_es_endpoint_ruleset_e, rules: [{ conditions: [dist_es_endpoint_ruleset_o], type: dist_es_endpoint_ruleset_e, rules: [{ type: dist_es_endpoint_ruleset_e, rules: [{ conditions: [{ [dist_es_endpoint_ruleset_s]: dist_es_endpoint_ruleset_h, [ruleset_t]: [dist_es_endpoint_ruleset_j, "us-gov-east-1"] }], endpoint: { url: "https://logs.us-gov-east-1.amazonaws.com", properties: dist_es_endpoint_ruleset_n, headers: dist_es_endpoint_ruleset_n }, type: dist_es_endpoint_ruleset_g }, { conditions: [{ [dist_es_endpoint_ruleset_s]: dist_es_endpoint_ruleset_h, [ruleset_t]: [dist_es_endpoint_ruleset_j, "us-gov-west-1"] }], endpoint: { url: "https://logs.us-gov-west-1.amazonaws.com", properties: dist_es_endpoint_ruleset_n, headers: dist_es_endpoint_ruleset_n }, type: dist_es_endpoint_ruleset_g }, { endpoint: { url: "https://logs-fips.{Region}.{PartitionResult#dnsSuffix}", properties: dist_es_endpoint_ruleset_n, headers: dist_es_endpoint_ruleset_n }, type: dist_es_endpoint_ruleset_g }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: dist_es_endpoint_ruleset_f }] }, { conditions: dist_es_endpoint_ruleset_r, type: dist_es_endpoint_ruleset_e, rules: [{ conditions: [dist_es_endpoint_ruleset_p], type: dist_es_endpoint_ruleset_e, rules: [{ endpoint: { url: "https://logs.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: dist_es_endpoint_ruleset_n, headers: dist_es_endpoint_ruleset_n }, type: dist_es_endpoint_ruleset_g }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: dist_es_endpoint_ruleset_f }] }, { endpoint: { url: "https://logs.{Region}.{PartitionResult#dnsSuffix}", properties: dist_es_endpoint_ruleset_n, headers: dist_es_endpoint_ruleset_n }, type: dist_es_endpoint_ruleset_g }] }] };
const dist_es_endpoint_ruleset_ruleSet = dist_es_endpoint_ruleset_data;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/endpoint/endpointResolver.js


const dist_es_endpoint_endpointResolver_defaultEndpointResolver = (endpointParams, context = {}) => {
    return resolveEndpoint(dist_es_endpoint_ruleset_ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/runtimeConfig.shared.js





const client_cloudwatch_logs_dist_es_runtimeConfig_shared_getRuntimeConfig = (config) => ({
    apiVersion: "2014-03-28",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? dist_es_endpoint_endpointResolver_defaultEndpointResolver,
    logger: config?.logger ?? new NoOpLogger(),
    serviceId: config?.serviceId ?? "CloudWatch Logs",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/runtimeConfig.js















const client_cloudwatch_logs_dist_es_runtimeConfig_getRuntimeConfig = (config) => {
    emitWarningIfUnsupportedVersion(process.version);
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = client_cloudwatch_logs_dist_es_runtimeConfig_shared_getRuntimeConfig(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? defaultRoleAssumers_decorateDefaultCredentialProvider(defaultProvider),
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_namespaceObject.i8 }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ??
            loadConfig({
                ...NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/CloudWatchLogsClient.js












class CloudWatchLogsClient extends Client {
    constructor(configuration) {
        const _config_0 = client_cloudwatch_logs_dist_es_runtimeConfig_getRuntimeConfig(configuration);
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveAwsAuthConfig(_config_5);
        const _config_7 = resolveUserAgentConfig(_config_6);
        super(_config_7);
        this.config = _config_7;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getAwsAuthPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/models/CloudWatchLogsServiceException.js

class CloudWatchLogsServiceException extends ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, CloudWatchLogsServiceException.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/models/models_0.js

class InvalidParameterException extends CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "InvalidParameterException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidParameterException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidParameterException.prototype);
    }
}
class OperationAbortedException extends CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "OperationAbortedException",
            $fault: "client",
            ...opts,
        });
        this.name = "OperationAbortedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, OperationAbortedException.prototype);
    }
}
class models_0_ResourceNotFoundException extends CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, models_0_ResourceNotFoundException.prototype);
    }
}
class ServiceUnavailableException extends CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "ServiceUnavailableException",
            $fault: "server",
            ...opts,
        });
        this.name = "ServiceUnavailableException";
        this.$fault = "server";
        Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    }
}
class InvalidOperationException extends CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "InvalidOperationException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidOperationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidOperationException.prototype);
    }
}
class LimitExceededException extends CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
class ResourceAlreadyExistsException extends CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "ResourceAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceAlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    }
}
class DataAlreadyAcceptedException extends CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "DataAlreadyAcceptedException",
            $fault: "client",
            ...opts,
        });
        this.name = "DataAlreadyAcceptedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, DataAlreadyAcceptedException.prototype);
        this.expectedSequenceToken = opts.expectedSequenceToken;
    }
}
var DataProtectionStatus;
(function (DataProtectionStatus) {
    DataProtectionStatus["ACTIVATED"] = "ACTIVATED";
    DataProtectionStatus["ARCHIVED"] = "ARCHIVED";
    DataProtectionStatus["DELETED"] = "DELETED";
    DataProtectionStatus["DISABLED"] = "DISABLED";
})(DataProtectionStatus || (DataProtectionStatus = {}));
var ExportTaskStatusCode;
(function (ExportTaskStatusCode) {
    ExportTaskStatusCode["CANCELLED"] = "CANCELLED";
    ExportTaskStatusCode["COMPLETED"] = "COMPLETED";
    ExportTaskStatusCode["FAILED"] = "FAILED";
    ExportTaskStatusCode["PENDING"] = "PENDING";
    ExportTaskStatusCode["PENDING_CANCEL"] = "PENDING_CANCEL";
    ExportTaskStatusCode["RUNNING"] = "RUNNING";
})(ExportTaskStatusCode || (ExportTaskStatusCode = {}));
var OrderBy;
(function (OrderBy) {
    OrderBy["LastEventTime"] = "LastEventTime";
    OrderBy["LogStreamName"] = "LogStreamName";
})(OrderBy || (OrderBy = {}));
var StandardUnit;
(function (StandardUnit) {
    StandardUnit["Bits"] = "Bits";
    StandardUnit["BitsSecond"] = "Bits/Second";
    StandardUnit["Bytes"] = "Bytes";
    StandardUnit["BytesSecond"] = "Bytes/Second";
    StandardUnit["Count"] = "Count";
    StandardUnit["CountSecond"] = "Count/Second";
    StandardUnit["Gigabits"] = "Gigabits";
    StandardUnit["GigabitsSecond"] = "Gigabits/Second";
    StandardUnit["Gigabytes"] = "Gigabytes";
    StandardUnit["GigabytesSecond"] = "Gigabytes/Second";
    StandardUnit["Kilobits"] = "Kilobits";
    StandardUnit["KilobitsSecond"] = "Kilobits/Second";
    StandardUnit["Kilobytes"] = "Kilobytes";
    StandardUnit["KilobytesSecond"] = "Kilobytes/Second";
    StandardUnit["Megabits"] = "Megabits";
    StandardUnit["MegabitsSecond"] = "Megabits/Second";
    StandardUnit["Megabytes"] = "Megabytes";
    StandardUnit["MegabytesSecond"] = "Megabytes/Second";
    StandardUnit["Microseconds"] = "Microseconds";
    StandardUnit["Milliseconds"] = "Milliseconds";
    StandardUnit["None"] = "None";
    StandardUnit["Percent"] = "Percent";
    StandardUnit["Seconds"] = "Seconds";
    StandardUnit["Terabits"] = "Terabits";
    StandardUnit["TerabitsSecond"] = "Terabits/Second";
    StandardUnit["Terabytes"] = "Terabytes";
    StandardUnit["TerabytesSecond"] = "Terabytes/Second";
})(StandardUnit || (StandardUnit = {}));
var QueryStatus;
(function (QueryStatus) {
    QueryStatus["Cancelled"] = "Cancelled";
    QueryStatus["Complete"] = "Complete";
    QueryStatus["Failed"] = "Failed";
    QueryStatus["Running"] = "Running";
    QueryStatus["Scheduled"] = "Scheduled";
    QueryStatus["Timeout"] = "Timeout";
    QueryStatus["Unknown"] = "Unknown";
})(QueryStatus || (QueryStatus = {}));
var Distribution;
(function (Distribution) {
    Distribution["ByLogStream"] = "ByLogStream";
    Distribution["Random"] = "Random";
})(Distribution || (Distribution = {}));
class InvalidSequenceTokenException extends CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "InvalidSequenceTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidSequenceTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidSequenceTokenException.prototype);
        this.expectedSequenceToken = opts.expectedSequenceToken;
    }
}
class UnrecognizedClientException extends CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "UnrecognizedClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnrecognizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnrecognizedClientException.prototype);
    }
}
class MalformedQueryException extends CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "MalformedQueryException",
            $fault: "client",
            ...opts,
        });
        this.name = "MalformedQueryException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MalformedQueryException.prototype);
        this.queryCompileError = opts.queryCompileError;
    }
}
class TooManyTagsException extends CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "TooManyTagsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyTagsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyTagsException.prototype);
        this.resourceName = opts.resourceName;
    }
}
const AssociateKmsKeyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const CancelExportTaskRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const CreateExportTaskRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const CreateExportTaskResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const CreateLogGroupRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const CreateLogStreamRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DeleteDataProtectionPolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DeleteDestinationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DeleteLogGroupRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DeleteLogStreamRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DeleteMetricFilterRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DeleteQueryDefinitionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DeleteQueryDefinitionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DeleteResourcePolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DeleteRetentionPolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DeleteSubscriptionFilterRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeDestinationsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DestinationFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeDestinationsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeExportTasksRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const ExportTaskExecutionInfoFilterSensitiveLog = (obj) => ({
    ...obj,
});
const ExportTaskStatusFilterSensitiveLog = (obj) => ({
    ...obj,
});
const ExportTaskFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeExportTasksResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeLogGroupsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const LogGroupFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeLogGroupsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeLogStreamsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const LogStreamFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeLogStreamsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeMetricFiltersRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const MetricTransformationFilterSensitiveLog = (obj) => ({
    ...obj,
});
const MetricFilterFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeMetricFiltersResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeQueriesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const QueryInfoFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeQueriesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeQueryDefinitionsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const QueryDefinitionFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeQueryDefinitionsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeResourcePoliciesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const ResourcePolicyFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeResourcePoliciesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeSubscriptionFiltersRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const SubscriptionFilterFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DescribeSubscriptionFiltersResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const DisassociateKmsKeyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const FilteredLogEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
const FilterLogEventsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const SearchedLogStreamFilterSensitiveLog = (obj) => ({
    ...obj,
});
const FilterLogEventsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetDataProtectionPolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetDataProtectionPolicyResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetLogEventsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const OutputLogEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetLogEventsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetLogGroupFieldsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const LogGroupFieldFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetLogGroupFieldsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetLogRecordRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetLogRecordResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetQueryResultsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const ResultFieldFilterSensitiveLog = (obj) => ({
    ...obj,
});
const QueryStatisticsFilterSensitiveLog = (obj) => ({
    ...obj,
});
const GetQueryResultsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const InputLogEventFilterSensitiveLog = (obj) => ({
    ...obj,
});
const ListTagsForResourceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const ListTagsForResourceResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const ListTagsLogGroupRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const ListTagsLogGroupResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutDataProtectionPolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutDataProtectionPolicyResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutDestinationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutDestinationResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutDestinationPolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutLogEventsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const RejectedLogEventsInfoFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutLogEventsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutMetricFilterRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutQueryDefinitionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutQueryDefinitionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutResourcePolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutResourcePolicyResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutRetentionPolicyRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const PutSubscriptionFilterRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const QueryCompileErrorLocationFilterSensitiveLog = (obj) => ({
    ...obj,
});
const QueryCompileErrorFilterSensitiveLog = (obj) => ({
    ...obj,
});
const StartQueryRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const StartQueryResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const StopQueryRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const StopQueryResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const TagLogGroupRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const TagResourceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const TestMetricFilterRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const MetricFilterMatchRecordFilterSensitiveLog = (obj) => ({
    ...obj,
});
const TestMetricFilterResponseFilterSensitiveLog = (obj) => ({
    ...obj,
});
const UntagLogGroupRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
const UntagResourceRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/protocols/Aws_json1_1.js




const serializeAws_json1_1AssociateKmsKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.AssociateKmsKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateKmsKeyRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1CancelExportTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.CancelExportTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelExportTaskRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1CreateExportTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.CreateExportTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateExportTaskRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1CreateLogGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.CreateLogGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLogGroupRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1CreateLogStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.CreateLogStream",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLogStreamRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DeleteDataProtectionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DeleteDataProtectionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDataProtectionPolicyRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DeleteDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DeleteDestination",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDestinationRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DeleteLogGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DeleteLogGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLogGroupRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DeleteLogStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DeleteLogStream",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLogStreamRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DeleteMetricFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DeleteMetricFilter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMetricFilterRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DeleteQueryDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DeleteQueryDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteQueryDefinitionRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DeleteResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DeleteResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DeleteRetentionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DeleteRetentionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRetentionPolicyRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DeleteSubscriptionFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DeleteSubscriptionFilter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSubscriptionFilterRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DescribeDestinationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DescribeDestinations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDestinationsRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DescribeExportTasksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DescribeExportTasks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeExportTasksRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DescribeLogGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DescribeLogGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLogGroupsRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DescribeLogStreamsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DescribeLogStreams",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLogStreamsRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DescribeMetricFiltersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DescribeMetricFilters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMetricFiltersRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DescribeQueriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DescribeQueries",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeQueriesRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DescribeQueryDefinitionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DescribeQueryDefinitions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeQueryDefinitionsRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DescribeResourcePoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DescribeResourcePolicies",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeResourcePoliciesRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DescribeSubscriptionFiltersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DescribeSubscriptionFilters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSubscriptionFiltersRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1DisassociateKmsKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.DisassociateKmsKey",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateKmsKeyRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1FilterLogEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.FilterLogEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1FilterLogEventsRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1GetDataProtectionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.GetDataProtectionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDataProtectionPolicyRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1GetLogEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.GetLogEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLogEventsRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1GetLogGroupFieldsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.GetLogGroupFields",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLogGroupFieldsRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1GetLogRecordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.GetLogRecord",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLogRecordRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1GetQueryResultsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.GetQueryResults",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetQueryResultsRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1ListTagsLogGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.ListTagsLogGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsLogGroupRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1PutDataProtectionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.PutDataProtectionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutDataProtectionPolicyRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1PutDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.PutDestination",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutDestinationRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1PutDestinationPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.PutDestinationPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutDestinationPolicyRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1PutLogEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.PutLogEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutLogEventsRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1PutMetricFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.PutMetricFilter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutMetricFilterRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1PutQueryDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.PutQueryDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutQueryDefinitionRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1PutResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.PutResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1PutRetentionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.PutRetentionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRetentionPolicyRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1PutSubscriptionFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.PutSubscriptionFilter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutSubscriptionFilterRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1StartQueryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.StartQuery",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartQueryRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1StopQueryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.StopQuery",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopQueryRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1TagLogGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.TagLogGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagLogGroupRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1TestMetricFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.TestMetricFilter",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TestMetricFilterRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1UntagLogGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.UntagLogGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagLogGroupRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Logs_20140328.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return Aws_json1_1_buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const deserializeAws_json1_1AssociateKmsKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateKmsKeyCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1AssociateKmsKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1CancelExportTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelExportTaskCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1CancelExportTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidOperationException":
        case "com.amazonaws.cloudwatchlogs#InvalidOperationException":
            throw await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1CreateExportTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateExportTaskCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateExportTaskResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1CreateExportTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cloudwatchlogs#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
            throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1CreateLogGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLogGroupCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1CreateLogGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cloudwatchlogs#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
            throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1CreateLogStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLogStreamCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1CreateLogStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
            throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DeleteDataProtectionPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDataProtectionPolicyCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DeleteDataProtectionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DeleteDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDestinationCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DeleteDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DeleteLogGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLogGroupCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DeleteLogGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DeleteLogStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLogStreamCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DeleteLogStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DeleteMetricFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteMetricFilterCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DeleteMetricFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DeleteQueryDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteQueryDefinitionCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteQueryDefinitionResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DeleteQueryDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DeleteResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DeleteRetentionPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRetentionPolicyCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DeleteRetentionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DeleteSubscriptionFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSubscriptionFilterCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DeleteSubscriptionFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DescribeDestinationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDestinationsCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDestinationsResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DescribeDestinationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DescribeExportTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeExportTasksCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeExportTasksResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DescribeExportTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DescribeLogGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLogGroupsCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLogGroupsResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DescribeLogGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DescribeLogStreamsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLogStreamsCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLogStreamsResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DescribeLogStreamsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DescribeMetricFiltersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMetricFiltersCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMetricFiltersResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DescribeMetricFiltersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DescribeQueriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeQueriesCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeQueriesResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DescribeQueriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DescribeQueryDefinitionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeQueryDefinitionsCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeQueryDefinitionsResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DescribeQueryDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DescribeResourcePoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeResourcePoliciesCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeResourcePoliciesResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DescribeResourcePoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DescribeSubscriptionFiltersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSubscriptionFiltersCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSubscriptionFiltersResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DescribeSubscriptionFiltersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DisassociateKmsKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateKmsKeyCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1DisassociateKmsKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1FilterLogEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1FilterLogEventsCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1FilterLogEventsResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1FilterLogEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1GetDataProtectionPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDataProtectionPolicyCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDataProtectionPolicyResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1GetDataProtectionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1GetLogEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLogEventsCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLogEventsResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1GetLogEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1GetLogGroupFieldsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLogGroupFieldsCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLogGroupFieldsResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1GetLogGroupFieldsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cloudwatchlogs#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1GetLogRecordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLogRecordCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLogRecordResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1GetLogRecordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cloudwatchlogs#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1GetQueryResultsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetQueryResultsCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetQueryResultsResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1GetQueryResultsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1ListTagsLogGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsLogGroupCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsLogGroupResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1ListTagsLogGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1PutDataProtectionPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutDataProtectionPolicyCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutDataProtectionPolicyResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1PutDataProtectionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cloudwatchlogs#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1PutDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutDestinationCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutDestinationResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1PutDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1PutDestinationPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutDestinationPolicyCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1PutDestinationPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1PutLogEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutLogEventsCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutLogEventsResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1PutLogEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DataAlreadyAcceptedException":
        case "com.amazonaws.cloudwatchlogs#DataAlreadyAcceptedException":
            throw await deserializeAws_json1_1DataAlreadyAcceptedExceptionResponse(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "InvalidSequenceTokenException":
        case "com.amazonaws.cloudwatchlogs#InvalidSequenceTokenException":
            throw await deserializeAws_json1_1InvalidSequenceTokenExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        case "UnrecognizedClientException":
        case "com.amazonaws.cloudwatchlogs#UnrecognizedClientException":
            throw await deserializeAws_json1_1UnrecognizedClientExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1PutMetricFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutMetricFilterCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1PutMetricFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cloudwatchlogs#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1PutQueryDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutQueryDefinitionCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutQueryDefinitionResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1PutQueryDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cloudwatchlogs#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1PutResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1PutResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cloudwatchlogs#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1PutRetentionPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutRetentionPolicyCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1PutRetentionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1PutSubscriptionFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutSubscriptionFilterCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1PutSubscriptionFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cloudwatchlogs#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "OperationAbortedException":
        case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
            throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1StartQueryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartQueryCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartQueryResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1StartQueryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cloudwatchlogs#LimitExceededException":
            throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
        case "MalformedQueryException":
        case "com.amazonaws.cloudwatchlogs#MalformedQueryException":
            throw await deserializeAws_json1_1MalformedQueryExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1StopQueryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopQueryCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopQueryResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1StopQueryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1TagLogGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagLogGroupCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1TagLogGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        case "TooManyTagsException":
        case "com.amazonaws.cloudwatchlogs#TooManyTagsException":
            throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1TestMetricFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TestMetricFilterCommandError(output, context);
    }
    const data = await Aws_json1_1_parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TestMetricFilterResponse(data, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1TestMetricFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1UntagLogGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagLogGroupCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1UntagLogGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    await Aws_json1_1_collectBody(output.body, context);
    const response = {
        $metadata: Aws_json1_1_deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await Aws_json1_1_parseErrorBody(output.body, context),
    };
    const errorCode = Aws_json1_1_loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
            throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
            throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
            throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            default_error_handler_throwDefaultError({
                output,
                parsedBody,
                exceptionCtor: CloudWatchLogsServiceException,
                errorCode,
            });
    }
};
const deserializeAws_json1_1DataAlreadyAcceptedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DataAlreadyAcceptedException(body, context);
    const exception = new DataAlreadyAcceptedException({
        $metadata: Aws_json1_1_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_json1_1InvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOperationException(body, context);
    const exception = new InvalidOperationException({
        $metadata: Aws_json1_1_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const exception = new InvalidParameterException({
        $metadata: Aws_json1_1_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_json1_1InvalidSequenceTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSequenceTokenException(body, context);
    const exception = new InvalidSequenceTokenException({
        $metadata: Aws_json1_1_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const exception = new LimitExceededException({
        $metadata: Aws_json1_1_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_json1_1MalformedQueryExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MalformedQueryException(body, context);
    const exception = new MalformedQueryException({
        $metadata: Aws_json1_1_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_json1_1OperationAbortedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationAbortedException(body, context);
    const exception = new OperationAbortedException({
        $metadata: Aws_json1_1_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const exception = new ResourceAlreadyExistsException({
        $metadata: Aws_json1_1_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const exception = new models_0_ResourceNotFoundException({
        $metadata: Aws_json1_1_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
    const exception = new ServiceUnavailableException({
        $metadata: Aws_json1_1_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const exception = new TooManyTagsException({
        $metadata: Aws_json1_1_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const deserializeAws_json1_1UnrecognizedClientExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnrecognizedClientException(body, context);
    const exception = new UnrecognizedClientException({
        $metadata: Aws_json1_1_deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const serializeAws_json1_1AccountIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1AssociateKmsKeyRequest = (input, context) => {
    return {
        ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    };
};
const serializeAws_json1_1CancelExportTaskRequest = (input, context) => {
    return {
        ...(input.taskId != null && { taskId: input.taskId }),
    };
};
const serializeAws_json1_1CreateExportTaskRequest = (input, context) => {
    return {
        ...(input.destination != null && { destination: input.destination }),
        ...(input.destinationPrefix != null && { destinationPrefix: input.destinationPrefix }),
        ...(input.from != null && { from: input.from }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.logStreamNamePrefix != null && { logStreamNamePrefix: input.logStreamNamePrefix }),
        ...(input.taskName != null && { taskName: input.taskName }),
        ...(input.to != null && { to: input.to }),
    };
};
const serializeAws_json1_1CreateLogGroupRequest = (input, context) => {
    return {
        ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateLogStreamRequest = (input, context) => {
    return {
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.logStreamName != null && { logStreamName: input.logStreamName }),
    };
};
const serializeAws_json1_1DeleteDataProtectionPolicyRequest = (input, context) => {
    return {
        ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
    };
};
const serializeAws_json1_1DeleteDestinationRequest = (input, context) => {
    return {
        ...(input.destinationName != null && { destinationName: input.destinationName }),
    };
};
const serializeAws_json1_1DeleteLogGroupRequest = (input, context) => {
    return {
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    };
};
const serializeAws_json1_1DeleteLogStreamRequest = (input, context) => {
    return {
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.logStreamName != null && { logStreamName: input.logStreamName }),
    };
};
const serializeAws_json1_1DeleteMetricFilterRequest = (input, context) => {
    return {
        ...(input.filterName != null && { filterName: input.filterName }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    };
};
const serializeAws_json1_1DeleteQueryDefinitionRequest = (input, context) => {
    return {
        ...(input.queryDefinitionId != null && { queryDefinitionId: input.queryDefinitionId }),
    };
};
const serializeAws_json1_1DeleteResourcePolicyRequest = (input, context) => {
    return {
        ...(input.policyName != null && { policyName: input.policyName }),
    };
};
const serializeAws_json1_1DeleteRetentionPolicyRequest = (input, context) => {
    return {
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    };
};
const serializeAws_json1_1DeleteSubscriptionFilterRequest = (input, context) => {
    return {
        ...(input.filterName != null && { filterName: input.filterName }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    };
};
const serializeAws_json1_1DescribeDestinationsRequest = (input, context) => {
    return {
        ...(input.DestinationNamePrefix != null && { DestinationNamePrefix: input.DestinationNamePrefix }),
        ...(input.limit != null && { limit: input.limit }),
        ...(input.nextToken != null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeExportTasksRequest = (input, context) => {
    return {
        ...(input.limit != null && { limit: input.limit }),
        ...(input.nextToken != null && { nextToken: input.nextToken }),
        ...(input.statusCode != null && { statusCode: input.statusCode }),
        ...(input.taskId != null && { taskId: input.taskId }),
    };
};
const serializeAws_json1_1DescribeLogGroupsRequest = (input, context) => {
    return {
        ...(input.accountIdentifiers != null && {
            accountIdentifiers: serializeAws_json1_1AccountIds(input.accountIdentifiers, context),
        }),
        ...(input.includeLinkedAccounts != null && { includeLinkedAccounts: input.includeLinkedAccounts }),
        ...(input.limit != null && { limit: input.limit }),
        ...(input.logGroupNamePattern != null && { logGroupNamePattern: input.logGroupNamePattern }),
        ...(input.logGroupNamePrefix != null && { logGroupNamePrefix: input.logGroupNamePrefix }),
        ...(input.nextToken != null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeLogStreamsRequest = (input, context) => {
    return {
        ...(input.descending != null && { descending: input.descending }),
        ...(input.limit != null && { limit: input.limit }),
        ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.logStreamNamePrefix != null && { logStreamNamePrefix: input.logStreamNamePrefix }),
        ...(input.nextToken != null && { nextToken: input.nextToken }),
        ...(input.orderBy != null && { orderBy: input.orderBy }),
    };
};
const serializeAws_json1_1DescribeMetricFiltersRequest = (input, context) => {
    return {
        ...(input.filterNamePrefix != null && { filterNamePrefix: input.filterNamePrefix }),
        ...(input.limit != null && { limit: input.limit }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.metricName != null && { metricName: input.metricName }),
        ...(input.metricNamespace != null && { metricNamespace: input.metricNamespace }),
        ...(input.nextToken != null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeQueriesRequest = (input, context) => {
    return {
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.maxResults != null && { maxResults: input.maxResults }),
        ...(input.nextToken != null && { nextToken: input.nextToken }),
        ...(input.status != null && { status: input.status }),
    };
};
const serializeAws_json1_1DescribeQueryDefinitionsRequest = (input, context) => {
    return {
        ...(input.maxResults != null && { maxResults: input.maxResults }),
        ...(input.nextToken != null && { nextToken: input.nextToken }),
        ...(input.queryDefinitionNamePrefix != null && { queryDefinitionNamePrefix: input.queryDefinitionNamePrefix }),
    };
};
const serializeAws_json1_1DescribeResourcePoliciesRequest = (input, context) => {
    return {
        ...(input.limit != null && { limit: input.limit }),
        ...(input.nextToken != null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeSubscriptionFiltersRequest = (input, context) => {
    return {
        ...(input.filterNamePrefix != null && { filterNamePrefix: input.filterNamePrefix }),
        ...(input.limit != null && { limit: input.limit }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.nextToken != null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1Dimensions = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = value;
        return acc;
    }, {});
};
const serializeAws_json1_1DisassociateKmsKeyRequest = (input, context) => {
    return {
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    };
};
const serializeAws_json1_1FilterLogEventsRequest = (input, context) => {
    return {
        ...(input.endTime != null && { endTime: input.endTime }),
        ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
        ...(input.interleaved != null && { interleaved: input.interleaved }),
        ...(input.limit != null && { limit: input.limit }),
        ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.logStreamNamePrefix != null && { logStreamNamePrefix: input.logStreamNamePrefix }),
        ...(input.logStreamNames != null && {
            logStreamNames: serializeAws_json1_1InputLogStreamNames(input.logStreamNames, context),
        }),
        ...(input.nextToken != null && { nextToken: input.nextToken }),
        ...(input.startTime != null && { startTime: input.startTime }),
        ...(input.unmask != null && { unmask: input.unmask }),
    };
};
const serializeAws_json1_1GetDataProtectionPolicyRequest = (input, context) => {
    return {
        ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
    };
};
const serializeAws_json1_1GetLogEventsRequest = (input, context) => {
    return {
        ...(input.endTime != null && { endTime: input.endTime }),
        ...(input.limit != null && { limit: input.limit }),
        ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.logStreamName != null && { logStreamName: input.logStreamName }),
        ...(input.nextToken != null && { nextToken: input.nextToken }),
        ...(input.startFromHead != null && { startFromHead: input.startFromHead }),
        ...(input.startTime != null && { startTime: input.startTime }),
        ...(input.unmask != null && { unmask: input.unmask }),
    };
};
const serializeAws_json1_1GetLogGroupFieldsRequest = (input, context) => {
    return {
        ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.time != null && { time: input.time }),
    };
};
const serializeAws_json1_1GetLogRecordRequest = (input, context) => {
    return {
        ...(input.logRecordPointer != null && { logRecordPointer: input.logRecordPointer }),
        ...(input.unmask != null && { unmask: input.unmask }),
    };
};
const serializeAws_json1_1GetQueryResultsRequest = (input, context) => {
    return {
        ...(input.queryId != null && { queryId: input.queryId }),
    };
};
const serializeAws_json1_1InputLogEvent = (input, context) => {
    return {
        ...(input.message != null && { message: input.message }),
        ...(input.timestamp != null && { timestamp: input.timestamp }),
    };
};
const serializeAws_json1_1InputLogEvents = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_json1_1InputLogEvent(entry, context);
    });
};
const serializeAws_json1_1InputLogStreamNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    };
};
const serializeAws_json1_1ListTagsLogGroupRequest = (input, context) => {
    return {
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    };
};
const serializeAws_json1_1LogGroupIdentifiers = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1LogGroupNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1MetricTransformation = (input, context) => {
    return {
        ...(input.defaultValue != null && { defaultValue: serializeFloat(input.defaultValue) }),
        ...(input.dimensions != null && { dimensions: serializeAws_json1_1Dimensions(input.dimensions, context) }),
        ...(input.metricName != null && { metricName: input.metricName }),
        ...(input.metricNamespace != null && { metricNamespace: input.metricNamespace }),
        ...(input.metricValue != null && { metricValue: input.metricValue }),
        ...(input.unit != null && { unit: input.unit }),
    };
};
const serializeAws_json1_1MetricTransformations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeAws_json1_1MetricTransformation(entry, context);
    });
};
const serializeAws_json1_1PutDataProtectionPolicyRequest = (input, context) => {
    return {
        ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
        ...(input.policyDocument != null && { policyDocument: input.policyDocument }),
    };
};
const serializeAws_json1_1PutDestinationPolicyRequest = (input, context) => {
    return {
        ...(input.accessPolicy != null && { accessPolicy: input.accessPolicy }),
        ...(input.destinationName != null && { destinationName: input.destinationName }),
        ...(input.forceUpdate != null && { forceUpdate: input.forceUpdate }),
    };
};
const serializeAws_json1_1PutDestinationRequest = (input, context) => {
    return {
        ...(input.destinationName != null && { destinationName: input.destinationName }),
        ...(input.roleArn != null && { roleArn: input.roleArn }),
        ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
        ...(input.targetArn != null && { targetArn: input.targetArn }),
    };
};
const serializeAws_json1_1PutLogEventsRequest = (input, context) => {
    return {
        ...(input.logEvents != null && { logEvents: serializeAws_json1_1InputLogEvents(input.logEvents, context) }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.logStreamName != null && { logStreamName: input.logStreamName }),
        ...(input.sequenceToken != null && { sequenceToken: input.sequenceToken }),
    };
};
const serializeAws_json1_1PutMetricFilterRequest = (input, context) => {
    return {
        ...(input.filterName != null && { filterName: input.filterName }),
        ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.metricTransformations != null && {
            metricTransformations: serializeAws_json1_1MetricTransformations(input.metricTransformations, context),
        }),
    };
};
const serializeAws_json1_1PutQueryDefinitionRequest = (input, context) => {
    return {
        ...(input.logGroupNames != null && {
            logGroupNames: serializeAws_json1_1LogGroupNames(input.logGroupNames, context),
        }),
        ...(input.name != null && { name: input.name }),
        ...(input.queryDefinitionId != null && { queryDefinitionId: input.queryDefinitionId }),
        ...(input.queryString != null && { queryString: input.queryString }),
    };
};
const serializeAws_json1_1PutResourcePolicyRequest = (input, context) => {
    return {
        ...(input.policyDocument != null && { policyDocument: input.policyDocument }),
        ...(input.policyName != null && { policyName: input.policyName }),
    };
};
const serializeAws_json1_1PutRetentionPolicyRequest = (input, context) => {
    return {
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.retentionInDays != null && { retentionInDays: input.retentionInDays }),
    };
};
const serializeAws_json1_1PutSubscriptionFilterRequest = (input, context) => {
    return {
        ...(input.destinationArn != null && { destinationArn: input.destinationArn }),
        ...(input.distribution != null && { distribution: input.distribution }),
        ...(input.filterName != null && { filterName: input.filterName }),
        ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.roleArn != null && { roleArn: input.roleArn }),
    };
};
const serializeAws_json1_1StartQueryRequest = (input, context) => {
    return {
        ...(input.endTime != null && { endTime: input.endTime }),
        ...(input.limit != null && { limit: input.limit }),
        ...(input.logGroupIdentifiers != null && {
            logGroupIdentifiers: serializeAws_json1_1LogGroupIdentifiers(input.logGroupIdentifiers, context),
        }),
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.logGroupNames != null && {
            logGroupNames: serializeAws_json1_1LogGroupNames(input.logGroupNames, context),
        }),
        ...(input.queryString != null && { queryString: input.queryString }),
        ...(input.startTime != null && { startTime: input.startTime }),
    };
};
const serializeAws_json1_1StopQueryRequest = (input, context) => {
    return {
        ...(input.queryId != null && { queryId: input.queryId }),
    };
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1TagLogGroupRequest = (input, context) => {
    return {
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    };
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
        ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    };
};
const serializeAws_json1_1Tags = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = value;
        return acc;
    }, {});
};
const serializeAws_json1_1TestEventMessages = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return entry;
    });
};
const serializeAws_json1_1TestMetricFilterRequest = (input, context) => {
    return {
        ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
        ...(input.logEventMessages != null && {
            logEventMessages: serializeAws_json1_1TestEventMessages(input.logEventMessages, context),
        }),
    };
};
const serializeAws_json1_1UntagLogGroupRequest = (input, context) => {
    return {
        ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
        ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
        ...(input.tagKeys != null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
    };
};
const deserializeAws_json1_1CreateExportTaskResponse = (output, context) => {
    return {
        taskId: expectString(output.taskId),
    };
};
const deserializeAws_json1_1DataAlreadyAcceptedException = (output, context) => {
    return {
        expectedSequenceToken: expectString(output.expectedSequenceToken),
        message: expectString(output.message),
    };
};
const deserializeAws_json1_1DeleteQueryDefinitionResponse = (output, context) => {
    return {
        success: expectBoolean(output.success),
    };
};
const deserializeAws_json1_1DescribeDestinationsResponse = (output, context) => {
    return {
        destinations: output.destinations != null ? deserializeAws_json1_1Destinations(output.destinations, context) : undefined,
        nextToken: expectString(output.nextToken),
    };
};
const deserializeAws_json1_1DescribeExportTasksResponse = (output, context) => {
    return {
        exportTasks: output.exportTasks != null ? deserializeAws_json1_1ExportTasks(output.exportTasks, context) : undefined,
        nextToken: expectString(output.nextToken),
    };
};
const deserializeAws_json1_1DescribeLogGroupsResponse = (output, context) => {
    return {
        logGroups: output.logGroups != null ? deserializeAws_json1_1LogGroups(output.logGroups, context) : undefined,
        nextToken: expectString(output.nextToken),
    };
};
const deserializeAws_json1_1DescribeLogStreamsResponse = (output, context) => {
    return {
        logStreams: output.logStreams != null ? deserializeAws_json1_1LogStreams(output.logStreams, context) : undefined,
        nextToken: expectString(output.nextToken),
    };
};
const deserializeAws_json1_1DescribeMetricFiltersResponse = (output, context) => {
    return {
        metricFilters: output.metricFilters != null ? deserializeAws_json1_1MetricFilters(output.metricFilters, context) : undefined,
        nextToken: expectString(output.nextToken),
    };
};
const deserializeAws_json1_1DescribeQueriesResponse = (output, context) => {
    return {
        nextToken: expectString(output.nextToken),
        queries: output.queries != null ? deserializeAws_json1_1QueryInfoList(output.queries, context) : undefined,
    };
};
const deserializeAws_json1_1DescribeQueryDefinitionsResponse = (output, context) => {
    return {
        nextToken: expectString(output.nextToken),
        queryDefinitions: output.queryDefinitions != null
            ? deserializeAws_json1_1QueryDefinitionList(output.queryDefinitions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeResourcePoliciesResponse = (output, context) => {
    return {
        nextToken: expectString(output.nextToken),
        resourcePolicies: output.resourcePolicies != null
            ? deserializeAws_json1_1ResourcePolicies(output.resourcePolicies, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSubscriptionFiltersResponse = (output, context) => {
    return {
        nextToken: expectString(output.nextToken),
        subscriptionFilters: output.subscriptionFilters != null
            ? deserializeAws_json1_1SubscriptionFilters(output.subscriptionFilters, context)
            : undefined,
    };
};
const deserializeAws_json1_1Destination = (output, context) => {
    return {
        accessPolicy: expectString(output.accessPolicy),
        arn: expectString(output.arn),
        creationTime: expectLong(output.creationTime),
        destinationName: expectString(output.destinationName),
        roleArn: expectString(output.roleArn),
        targetArn: expectString(output.targetArn),
    };
};
const deserializeAws_json1_1Destinations = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Destination(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1Dimensions = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = expectString(value);
        return acc;
    }, {});
};
const deserializeAws_json1_1ExportTask = (output, context) => {
    return {
        destination: expectString(output.destination),
        destinationPrefix: expectString(output.destinationPrefix),
        executionInfo: output.executionInfo != null
            ? deserializeAws_json1_1ExportTaskExecutionInfo(output.executionInfo, context)
            : undefined,
        from: expectLong(output.from),
        logGroupName: expectString(output.logGroupName),
        status: output.status != null ? deserializeAws_json1_1ExportTaskStatus(output.status, context) : undefined,
        taskId: expectString(output.taskId),
        taskName: expectString(output.taskName),
        to: expectLong(output.to),
    };
};
const deserializeAws_json1_1ExportTaskExecutionInfo = (output, context) => {
    return {
        completionTime: expectLong(output.completionTime),
        creationTime: expectLong(output.creationTime),
    };
};
const deserializeAws_json1_1ExportTasks = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ExportTask(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1ExportTaskStatus = (output, context) => {
    return {
        code: expectString(output.code),
        message: expectString(output.message),
    };
};
const deserializeAws_json1_1ExtractedValues = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = expectString(value);
        return acc;
    }, {});
};
const deserializeAws_json1_1FilteredLogEvent = (output, context) => {
    return {
        eventId: expectString(output.eventId),
        ingestionTime: expectLong(output.ingestionTime),
        logStreamName: expectString(output.logStreamName),
        message: expectString(output.message),
        timestamp: expectLong(output.timestamp),
    };
};
const deserializeAws_json1_1FilteredLogEvents = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FilteredLogEvent(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1FilterLogEventsResponse = (output, context) => {
    return {
        events: output.events != null ? deserializeAws_json1_1FilteredLogEvents(output.events, context) : undefined,
        nextToken: expectString(output.nextToken),
        searchedLogStreams: output.searchedLogStreams != null
            ? deserializeAws_json1_1SearchedLogStreams(output.searchedLogStreams, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDataProtectionPolicyResponse = (output, context) => {
    return {
        lastUpdatedTime: expectLong(output.lastUpdatedTime),
        logGroupIdentifier: expectString(output.logGroupIdentifier),
        policyDocument: expectString(output.policyDocument),
    };
};
const deserializeAws_json1_1GetLogEventsResponse = (output, context) => {
    return {
        events: output.events != null ? deserializeAws_json1_1OutputLogEvents(output.events, context) : undefined,
        nextBackwardToken: expectString(output.nextBackwardToken),
        nextForwardToken: expectString(output.nextForwardToken),
    };
};
const deserializeAws_json1_1GetLogGroupFieldsResponse = (output, context) => {
    return {
        logGroupFields: output.logGroupFields != null
            ? deserializeAws_json1_1LogGroupFieldList(output.logGroupFields, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetLogRecordResponse = (output, context) => {
    return {
        logRecord: output.logRecord != null ? deserializeAws_json1_1LogRecord(output.logRecord, context) : undefined,
    };
};
const deserializeAws_json1_1GetQueryResultsResponse = (output, context) => {
    return {
        results: output.results != null ? deserializeAws_json1_1QueryResults(output.results, context) : undefined,
        statistics: output.statistics != null ? deserializeAws_json1_1QueryStatistics(output.statistics, context) : undefined,
        status: expectString(output.status),
    };
};
const deserializeAws_json1_1InvalidOperationException = (output, context) => {
    return {
        message: expectString(output.message),
    };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    return {
        message: expectString(output.message),
    };
};
const deserializeAws_json1_1InvalidSequenceTokenException = (output, context) => {
    return {
        expectedSequenceToken: expectString(output.expectedSequenceToken),
        message: expectString(output.message),
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: expectString(output.message),
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        tags: output.tags != null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
const deserializeAws_json1_1ListTagsLogGroupResponse = (output, context) => {
    return {
        tags: output.tags != null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
const deserializeAws_json1_1LogGroup = (output, context) => {
    return {
        arn: expectString(output.arn),
        creationTime: expectLong(output.creationTime),
        dataProtectionStatus: expectString(output.dataProtectionStatus),
        kmsKeyId: expectString(output.kmsKeyId),
        logGroupName: expectString(output.logGroupName),
        metricFilterCount: expectInt32(output.metricFilterCount),
        retentionInDays: expectInt32(output.retentionInDays),
        storedBytes: expectLong(output.storedBytes),
    };
};
const deserializeAws_json1_1LogGroupField = (output, context) => {
    return {
        name: expectString(output.name),
        percent: expectInt32(output.percent),
    };
};
const deserializeAws_json1_1LogGroupFieldList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LogGroupField(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1LogGroupNames = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return expectString(entry);
    });
    return retVal;
};
const deserializeAws_json1_1LogGroups = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LogGroup(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1LogRecord = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = expectString(value);
        return acc;
    }, {});
};
const deserializeAws_json1_1LogStream = (output, context) => {
    return {
        arn: expectString(output.arn),
        creationTime: expectLong(output.creationTime),
        firstEventTimestamp: expectLong(output.firstEventTimestamp),
        lastEventTimestamp: expectLong(output.lastEventTimestamp),
        lastIngestionTime: expectLong(output.lastIngestionTime),
        logStreamName: expectString(output.logStreamName),
        storedBytes: expectLong(output.storedBytes),
        uploadSequenceToken: expectString(output.uploadSequenceToken),
    };
};
const deserializeAws_json1_1LogStreams = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LogStream(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1MalformedQueryException = (output, context) => {
    return {
        message: expectString(output.message),
        queryCompileError: output.queryCompileError != null
            ? deserializeAws_json1_1QueryCompileError(output.queryCompileError, context)
            : undefined,
    };
};
const deserializeAws_json1_1MetricFilter = (output, context) => {
    return {
        creationTime: expectLong(output.creationTime),
        filterName: expectString(output.filterName),
        filterPattern: expectString(output.filterPattern),
        logGroupName: expectString(output.logGroupName),
        metricTransformations: output.metricTransformations != null
            ? deserializeAws_json1_1MetricTransformations(output.metricTransformations, context)
            : undefined,
    };
};
const deserializeAws_json1_1MetricFilterMatches = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MetricFilterMatchRecord(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1MetricFilterMatchRecord = (output, context) => {
    return {
        eventMessage: expectString(output.eventMessage),
        eventNumber: expectLong(output.eventNumber),
        extractedValues: output.extractedValues != null
            ? deserializeAws_json1_1ExtractedValues(output.extractedValues, context)
            : undefined,
    };
};
const deserializeAws_json1_1MetricFilters = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MetricFilter(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1MetricTransformation = (output, context) => {
    return {
        defaultValue: limitedParseDouble(output.defaultValue),
        dimensions: output.dimensions != null ? deserializeAws_json1_1Dimensions(output.dimensions, context) : undefined,
        metricName: expectString(output.metricName),
        metricNamespace: expectString(output.metricNamespace),
        metricValue: expectString(output.metricValue),
        unit: expectString(output.unit),
    };
};
const deserializeAws_json1_1MetricTransformations = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MetricTransformation(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1OperationAbortedException = (output, context) => {
    return {
        message: expectString(output.message),
    };
};
const deserializeAws_json1_1OutputLogEvent = (output, context) => {
    return {
        ingestionTime: expectLong(output.ingestionTime),
        message: expectString(output.message),
        timestamp: expectLong(output.timestamp),
    };
};
const deserializeAws_json1_1OutputLogEvents = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OutputLogEvent(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1PutDataProtectionPolicyResponse = (output, context) => {
    return {
        lastUpdatedTime: expectLong(output.lastUpdatedTime),
        logGroupIdentifier: expectString(output.logGroupIdentifier),
        policyDocument: expectString(output.policyDocument),
    };
};
const deserializeAws_json1_1PutDestinationResponse = (output, context) => {
    return {
        destination: output.destination != null ? deserializeAws_json1_1Destination(output.destination, context) : undefined,
    };
};
const deserializeAws_json1_1PutLogEventsResponse = (output, context) => {
    return {
        nextSequenceToken: expectString(output.nextSequenceToken),
        rejectedLogEventsInfo: output.rejectedLogEventsInfo != null
            ? deserializeAws_json1_1RejectedLogEventsInfo(output.rejectedLogEventsInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutQueryDefinitionResponse = (output, context) => {
    return {
        queryDefinitionId: expectString(output.queryDefinitionId),
    };
};
const deserializeAws_json1_1PutResourcePolicyResponse = (output, context) => {
    return {
        resourcePolicy: output.resourcePolicy != null ? deserializeAws_json1_1ResourcePolicy(output.resourcePolicy, context) : undefined,
    };
};
const deserializeAws_json1_1QueryCompileError = (output, context) => {
    return {
        location: output.location != null ? deserializeAws_json1_1QueryCompileErrorLocation(output.location, context) : undefined,
        message: expectString(output.message),
    };
};
const deserializeAws_json1_1QueryCompileErrorLocation = (output, context) => {
    return {
        endCharOffset: expectInt32(output.endCharOffset),
        startCharOffset: expectInt32(output.startCharOffset),
    };
};
const deserializeAws_json1_1QueryDefinition = (output, context) => {
    return {
        lastModified: expectLong(output.lastModified),
        logGroupNames: output.logGroupNames != null ? deserializeAws_json1_1LogGroupNames(output.logGroupNames, context) : undefined,
        name: expectString(output.name),
        queryDefinitionId: expectString(output.queryDefinitionId),
        queryString: expectString(output.queryString),
    };
};
const deserializeAws_json1_1QueryDefinitionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1QueryDefinition(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1QueryInfo = (output, context) => {
    return {
        createTime: expectLong(output.createTime),
        logGroupName: expectString(output.logGroupName),
        queryId: expectString(output.queryId),
        queryString: expectString(output.queryString),
        status: expectString(output.status),
    };
};
const deserializeAws_json1_1QueryInfoList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1QueryInfo(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1QueryResults = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResultRows(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1QueryStatistics = (output, context) => {
    return {
        bytesScanned: limitedParseDouble(output.bytesScanned),
        recordsMatched: limitedParseDouble(output.recordsMatched),
        recordsScanned: limitedParseDouble(output.recordsScanned),
    };
};
const deserializeAws_json1_1RejectedLogEventsInfo = (output, context) => {
    return {
        expiredLogEventEndIndex: expectInt32(output.expiredLogEventEndIndex),
        tooNewLogEventStartIndex: expectInt32(output.tooNewLogEventStartIndex),
        tooOldLogEventEndIndex: expectInt32(output.tooOldLogEventEndIndex),
    };
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    return {
        message: expectString(output.message),
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: expectString(output.message),
    };
};
const deserializeAws_json1_1ResourcePolicies = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourcePolicy(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1ResourcePolicy = (output, context) => {
    return {
        lastUpdatedTime: expectLong(output.lastUpdatedTime),
        policyDocument: expectString(output.policyDocument),
        policyName: expectString(output.policyName),
    };
};
const deserializeAws_json1_1ResultField = (output, context) => {
    return {
        field: expectString(output.field),
        value: expectString(output.value),
    };
};
const deserializeAws_json1_1ResultRows = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResultField(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1SearchedLogStream = (output, context) => {
    return {
        logStreamName: expectString(output.logStreamName),
        searchedCompletely: expectBoolean(output.searchedCompletely),
    };
};
const deserializeAws_json1_1SearchedLogStreams = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SearchedLogStream(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1ServiceUnavailableException = (output, context) => {
    return {
        message: expectString(output.message),
    };
};
const deserializeAws_json1_1StartQueryResponse = (output, context) => {
    return {
        queryId: expectString(output.queryId),
    };
};
const deserializeAws_json1_1StopQueryResponse = (output, context) => {
    return {
        success: expectBoolean(output.success),
    };
};
const deserializeAws_json1_1SubscriptionFilter = (output, context) => {
    return {
        creationTime: expectLong(output.creationTime),
        destinationArn: expectString(output.destinationArn),
        distribution: expectString(output.distribution),
        filterName: expectString(output.filterName),
        filterPattern: expectString(output.filterPattern),
        logGroupName: expectString(output.logGroupName),
        roleArn: expectString(output.roleArn),
    };
};
const deserializeAws_json1_1SubscriptionFilters = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SubscriptionFilter(entry, context);
    });
    return retVal;
};
const deserializeAws_json1_1Tags = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = expectString(value);
        return acc;
    }, {});
};
const deserializeAws_json1_1TestMetricFilterResponse = (output, context) => {
    return {
        matches: output.matches != null ? deserializeAws_json1_1MetricFilterMatches(output.matches, context) : undefined,
    };
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    return {
        message: expectString(output.message),
        resourceName: expectString(output.resourceName),
    };
};
const deserializeAws_json1_1UnrecognizedClientException = (output, context) => {
    return {
        message: expectString(output.message),
    };
};
const Aws_json1_1_deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const Aws_json1_1_collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const Aws_json1_1_collectBodyString = (streamBody, context) => Aws_json1_1_collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const Aws_json1_1_buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new httpRequest_HttpRequest(contents);
};
const Aws_json1_1_parseBody = (streamBody, context) => Aws_json1_1_collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const Aws_json1_1_parseErrorBody = async (errorBody, context) => {
    const value = await Aws_json1_1_parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const Aws_json1_1_loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/AssociateKmsKeyCommand.js





class AssociateKmsKeyCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, AssociateKmsKeyCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "AssociateKmsKeyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: AssociateKmsKeyRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1AssociateKmsKeyCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1AssociateKmsKeyCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/CancelExportTaskCommand.js





class CancelExportTaskCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, CancelExportTaskCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "CancelExportTaskCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: CancelExportTaskRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1CancelExportTaskCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1CancelExportTaskCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/CreateExportTaskCommand.js





class CreateExportTaskCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, CreateExportTaskCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "CreateExportTaskCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: CreateExportTaskRequestFilterSensitiveLog,
            outputFilterSensitiveLog: CreateExportTaskResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1CreateExportTaskCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1CreateExportTaskCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/CreateLogGroupCommand.js





class CreateLogGroupCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, CreateLogGroupCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "CreateLogGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: CreateLogGroupRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1CreateLogGroupCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1CreateLogGroupCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/CreateLogStreamCommand.js





class CreateLogStreamCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, CreateLogStreamCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "CreateLogStreamCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: CreateLogStreamRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1CreateLogStreamCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1CreateLogStreamCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DeleteDataProtectionPolicyCommand.js





class DeleteDataProtectionPolicyCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteDataProtectionPolicyCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DeleteDataProtectionPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DeleteDataProtectionPolicyRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DeleteDataProtectionPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DeleteDataProtectionPolicyCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DeleteDestinationCommand.js





class DeleteDestinationCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteDestinationCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DeleteDestinationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DeleteDestinationRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DeleteDestinationCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DeleteDestinationCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DeleteLogGroupCommand.js





class DeleteLogGroupCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteLogGroupCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DeleteLogGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DeleteLogGroupRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DeleteLogGroupCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DeleteLogGroupCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DeleteLogStreamCommand.js





class DeleteLogStreamCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteLogStreamCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DeleteLogStreamCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DeleteLogStreamRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DeleteLogStreamCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DeleteLogStreamCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DeleteMetricFilterCommand.js





class DeleteMetricFilterCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteMetricFilterCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DeleteMetricFilterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DeleteMetricFilterRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DeleteMetricFilterCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DeleteMetricFilterCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DeleteQueryDefinitionCommand.js





class DeleteQueryDefinitionCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteQueryDefinitionCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DeleteQueryDefinitionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DeleteQueryDefinitionRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DeleteQueryDefinitionResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DeleteQueryDefinitionCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DeleteQueryDefinitionCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DeleteResourcePolicyCommand.js





class DeleteResourcePolicyCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteResourcePolicyCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DeleteResourcePolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DeleteResourcePolicyRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DeleteResourcePolicyCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DeleteResourcePolicyCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DeleteRetentionPolicyCommand.js





class DeleteRetentionPolicyCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteRetentionPolicyCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DeleteRetentionPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DeleteRetentionPolicyRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DeleteRetentionPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DeleteRetentionPolicyCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DeleteSubscriptionFilterCommand.js





class DeleteSubscriptionFilterCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DeleteSubscriptionFilterCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DeleteSubscriptionFilterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DeleteSubscriptionFilterRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DeleteSubscriptionFilterCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DeleteSubscriptionFilterCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DescribeDestinationsCommand.js





class DescribeDestinationsCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeDestinationsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DescribeDestinationsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DescribeDestinationsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DescribeDestinationsResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DescribeDestinationsCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DescribeDestinationsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DescribeExportTasksCommand.js





class DescribeExportTasksCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeExportTasksCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DescribeExportTasksCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DescribeExportTasksRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DescribeExportTasksResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DescribeExportTasksCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DescribeExportTasksCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DescribeLogGroupsCommand.js





class DescribeLogGroupsCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeLogGroupsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DescribeLogGroupsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DescribeLogGroupsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DescribeLogGroupsResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DescribeLogGroupsCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DescribeLogGroupsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DescribeLogStreamsCommand.js





class DescribeLogStreamsCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeLogStreamsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DescribeLogStreamsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DescribeLogStreamsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DescribeLogStreamsResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DescribeLogStreamsCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DescribeLogStreamsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DescribeMetricFiltersCommand.js





class DescribeMetricFiltersCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeMetricFiltersCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DescribeMetricFiltersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DescribeMetricFiltersRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DescribeMetricFiltersResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DescribeMetricFiltersCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DescribeMetricFiltersCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DescribeQueriesCommand.js





class DescribeQueriesCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeQueriesCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DescribeQueriesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DescribeQueriesRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DescribeQueriesResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DescribeQueriesCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DescribeQueriesCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DescribeQueryDefinitionsCommand.js





class DescribeQueryDefinitionsCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeQueryDefinitionsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DescribeQueryDefinitionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DescribeQueryDefinitionsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DescribeQueryDefinitionsResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DescribeQueryDefinitionsCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DescribeQueryDefinitionsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DescribeResourcePoliciesCommand.js





class DescribeResourcePoliciesCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeResourcePoliciesCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DescribeResourcePoliciesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DescribeResourcePoliciesRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DescribeResourcePoliciesResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DescribeResourcePoliciesCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DescribeResourcePoliciesCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DescribeSubscriptionFiltersCommand.js





class DescribeSubscriptionFiltersCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DescribeSubscriptionFiltersCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DescribeSubscriptionFiltersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DescribeSubscriptionFiltersRequestFilterSensitiveLog,
            outputFilterSensitiveLog: DescribeSubscriptionFiltersResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DescribeSubscriptionFiltersCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DescribeSubscriptionFiltersCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/DisassociateKmsKeyCommand.js





class DisassociateKmsKeyCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, DisassociateKmsKeyCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "DisassociateKmsKeyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: DisassociateKmsKeyRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1DisassociateKmsKeyCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1DisassociateKmsKeyCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/FilterLogEventsCommand.js





class FilterLogEventsCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, FilterLogEventsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "FilterLogEventsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: FilterLogEventsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: FilterLogEventsResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1FilterLogEventsCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1FilterLogEventsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/GetDataProtectionPolicyCommand.js





class GetDataProtectionPolicyCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, GetDataProtectionPolicyCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "GetDataProtectionPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: GetDataProtectionPolicyRequestFilterSensitiveLog,
            outputFilterSensitiveLog: GetDataProtectionPolicyResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1GetDataProtectionPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1GetDataProtectionPolicyCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/GetLogEventsCommand.js





class GetLogEventsCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, GetLogEventsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "GetLogEventsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: GetLogEventsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: GetLogEventsResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1GetLogEventsCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1GetLogEventsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/GetLogGroupFieldsCommand.js





class GetLogGroupFieldsCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, GetLogGroupFieldsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "GetLogGroupFieldsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: GetLogGroupFieldsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: GetLogGroupFieldsResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1GetLogGroupFieldsCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1GetLogGroupFieldsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/GetLogRecordCommand.js





class GetLogRecordCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, GetLogRecordCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "GetLogRecordCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: GetLogRecordRequestFilterSensitiveLog,
            outputFilterSensitiveLog: GetLogRecordResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1GetLogRecordCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1GetLogRecordCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/GetQueryResultsCommand.js





class GetQueryResultsCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, GetQueryResultsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "GetQueryResultsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: GetQueryResultsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: GetQueryResultsResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1GetQueryResultsCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1GetQueryResultsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/ListTagsForResourceCommand.js





class ListTagsForResourceCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ListTagsForResourceCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "ListTagsForResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: ListTagsForResourceRequestFilterSensitiveLog,
            outputFilterSensitiveLog: ListTagsForResourceResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1ListTagsForResourceCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1ListTagsForResourceCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/ListTagsLogGroupCommand.js





class ListTagsLogGroupCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, ListTagsLogGroupCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "ListTagsLogGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: ListTagsLogGroupRequestFilterSensitiveLog,
            outputFilterSensitiveLog: ListTagsLogGroupResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1ListTagsLogGroupCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1ListTagsLogGroupCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/PutDataProtectionPolicyCommand.js





class PutDataProtectionPolicyCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, PutDataProtectionPolicyCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "PutDataProtectionPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: PutDataProtectionPolicyRequestFilterSensitiveLog,
            outputFilterSensitiveLog: PutDataProtectionPolicyResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1PutDataProtectionPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1PutDataProtectionPolicyCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/PutDestinationCommand.js





class PutDestinationCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, PutDestinationCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "PutDestinationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: PutDestinationRequestFilterSensitiveLog,
            outputFilterSensitiveLog: PutDestinationResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1PutDestinationCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1PutDestinationCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/PutDestinationPolicyCommand.js





class PutDestinationPolicyCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, PutDestinationPolicyCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "PutDestinationPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: PutDestinationPolicyRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1PutDestinationPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1PutDestinationPolicyCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/PutLogEventsCommand.js





class PutLogEventsCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, PutLogEventsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "PutLogEventsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: PutLogEventsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: PutLogEventsResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1PutLogEventsCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1PutLogEventsCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/PutMetricFilterCommand.js





class PutMetricFilterCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, PutMetricFilterCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "PutMetricFilterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: PutMetricFilterRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1PutMetricFilterCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1PutMetricFilterCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/PutQueryDefinitionCommand.js





class PutQueryDefinitionCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, PutQueryDefinitionCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "PutQueryDefinitionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: PutQueryDefinitionRequestFilterSensitiveLog,
            outputFilterSensitiveLog: PutQueryDefinitionResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1PutQueryDefinitionCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1PutQueryDefinitionCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/PutResourcePolicyCommand.js





class PutResourcePolicyCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, PutResourcePolicyCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "PutResourcePolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: PutResourcePolicyRequestFilterSensitiveLog,
            outputFilterSensitiveLog: PutResourcePolicyResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1PutResourcePolicyCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1PutResourcePolicyCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/PutRetentionPolicyCommand.js





class PutRetentionPolicyCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, PutRetentionPolicyCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "PutRetentionPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: PutRetentionPolicyRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1PutRetentionPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1PutRetentionPolicyCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/PutSubscriptionFilterCommand.js





class PutSubscriptionFilterCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, PutSubscriptionFilterCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "PutSubscriptionFilterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: PutSubscriptionFilterRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1PutSubscriptionFilterCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1PutSubscriptionFilterCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/StartQueryCommand.js





class StartQueryCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, StartQueryCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "StartQueryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: StartQueryRequestFilterSensitiveLog,
            outputFilterSensitiveLog: StartQueryResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1StartQueryCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1StartQueryCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/StopQueryCommand.js





class StopQueryCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, StopQueryCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "StopQueryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: StopQueryRequestFilterSensitiveLog,
            outputFilterSensitiveLog: StopQueryResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1StopQueryCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1StopQueryCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/TagLogGroupCommand.js





class TagLogGroupCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, TagLogGroupCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "TagLogGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: TagLogGroupRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1TagLogGroupCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1TagLogGroupCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/TagResourceCommand.js





class TagResourceCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, TagResourceCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "TagResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: TagResourceRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1TagResourceCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1TagResourceCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/TestMetricFilterCommand.js





class TestMetricFilterCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, TestMetricFilterCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "TestMetricFilterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: TestMetricFilterRequestFilterSensitiveLog,
            outputFilterSensitiveLog: TestMetricFilterResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1TestMetricFilterCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1TestMetricFilterCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/UntagLogGroupCommand.js





class UntagLogGroupCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, UntagLogGroupCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "UntagLogGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: UntagLogGroupRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1UntagLogGroupCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1UntagLogGroupCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/UntagResourceCommand.js





class UntagResourceCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, UntagResourceCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudWatchLogsClient";
        const commandName = "UntagResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: UntagResourceRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_json1_1UntagResourceCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_json1_1UntagResourceCommand(output, context);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/CloudWatchLogs.js

















































class CloudWatchLogs extends CloudWatchLogsClient {
    associateKmsKey(args, optionsOrCb, cb) {
        const command = new AssociateKmsKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelExportTask(args, optionsOrCb, cb) {
        const command = new CancelExportTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createExportTask(args, optionsOrCb, cb) {
        const command = new CreateExportTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createLogGroup(args, optionsOrCb, cb) {
        const command = new CreateLogGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createLogStream(args, optionsOrCb, cb) {
        const command = new CreateLogStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDataProtectionPolicy(args, optionsOrCb, cb) {
        const command = new DeleteDataProtectionPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDestination(args, optionsOrCb, cb) {
        const command = new DeleteDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteLogGroup(args, optionsOrCb, cb) {
        const command = new DeleteLogGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteLogStream(args, optionsOrCb, cb) {
        const command = new DeleteLogStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteMetricFilter(args, optionsOrCb, cb) {
        const command = new DeleteMetricFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteQueryDefinition(args, optionsOrCb, cb) {
        const command = new DeleteQueryDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteResourcePolicy(args, optionsOrCb, cb) {
        const command = new DeleteResourcePolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteRetentionPolicy(args, optionsOrCb, cb) {
        const command = new DeleteRetentionPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSubscriptionFilter(args, optionsOrCb, cb) {
        const command = new DeleteSubscriptionFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDestinations(args, optionsOrCb, cb) {
        const command = new DescribeDestinationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeExportTasks(args, optionsOrCb, cb) {
        const command = new DescribeExportTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLogGroups(args, optionsOrCb, cb) {
        const command = new DescribeLogGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLogStreams(args, optionsOrCb, cb) {
        const command = new DescribeLogStreamsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMetricFilters(args, optionsOrCb, cb) {
        const command = new DescribeMetricFiltersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeQueries(args, optionsOrCb, cb) {
        const command = new DescribeQueriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeQueryDefinitions(args, optionsOrCb, cb) {
        const command = new DescribeQueryDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeResourcePolicies(args, optionsOrCb, cb) {
        const command = new DescribeResourcePoliciesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSubscriptionFilters(args, optionsOrCb, cb) {
        const command = new DescribeSubscriptionFiltersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateKmsKey(args, optionsOrCb, cb) {
        const command = new DisassociateKmsKeyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    filterLogEvents(args, optionsOrCb, cb) {
        const command = new FilterLogEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDataProtectionPolicy(args, optionsOrCb, cb) {
        const command = new GetDataProtectionPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getLogEvents(args, optionsOrCb, cb) {
        const command = new GetLogEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getLogGroupFields(args, optionsOrCb, cb) {
        const command = new GetLogGroupFieldsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getLogRecord(args, optionsOrCb, cb) {
        const command = new GetLogRecordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getQueryResults(args, optionsOrCb, cb) {
        const command = new GetQueryResultsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsLogGroup(args, optionsOrCb, cb) {
        const command = new ListTagsLogGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putDataProtectionPolicy(args, optionsOrCb, cb) {
        const command = new PutDataProtectionPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putDestination(args, optionsOrCb, cb) {
        const command = new PutDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putDestinationPolicy(args, optionsOrCb, cb) {
        const command = new PutDestinationPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putLogEvents(args, optionsOrCb, cb) {
        const command = new PutLogEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putMetricFilter(args, optionsOrCb, cb) {
        const command = new PutMetricFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putQueryDefinition(args, optionsOrCb, cb) {
        const command = new PutQueryDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putResourcePolicy(args, optionsOrCb, cb) {
        const command = new PutResourcePolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putRetentionPolicy(args, optionsOrCb, cb) {
        const command = new PutRetentionPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putSubscriptionFilter(args, optionsOrCb, cb) {
        const command = new PutSubscriptionFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startQuery(args, optionsOrCb, cb) {
        const command = new StartQueryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopQuery(args, optionsOrCb, cb) {
        const command = new StopQueryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagLogGroup(args, optionsOrCb, cb) {
        const command = new TagLogGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    testMetricFilter(args, optionsOrCb, cb) {
        const command = new TestMetricFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagLogGroup(args, optionsOrCb, cb) {
        const command = new UntagLogGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/commands/index.js

















































;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/models/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/pagination/DescribeDestinationsPaginator.js



const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new DescribeDestinationsCommand(input), ...args);
};
const makePagedRequest = async (client, input, ...args) => {
    return await client.describeDestinations(input, ...args);
};
async function* paginateDescribeDestinations(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["limit"] = config.pageSize;
        if (config.client instanceof CloudWatchLogs) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CloudWatchLogsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/pagination/DescribeLogGroupsPaginator.js



const DescribeLogGroupsPaginator_makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new DescribeLogGroupsCommand(input), ...args);
};
const DescribeLogGroupsPaginator_makePagedRequest = async (client, input, ...args) => {
    return await client.describeLogGroups(input, ...args);
};
async function* paginateDescribeLogGroups(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["limit"] = config.pageSize;
        if (config.client instanceof CloudWatchLogs) {
            page = await DescribeLogGroupsPaginator_makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CloudWatchLogsClient) {
            page = await DescribeLogGroupsPaginator_makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/pagination/DescribeLogStreamsPaginator.js



const DescribeLogStreamsPaginator_makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new DescribeLogStreamsCommand(input), ...args);
};
const DescribeLogStreamsPaginator_makePagedRequest = async (client, input, ...args) => {
    return await client.describeLogStreams(input, ...args);
};
async function* paginateDescribeLogStreams(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["limit"] = config.pageSize;
        if (config.client instanceof CloudWatchLogs) {
            page = await DescribeLogStreamsPaginator_makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CloudWatchLogsClient) {
            page = await DescribeLogStreamsPaginator_makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/pagination/DescribeMetricFiltersPaginator.js



const DescribeMetricFiltersPaginator_makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new DescribeMetricFiltersCommand(input), ...args);
};
const DescribeMetricFiltersPaginator_makePagedRequest = async (client, input, ...args) => {
    return await client.describeMetricFilters(input, ...args);
};
async function* paginateDescribeMetricFilters(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["limit"] = config.pageSize;
        if (config.client instanceof CloudWatchLogs) {
            page = await DescribeMetricFiltersPaginator_makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CloudWatchLogsClient) {
            page = await DescribeMetricFiltersPaginator_makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/pagination/DescribeSubscriptionFiltersPaginator.js



const DescribeSubscriptionFiltersPaginator_makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new DescribeSubscriptionFiltersCommand(input), ...args);
};
const DescribeSubscriptionFiltersPaginator_makePagedRequest = async (client, input, ...args) => {
    return await client.describeSubscriptionFilters(input, ...args);
};
async function* paginateDescribeSubscriptionFilters(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["limit"] = config.pageSize;
        if (config.client instanceof CloudWatchLogs) {
            page = await DescribeSubscriptionFiltersPaginator_makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CloudWatchLogsClient) {
            page = await DescribeSubscriptionFiltersPaginator_makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/pagination/FilterLogEventsPaginator.js



const FilterLogEventsPaginator_makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new FilterLogEventsCommand(input), ...args);
};
const FilterLogEventsPaginator_makePagedRequest = async (client, input, ...args) => {
    return await client.filterLogEvents(input, ...args);
};
async function* paginateFilterLogEvents(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["limit"] = config.pageSize;
        if (config.client instanceof CloudWatchLogs) {
            page = await FilterLogEventsPaginator_makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CloudWatchLogsClient) {
            page = await FilterLogEventsPaginator_makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/pagination/GetLogEventsPaginator.js



const GetLogEventsPaginator_makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new GetLogEventsCommand(input), ...args);
};
const GetLogEventsPaginator_makePagedRequest = async (client, input, ...args) => {
    return await client.getLogEvents(input, ...args);
};
async function* paginateGetLogEvents(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["limit"] = config.pageSize;
        if (config.client instanceof CloudWatchLogs) {
            page = await GetLogEventsPaginator_makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CloudWatchLogsClient) {
            page = await GetLogEventsPaginator_makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextForwardToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/pagination/index.js









;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-cloudwatch-logs/dist-es/index.js








/***/ }),

/***/ 890:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ isCrtAvailable)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const isCrtAvailable = () => {
    try {
        if ( true && module.require && __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'aws-crt'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) {
            return ["md/crt-avail"];
        }
        return null;
    }
    catch (e) {
        return null;
    }
};


/***/ }),

/***/ 932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const validator = __webpack_require__(501);
const XMLParser = __webpack_require__(844);
const XMLBuilder = __webpack_require__(192);

module.exports = {
  XMLParser: XMLParser,
  XMLValidator: validator,
  XMLBuilder: XMLBuilder
}

/***/ }),

/***/ 849:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const nameChar = nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*'
const regexName = new RegExp('^' + nameRegexp + '$');

const getAllMatches = function(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
};

const isName = function(string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === 'undefined');
};

exports.isExist = function(v) {
  return typeof v !== 'undefined';
};

exports.isEmptyObject = function(obj) {
  return Object.keys(obj).length === 0;
};

/**
 * Copy all the properties of a into b.
 * @param {*} target
 * @param {*} a
 */
exports.merge = function(target, a, arrayMode) {
  if (a) {
    const keys = Object.keys(a); // will return an array of own properties
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      if (arrayMode === 'strict') {
        target[keys[i]] = [ a[keys[i]] ];
      } else {
        target[keys[i]] = a[keys[i]];
      }
    }
  }
};
/* exports.merge =function (b,a){
  return Object.assign(b,a);
} */

exports.getValue = function(v) {
  if (exports.isExist(v)) {
    return v;
  } else {
    return '';
  }
};

// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};

exports.isName = isName;
exports.getAllMatches = getAllMatches;
exports.nameRegexp = nameRegexp;


/***/ }),

/***/ 501:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const util = __webpack_require__(849);

const defaultOptions = {
  allowBooleanAttributes: false, //A tag can have attributes without any value
  unpairedTags: []
};

//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
exports.validate = function (xmlData, options) {
  options = Object.assign({}, defaultOptions, options);

  //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
  //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
  //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
  const tags = [];
  let tagFound = false;

  //indicates that the root tag has been closed (aka. depth 0 has been reached)
  let reachedRoot = false;

  if (xmlData[0] === '\ufeff') {
    // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
  }
  
  for (let i = 0; i < xmlData.length; i++) {

    if (xmlData[i] === '<' && xmlData[i+1] === '?') {
      i+=2;
      i = readPI(xmlData,i);
      if (i.err) return i;
    }else if (xmlData[i] === '<') {
      //starting of tag
      //read until you reach to '>' avoiding any '>' in attribute value
      let tagStartPos = i;
      i++;
      
      if (xmlData[i] === '!') {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === '/') {
          //closing tag
          closingTag = true;
          i++;
        }
        //read tagname
        let tagName = '';
        for (; i < xmlData.length &&
          xmlData[i] !== '>' &&
          xmlData[i] !== ' ' &&
          xmlData[i] !== '\t' &&
          xmlData[i] !== '\n' &&
          xmlData[i] !== '\r'; i++
        ) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        //console.log(tagName);

        if (tagName[tagName.length - 1] === '/') {
          //self closing tag without attributes
          tagName = tagName.substring(0, tagName.length - 1);
          //continue;
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '"+tagName+"' is an invalid name.";
          }
          return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
        }

        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject('InvalidAttr', "Attributes for '"+tagName+"' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;

        if (attrStr[attrStr.length - 1] === '/') {
          //self closing tag
          const attrStrStart = i - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
            //continue; //text may presents after self closing tag
          } else {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            const otg = tags.pop();
            if (tagName !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject('InvalidTag',
                "Expected closing tag '"+otg.tagName+"' (opened in line "+openPos.line+", col "+openPos.col+") instead of closing tag '"+tagName+"'.",
                getLineNumberForPosition(xmlData, tagStartPos));
            }

            //when there are no more tags, we reached the root level.
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }

          //if the root level has been reached before ...
          if (reachedRoot === true) {
            return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
          } else if(options.unpairedTags.indexOf(tagName) !== -1){
            //don't push into stack
          } else {
            tags.push({tagName, tagStartPos});
          }
          tagFound = true;
        }

        //skip tag text value
        //It may include comments and CDATA value
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            if (xmlData[i + 1] === '!') {
              //comment or CADATA
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i+1] === '?') {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else{
              break;
            }
          } else if (xmlData[i] === '&') {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          }else{
            if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
              return getErrorObject('InvalidXml', "Extra text at the end", getLineNumberForPosition(xmlData, i));
            }
          }
        } //end of reading tag text value
        if (xmlData[i] === '<') {
          i--;
        }
      }
    } else {
      if ( isWhiteSpace(xmlData[i])) {
        continue;
      }
      return getErrorObject('InvalidChar', "char '"+xmlData[i]+"' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }

  if (!tagFound) {
    return getErrorObject('InvalidXml', 'Start tag expected.', 1);
  }else if (tags.length == 1) {
      return getErrorObject('InvalidTag', "Unclosed tag '"+tags[0].tagName+"'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  }else if (tags.length > 0) {
      return getErrorObject('InvalidXml', "Invalid '"+
          JSON.stringify(tags.map(t => t.tagName), null, 4).replace(/\r?\n/g, '')+
          "' found.", {line: 1, col: 1});
  }

  return true;
};

function isWhiteSpace(char){
  return char === ' ' || char === '\t' || char === '\n'  || char === '\r';
}
/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */
function readPI(xmlData, i) {
  const start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == '?' || xmlData[i] == ' ') {
      //tagname
      const tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === 'xml') {
        return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
        //check if valid attribut string
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}

function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
    //comment
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  } else if (
    xmlData.length > i + 8 &&
    xmlData[i + 1] === 'D' &&
    xmlData[i + 2] === 'O' &&
    xmlData[i + 3] === 'C' &&
    xmlData[i + 4] === 'T' &&
    xmlData[i + 5] === 'Y' &&
    xmlData[i + 6] === 'P' &&
    xmlData[i + 7] === 'E'
  ) {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === '<') {
        angleBracketsCount++;
      } else if (xmlData[i] === '>') {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (
    xmlData.length > i + 9 &&
    xmlData[i + 1] === '[' &&
    xmlData[i + 2] === 'C' &&
    xmlData[i + 3] === 'D' &&
    xmlData[i + 4] === 'A' &&
    xmlData[i + 5] === 'T' &&
    xmlData[i + 6] === 'A' &&
    xmlData[i + 7] === '['
  ) {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  }

  return i;
}

const doubleQuote = '"';
const singleQuote = "'";

/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */
function readAttributeStr(xmlData, i) {
  let attrStr = '';
  let startChar = '';
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === '') {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
        //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
      } else {
        startChar = '';
      }
    } else if (xmlData[i] === '>') {
      if (startChar === '') {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== '') {
    return false;
  }

  return {
    value: attrStr,
    index: i,
    tagClosed: tagClosed
  };
}

/**
 * Select all the attributes whether valid or invalid.
 */
const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

function validateAttributeString(attrStr, options) {
  //console.log("start:"+attrStr+":end");

  //if(attrStr.trim().length === 0) return true; //empty string

  const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};

  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      //nospace before attribute name: a="sd"b="saf"
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' has no space in starting.", getPositionFromMatch(matches[i]))
    } else if (matches[i][3] !== undefined && matches[i][4] === undefined) {
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' is without value.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
      //independent attribute: ab
      return getErrorObject('InvalidAttr', "boolean attribute '"+matches[i][2]+"' is not allowed.", getPositionFromMatch(matches[i]));
    }
    /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is an invalid name.", getPositionFromMatch(matches[i]));
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      //check for duplicate attribute.
      attrNames[attrName] = 1;
    } else {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is repeated.", getPositionFromMatch(matches[i]));
    }
  }

  return true;
}

function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === 'x') {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ';')
      return i;
    if (!xmlData[i].match(re))
      break;
  }
  return -1;
}

function validateAmpersand(xmlData, i) {
  // https://www.w3.org/TR/xml/#dt-charref
  i++;
  if (xmlData[i] === ';')
    return -1;
  if (xmlData[i] === '#') {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20)
      continue;
    if (xmlData[i] === ';')
      break;
    return -1;
  }
  return i;
}

function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code: code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col,
    },
  };
}

function validateAttrName(attrName) {
  return util.isName(attrName);
}

// const startsWithXML = /^xml/i;

function validateTagName(tagname) {
  return util.isName(tagname) /* && !tagname.match(startsWithXML) */;
}

//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,

    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1
  };
}

//this function returns the position of the first character of match within attrStr
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}


/***/ }),

/***/ 192:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

//parse Empty Node as self closing node
const buildFromOrderedJs = __webpack_require__(592);

const defaultOptions = {
  attributeNamePrefix: '@_',
  attributesGroupName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  cdataPropName: false,
  format: false,
  indentBy: '  ',
  suppressEmptyNode: false,
  suppressUnpairedNode: true,
  suppressBooleanAttributes: true,
  tagValueProcessor: function(key, a) {
    return a;
  },
  attributeValueProcessor: function(attrName, a) {
    return a;
  },
  preserveOrder: false,
  commentPropName: false,
  unpairedTags: [],
  entities: [
    { regex: new RegExp("&", "g"), val: "&amp;" },//it must be on top
    { regex: new RegExp(">", "g"), val: "&gt;" },
    { regex: new RegExp("<", "g"), val: "&lt;" },
    { regex: new RegExp("\'", "g"), val: "&apos;" },
    { regex: new RegExp("\"", "g"), val: "&quot;" }
  ],
  processEntities: true,
  stopNodes: [],
  // transformTagName: false,
  // transformAttributeName: false,
};

function Builder(options) {
  this.options = Object.assign({}, defaultOptions, options);
  if (this.options.ignoreAttributes || this.options.attributesGroupName) {
    this.isAttribute = function(/*a*/) {
      return false;
    };
  } else {
    this.attrPrefixLen = this.options.attributeNamePrefix.length;
    this.isAttribute = isAttribute;
  }

  this.processTextOrObjNode = processTextOrObjNode

  if (this.options.format) {
    this.indentate = indentate;
    this.tagEndChar = '>\n';
    this.newLine = '\n';
  } else {
    this.indentate = function() {
      return '';
    };
    this.tagEndChar = '>';
    this.newLine = '';
  }
}

Builder.prototype.build = function(jObj) {
  if(this.options.preserveOrder){
    return buildFromOrderedJs(jObj, this.options);
  }else {
    if(Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1){
      jObj = {
        [this.options.arrayNodeName] : jObj
      }
    }
    return this.j2x(jObj, 0).val;
  }
};

Builder.prototype.j2x = function(jObj, level) {
  let attrStr = '';
  let val = '';
  for (let key in jObj) {
    if (typeof jObj[key] === 'undefined') {
      // supress undefined node
    } else if (jObj[key] === null) {
      if(key[0] === "?") val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
      else val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
      // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
    } else if (jObj[key] instanceof Date) {
      val += this.buildTextValNode(jObj[key], key, '', level);
    } else if (typeof jObj[key] !== 'object') {
      //premitive type
      const attr = this.isAttribute(key);
      if (attr) {
        attrStr += this.buildAttrPairStr(attr, '' + jObj[key]);
      }else {
        //tag value
        if (key === this.options.textNodeName) {
          let newval = this.options.tagValueProcessor(key, '' + jObj[key]);
          val += this.replaceEntitiesValue(newval);
        } else {
          val += this.buildTextValNode(jObj[key], key, '', level);
        }
      }
    } else if (Array.isArray(jObj[key])) {
      //repeated nodes
      const arrLen = jObj[key].length;
      for (let j = 0; j < arrLen; j++) {
        const item = jObj[key][j];
        if (typeof item === 'undefined') {
          // supress undefined node
        } else if (item === null) {
          if(key[0] === "?") val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
          else val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
          // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
        } else if (typeof item === 'object') {
          val += this.processTextOrObjNode(item, key, level)
        } else {
          val += this.buildTextValNode(item, key, '', level);
        }
      }
    } else {
      //nested node
      if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
        const Ks = Object.keys(jObj[key]);
        const L = Ks.length;
        for (let j = 0; j < L; j++) {
          attrStr += this.buildAttrPairStr(Ks[j], '' + jObj[key][Ks[j]]);
        }
      } else {
        val += this.processTextOrObjNode(jObj[key], key, level)
      }
    }
  }
  return {attrStr: attrStr, val: val};
};

Builder.prototype.buildAttrPairStr = function(attrName, val){
  val = this.options.attributeValueProcessor(attrName, '' + val);
  val = this.replaceEntitiesValue(val);
  if (this.options.suppressBooleanAttributes && val === "true") {
    return ' ' + attrName;
  } else return ' ' + attrName + '="' + val + '"';
}

function processTextOrObjNode (object, key, level) {
  const result = this.j2x(object, level + 1);
  if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) {
    return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
  } else {
    return this.buildObjectNode(result.val, key, result.attrStr, level);
  }
}

Builder.prototype.buildObjectNode = function(val, key, attrStr, level) {
  if(val === ""){
    if(key[0] === "?") return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar;
    else {
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }
  }else{

    let tagEndExp = '</' + key + this.tagEndChar;
    let piClosingChar = "";
    
    if(key[0] === "?") {
      piClosingChar = "?";
      tagEndExp = "";
    }
  
    if (attrStr && val.indexOf('<') === -1) {
      return ( this.indentate(level) + '<' +  key + attrStr + piClosingChar + '>' + val + tagEndExp );
    } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
      return this.indentate(level) + `<!--${val}-->` + this.newLine;
    }else {
      return (
        this.indentate(level) + '<' + key + attrStr + piClosingChar + this.tagEndChar +
        val +
        this.indentate(level) + tagEndExp    );
    }
  }
}

Builder.prototype.closeTag = function(key){
  let closeTag = "";
  if(this.options.unpairedTags.indexOf(key) !== -1){ //unpaired
    if(!this.options.suppressUnpairedNode) closeTag = "/"
  }else if(this.options.suppressEmptyNode){ //empty
    closeTag = "/";
  }else{
    closeTag = `></${key}`
  }
  return closeTag;
}

function buildEmptyObjNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildObjectNode(val, key, attrStr, level);
  } else {
    if(key[0] === "?") return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar;
    else {
      return  this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
      // return this.buildTagStr(level,key, attrStr);
    }
  }
}

Builder.prototype.buildTextValNode = function(val, key, attrStr, level) {
  if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
    return this.indentate(level) + `<![CDATA[${val}]]>` +  this.newLine;
  }else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
    return this.indentate(level) + `<!--${val}-->` +  this.newLine;
  }else if(key[0] === "?") {//PI tag
    return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar; 
  }else{
    let textValue = this.options.tagValueProcessor(key, val);
    textValue = this.replaceEntitiesValue(textValue);
  
    if( textValue === ''){
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }else{
      return this.indentate(level) + '<' + key + attrStr + '>' +
         textValue +
        '</' + key + this.tagEndChar;
    }
  }
}

Builder.prototype.replaceEntitiesValue = function(textValue){
  if(textValue && textValue.length > 0 && this.options.processEntities){
    for (let i=0; i<this.options.entities.length; i++) {
      const entity = this.options.entities[i];
      textValue = textValue.replace(entity.regex, entity.val);
    }
  }
  return textValue;
}

function indentate(level) {
  return this.options.indentBy.repeat(level);
}

function isAttribute(name /*, options*/) {
  if (name.startsWith(this.options.attributeNamePrefix)) {
    return name.substr(this.attrPrefixLen);
  } else {
    return false;
  }
}

module.exports = Builder;


/***/ }),

/***/ 592:
/***/ ((module) => {

const EOL = "\n";

/**
 * 
 * @param {array} jArray 
 * @param {any} options 
 * @returns 
 */
function toXml(jArray, options) {
    let indentation = "";
    if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
    }
    return arrToStr(jArray, options, "", indentation);
}

function arrToStr(arr, options, jPath, indentation) {
    let xmlStr = "";
    let isPreviousElementTag = false;

    for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName
        else newJPath = `${jPath}.${tagName}`;

        if (tagName === options.textNodeName) {
            let tagText = tagObj[tagName];
            if (!isStopNode(newJPath, options)) {
                tagText = options.tagValueProcessor(tagName, tagText);
                tagText = replaceEntitiesValue(tagText, options);
            }
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += tagText;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.cdataPropName) {
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.commentPropName) {
            xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
            isPreviousElementTag = true;
            continue;
        } else if (tagName[0] === "?") {
            const attStr = attr_to_str(tagObj[":@"], options);
            const tempInd = tagName === "?xml" ? "" : indentation;
            let piTextNodeName = tagObj[tagName][0][options.textNodeName];
            piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : ""; //remove extra spacing
            xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr}?>`;
            isPreviousElementTag = true;
            continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
            newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
            if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
            else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
            xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
            xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
            xmlStr += tagStart + ">";
            if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
                xmlStr += indentation + options.indentBy + tagValue + indentation;
            } else {
                xmlStr += tagValue;
            }
            xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
    }

    return xmlStr;
}

function propName(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key !== ":@") return key;
    }
}

function attr_to_str(attrMap, options) {
    let attrStr = "";
    if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
            let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
            attrVal = replaceEntitiesValue(attrVal, options);
            if (attrVal === true && options.suppressBooleanAttributes) {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
            } else {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
            }
        }
    }
    return attrStr;
}

function isStopNode(jPath, options) {
    jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
    let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
    for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
    }
    return false;
}

function replaceEntitiesValue(textValue, options) {
    if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i = 0; i < options.entities.length; i++) {
            const entity = options.entities[i];
            textValue = textValue.replace(entity.regex, entity.val);
        }
    }
    return textValue;
}
module.exports = toXml;


/***/ }),

/***/ 780:
/***/ ((module) => {

//TODO: handle comments
function readDocType(xmlData, i){
    
    const entities = {};
    if( xmlData[i + 3] === 'O' &&
         xmlData[i + 4] === 'C' &&
         xmlData[i + 5] === 'T' &&
         xmlData[i + 6] === 'Y' &&
         xmlData[i + 7] === 'P' &&
         xmlData[i + 8] === 'E')
    {    
        i = i+9;
        let angleBracketsCount = 1;
        let hasBody = false, entity = false, comment = false;
        let exp = "";
        for(;i<xmlData.length;i++){
            if (xmlData[i] === '<' && !comment) {
                if( hasBody && 
                     xmlData[i+1] === '!' &&
                     xmlData[i+2] === 'E' &&
                     xmlData[i+3] === 'N' &&
                     xmlData[i+4] === 'T' &&
                     xmlData[i+5] === 'I' &&
                     xmlData[i+6] === 'T' &&
                     xmlData[i+7] === 'Y'
                ){
                    i += 7;
                    entity = true;
                }else if( hasBody && 
                    xmlData[i+1] === '!' &&
                     xmlData[i+2] === 'E' &&
                     xmlData[i+3] === 'L' &&
                     xmlData[i+4] === 'E' &&
                     xmlData[i+5] === 'M' &&
                     xmlData[i+6] === 'E' &&
                     xmlData[i+7] === 'N' &&
                     xmlData[i+8] === 'T'
                ){
                    //Not supported
                    i += 8;
                }else if( hasBody && 
                    xmlData[i+1] === '!' &&
                    xmlData[i+2] === 'A' &&
                    xmlData[i+3] === 'T' &&
                    xmlData[i+4] === 'T' &&
                    xmlData[i+5] === 'L' &&
                    xmlData[i+6] === 'I' &&
                    xmlData[i+7] === 'S' &&
                    xmlData[i+8] === 'T'
                ){
                    //Not supported
                    i += 8;
                }else if( hasBody && 
                    xmlData[i+1] === '!' &&
                    xmlData[i+2] === 'N' &&
                    xmlData[i+3] === 'O' &&
                    xmlData[i+4] === 'T' &&
                    xmlData[i+5] === 'A' &&
                    xmlData[i+6] === 'T' &&
                    xmlData[i+7] === 'I' &&
                    xmlData[i+8] === 'O' &&
                    xmlData[i+9] === 'N'
                ){
                    //Not supported
                    i += 9;
                }else if( //comment
                    xmlData[i+1] === '!' &&
                    xmlData[i+2] === '-' &&
                    xmlData[i+3] === '-'
                ){
                    comment = true;
                }else{
                    throw new Error("Invalid DOCTYPE");
                }
                angleBracketsCount++;
                exp = "";
            } else if (xmlData[i] === '>') {
                if(comment){
                    if( xmlData[i - 1] === "-" && xmlData[i - 2] === "-"){
                        comment = false;
                        angleBracketsCount--;
                    }
                }else{
                    if(entity) {
                        parseEntityExp(exp, entities);
                        entity = false;
                    }
                    angleBracketsCount--;
                }
                if (angleBracketsCount === 0) {
                  break;
                }
            }else if( xmlData[i] === '['){
                hasBody = true;
            }else{
                exp += xmlData[i];
            }
        }
        if(angleBracketsCount !== 0){
            throw new Error(`Unclosed DOCTYPE`);
        }
    }else{
        throw new Error(`Invalid Tag instead of DOCTYPE`);
    }
    return {entities, i};
}

const entityRegex = RegExp("^\\s([a-zA-z0-0]+)[ \t](['\"])([^&]+)\\2");
function parseEntityExp(exp, entities){
    const match = entityRegex.exec(exp);
    if(match){
        entities[ match[1] ] = {
            regx : RegExp( `&${match[1]};`,"g"),
            val: match[3]
        };
    }
}
module.exports = readDocType;

/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, exports) => {


const defaultOptions = {
    preserveOrder: false,
    attributeNamePrefix: '@_',
    attributesGroupName: false,
    textNodeName: '#text',
    ignoreAttributes: true,
    removeNSPrefix: false, // remove NS from tag name or attribute name if true
    allowBooleanAttributes: false, //a tag can have attributes without any value
    //ignoreRootElement : false,
    parseTagValue: true,
    parseAttributeValue: false,
    trimValues: true, //Trim string values of tag and attributes
    cdataPropName: false,
    numberParseOptions: {
      hex: true,
      leadingZeros: true,
      eNotation: true
    },
    tagValueProcessor: function(tagName, val) {
      return val;
    },
    attributeValueProcessor: function(attrName, val) {
      return val;
    },
    stopNodes: [], //nested tags will not be parsed even for errors
    alwaysCreateTextNode: false,
    isArray: () => false,
    commentPropName: false,
    unpairedTags: [],
    processEntities: true,
    htmlEntities: false,
    ignoreDeclaration: false,
    ignorePiTags: false,
    transformTagName: false,
    transformAttributeName: false,
};
   
const buildOptions = function(options) {
    return Object.assign({}, defaultOptions, options);
};

exports.buildOptions = buildOptions;
exports.defaultOptions = defaultOptions;

/***/ }),

/***/ 78:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

///@ts-check

const util = __webpack_require__(849);
const xmlNode = __webpack_require__(311);
const readDocType = __webpack_require__(780);
const toNumber = __webpack_require__(153);

const regx =
  '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
  .replace(/NAME/g, util.nameRegexp);

//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");

class OrderedObjParser{
  constructor(options){
    this.options = options;
    this.currentNode = null;
    this.tagsNodeStack = [];
    this.docTypeEntities = {};
    this.lastEntities = {
      "apos" : { regex: /&(apos|#39|#x27);/g, val : "'"},
      "gt" : { regex: /&(gt|#62|#x3E);/g, val : ">"},
      "lt" : { regex: /&(lt|#60|#x3C);/g, val : "<"},
      "quot" : { regex: /&(quot|#34|#x22);/g, val : "\""},
    };
    this.ampEntity = { regex: /&(amp|#38|#x26);/g, val : "&"};
    this.htmlEntities = {
      "space": { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      "cent" : { regex: /&(cent|#162);/g, val: "¢" },
      "pound" : { regex: /&(pound|#163);/g, val: "£" },
      "yen" : { regex: /&(yen|#165);/g, val: "¥" },
      "euro" : { regex: /&(euro|#8364);/g, val: "€" },
      "copyright" : { regex: /&(copy|#169);/g, val: "©" },
      "reg" : { regex: /&(reg|#174);/g, val: "®" },
      "inr" : { regex: /&(inr|#8377);/g, val: "₹" },
    };
    this.addExternalEntities = addExternalEntities;
    this.parseXml = parseXml;
    this.parseTextData = parseTextData;
    this.resolveNameSpace = resolveNameSpace;
    this.buildAttributesMap = buildAttributesMap;
    this.isItStopNode = isItStopNode;
    this.replaceEntitiesValue = replaceEntitiesValue;
    this.readStopNodeData = readStopNodeData;
    this.saveTextToParentTag = saveTextToParentTag;
  }

}

function addExternalEntities(externalEntities){
  const entKeys = Object.keys(externalEntities);
  for (let i = 0; i < entKeys.length; i++) {
    const ent = entKeys[i];
    this.lastEntities[ent] = {
       regex: new RegExp("&"+ent+";","g"),
       val : externalEntities[ent]
    }
  }
}

/**
 * @param {string} val
 * @param {string} tagName
 * @param {string} jPath
 * @param {boolean} dontTrim
 * @param {boolean} hasAttributes
 * @param {boolean} isLeafNode
 * @param {boolean} escapeEntities
 */
function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  if (val !== undefined) {
    if (this.options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if(val.length > 0){
      if(!escapeEntities) val = this.replaceEntitiesValue(val);
      
      const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
      if(newval === null || newval === undefined){
        //don't parse
        return val;
      }else if(typeof newval !== typeof val || newval !== val){
        //overwrite
        return newval;
      }else if(this.options.trimValues){
        return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
      }else{
        const trimmedVal = val.trim();
        if(trimmedVal === val){
          return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
        }else{
          return val;
        }
      }
    }
  }
}

function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(':');
    const prefix = tagname.charAt(0) === '/' ? '/' : '';
    if (tags[0] === 'xmlns') {
      return '';
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}

//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])([\\s\\S]*?)\\3)?', 'gm');

function buildAttributesMap(attrStr, jPath) {
  if (!this.options.ignoreAttributes && typeof attrStr === 'string') {
    // attrStr = attrStr.replace(/\r?\n/g, ' ');
    //attrStr = attrStr || attrStr.trim();

    const matches = util.getAllMatches(attrStr, attrsRegx);
    const len = matches.length; //don't make it inline
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      let oldVal = matches[i][4];
      let aName = this.options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (this.options.transformAttributeName) {
          aName = this.options.transformAttributeName(aName);
        }
        if(aName === "__proto__") aName  = "#__proto__";
        if (oldVal !== undefined) {
          if (this.options.trimValues) {
            oldVal = oldVal.trim();
          }
          oldVal = this.replaceEntitiesValue(oldVal);
          const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
          if(newVal === null || newVal === undefined){
            //don't parse
            attrs[aName] = oldVal;
          }else if(typeof newVal !== typeof oldVal || newVal !== oldVal){
            //overwrite
            attrs[aName] = newVal;
          }else{
            //parse
            attrs[aName] = parseValue(
              oldVal,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          }
        } else if (this.options.allowBooleanAttributes) {
          attrs[aName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (this.options.attributesGroupName) {
      const attrCollection = {};
      attrCollection[this.options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}

const parseXml = function(xmlData) {
  xmlData = xmlData.replace(/\r\n?/g, "\n"); //TODO: remove this line
  const xmlObj = new xmlNode('!xml');
  let currentNode = xmlObj;
  let textData = "";
  let jPath = "";
  for(let i=0; i< xmlData.length; i++){//for each char in XML data
    const ch = xmlData[i];
    if(ch === '<'){
      // const nextIndex = i+1;
      // const _2ndChar = xmlData[nextIndex];
      if( xmlData[i+1] === '/') {//Closing Tag
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.")
        let tagName = xmlData.substring(i+2,closeIndex).trim();

        if(this.options.removeNSPrefix){
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1){
            tagName = tagName.substr(colonIndex+1);
          }
        }

        if(this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }

        if(currentNode){
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
        }

        jPath = jPath.substr(0, jPath.lastIndexOf("."));
        
        currentNode = this.tagsNodeStack.pop();//avoid recurssion, set the parent tag scope
        textData = "";
        i = closeIndex;
      } else if( xmlData[i+1] === '?') {

        let tagData = readTagExp(xmlData,i, false, "?>");
        if(!tagData) throw new Error("Pi Tag is not closed.");

        textData = this.saveTextToParentTag(textData, currentNode, jPath);
        if( (this.options.ignoreDeclaration && tagData.tagName === "?xml") || this.options.ignorePiTags){

        }else{
  
          const childNode = new xmlNode(tagData.tagName);
          childNode.add(this.options.textNodeName, "");
          
          if(tagData.tagName !== tagData.tagExp && tagData.attrExpPresent){
            childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath);
          }
          currentNode.addChild(childNode);

        }


        i = tagData.closeIndex + 1;
      } else if(xmlData.substr(i + 1, 3) === '!--') {
        const endIndex = findClosingIndex(xmlData, "-->", i+4, "Comment is not closed.")
        if(this.options.commentPropName){
          const comment = xmlData.substring(i + 4, endIndex - 2);

          textData = this.saveTextToParentTag(textData, currentNode, jPath);

          currentNode.add(this.options.commentPropName, [ { [this.options.textNodeName] : comment } ]);
        }
        i = endIndex;
      } else if( xmlData.substr(i + 1, 2) === '!D') {
        const result = readDocType(xmlData, i);
        this.docTypeEntities = result.entities;
        i = result.i;
      }else if(xmlData.substr(i + 1, 2) === '![') {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
        const tagExp = xmlData.substring(i + 9,closeIndex);

        textData = this.saveTextToParentTag(textData, currentNode, jPath);

        //cdata should be set even if it is 0 length string
        if(this.options.cdataPropName){
          // let val = this.parseTextData(tagExp, this.options.cdataPropName, jPath + "." + this.options.cdataPropName, true, false, true);
          // if(!val) val = "";
          currentNode.add(this.options.cdataPropName, [ { [this.options.textNodeName] : tagExp } ]);
        }else{
          let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
          if(val == undefined) val = "";
          currentNode.add(this.options.textNodeName, val);
        }
        
        i = closeIndex + 2;
      }else {//Opening tag
        let result = readTagExp(xmlData,i, this.options.removeNSPrefix);
        let tagName= result.tagName;
        let tagExp = result.tagExp;
        let attrExpPresent = result.attrExpPresent;
        let closeIndex = result.closeIndex;

        if (this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }
        
        //save text as child node
        if (currentNode && textData) {
          if(currentNode.tagname !== '!xml'){
            //when nested tag is found
            textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
          }
        }

        if(tagName !== xmlObj.tagname){
          jPath += jPath ? "." + tagName : tagName;
        }

        //check if last tag was unpaired tag
        const lastTag = currentNode;
        if(lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1 ){
          currentNode = this.tagsNodeStack.pop();
        }

        if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) { //TODO: namespace
          let tagContent = "";
          //self-closing tag
          if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){
            i = result.closeIndex;
          }
          //boolean tag
          else if(this.options.unpairedTags.indexOf(tagName) !== -1){
            i = result.closeIndex;
          }
          //normal tag
          else{
            //read until closing tag is found
            const result = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
            if(!result) throw new Error(`Unexpected end of ${tagName}`);
            i = result.i;
            tagContent = result.tagContent;
          }

          const childNode = new xmlNode(tagName);
          if(tagName !== tagExp && attrExpPresent){
            childNode[":@"] = this.buildAttributesMap(tagExp, jPath);
          }
          if(tagContent) {
            tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
          }
          
          jPath = jPath.substr(0, jPath.lastIndexOf("."));
          childNode.add(this.options.textNodeName, tagContent);
          
          currentNode.addChild(childNode);
        }else{
  //selfClosing tag
          if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){
            if(tagName[tagName.length - 1] === "/"){ //remove trailing '/'
              tagName = tagName.substr(0, tagName.length - 1);
              tagExp = tagName;
            }else{
              tagExp = tagExp.substr(0, tagExp.length - 1);
            }
            
            if(this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }

            const childNode = new xmlNode(tagName);
            if(tagName !== tagExp && attrExpPresent){
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath);
            }
            jPath = jPath.substr(0, jPath.lastIndexOf("."));
            currentNode.addChild(childNode);
          }
    //opening tag
          else{
            const childNode = new xmlNode( tagName);
            this.tagsNodeStack.push(currentNode);
            
            if(tagName !== tagExp && attrExpPresent){
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath);
            }
            currentNode.addChild(childNode);
            currentNode = childNode;
          }
          textData = "";
          i = closeIndex;
        }
      }
    }else{
      textData += xmlData[i];
    }
  }
  return xmlObj.child;
}

const replaceEntitiesValue = function(val){

  if(this.options.processEntities){
    for(let entityName in this.docTypeEntities){
      const entity = this.docTypeEntities[entityName];
      val = val.replace( entity.regx, entity.val);
    }
    for(let entityName in this.lastEntities){
      const entity = this.lastEntities[entityName];
      val = val.replace( entity.regex, entity.val);
    }
    if(this.options.htmlEntities){
      for(let entityName in this.htmlEntities){
        const entity = this.htmlEntities[entityName];
        val = val.replace( entity.regex, entity.val);
      }
    }
    val = val.replace( this.ampEntity.regex, this.ampEntity.val);
  }
  return val;
}
function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
  if (textData) { //store previously collected data as textNode
    if(isLeafNode === undefined) isLeafNode = Object.keys(currentNode.child).length === 0
    
    textData = this.parseTextData(textData,
      currentNode.tagname,
      jPath,
      false,
      currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
      isLeafNode);

    if (textData !== undefined && textData !== "")
      currentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}

//TODO: use jPath to simplify the logic
/**
 * 
 * @param {string[]} stopNodes 
 * @param {string} jPath
 * @param {string} currentTagName 
 */
function isItStopNode(stopNodes, jPath, currentTagName){
  const allNodesExp = "*." + currentTagName;
  for (const stopNodePath in stopNodes) {
    const stopNodeExp = stopNodes[stopNodePath];
    if( allNodesExp === stopNodeExp || jPath === stopNodeExp  ) return true;
  }
  return false;
}

/**
 * Returns the tag Expression and where it is ending handling single-dobule quotes situation
 * @param {string} xmlData 
 * @param {number} i starting index
 * @returns 
 */
function tagExpWithClosingIndex(xmlData, i, closingChar = ">"){
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < xmlData.length; index++) {
    let ch = xmlData[index];
    if (attrBoundary) {
        if (ch === attrBoundary) attrBoundary = "";//reset
    } else if (ch === '"' || ch === "'") {
        attrBoundary = ch;
    } else if (ch === closingChar[0]) {
      if(closingChar[1]){
        if(xmlData[index + 1] === closingChar[1]){
          return {
            data: tagExp,
            index: index
          }
        }
      }else{
        return {
          data: tagExp,
          index: index
        }
      }
    } else if (ch === '\t') {
      ch = " "
    }
    tagExp += ch;
  }
}

function findClosingIndex(xmlData, str, i, errMsg){
  const closingIndex = xmlData.indexOf(str, i);
  if(closingIndex === -1){
    throw new Error(errMsg)
  }else{
    return closingIndex + str.length - 1;
  }
}

function readTagExp(xmlData,i, removeNSPrefix, closingChar = ">"){
  const result = tagExpWithClosingIndex(xmlData, i+1, closingChar);
  if(!result) return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName = tagExp;
  let attrExpPresent = true;
  if(separatorIndex !== -1){//separate tag name and attributes expression
    tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, '');
    tagExp = tagExp.substr(separatorIndex + 1);
  }

  if(removeNSPrefix){
    const colonIndex = tagName.indexOf(":");
    if(colonIndex !== -1){
      tagName = tagName.substr(colonIndex+1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }

  return {
    tagName: tagName,
    tagExp: tagExp,
    closeIndex: closeIndex,
    attrExpPresent: attrExpPresent,
  }
}
/**
 * find paired tag for a stop node
 * @param {string} xmlData 
 * @param {string} tagName 
 * @param {number} i 
 */
function readStopNodeData(xmlData, tagName, i){
  const startIndex = i;
  // Starting at 1 since we already have an open tag
  let openTagCount = 1;

  for (; i < xmlData.length; i++) {
    if( xmlData[i] === "<"){ 
      if (xmlData[i+1] === "/") {//close tag
          const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
          let closeTagName = xmlData.substring(i+2,closeIndex).trim();
          if(closeTagName === tagName){
            openTagCount--;
            if (openTagCount === 0) {
              return {
                tagContent: xmlData.substring(startIndex, i),
                i : closeIndex
              }
            }
          }
          i=closeIndex;
        } else if(xmlData[i+1] === '?') { 
          const closeIndex = findClosingIndex(xmlData, "?>", i+1, "StopNode is not closed.")
          i=closeIndex;
        } else if(xmlData.substr(i + 1, 3) === '!--') { 
          const closeIndex = findClosingIndex(xmlData, "-->", i+3, "StopNode is not closed.")
          i=closeIndex;
        } else if(xmlData.substr(i + 1, 2) === '![') { 
          const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
          i=closeIndex;
        } else {
          const tagData = readTagExp(xmlData, i, '>')

          if (tagData) {
            const openTagName = tagData && tagData.tagName;
            if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length-1] !== "/") {
              openTagCount++;
            }
            i=tagData.closeIndex;
          }
        }
      }
  }//end for loop
}

function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === 'string') {
    //console.log(options)
    const newval = val.trim();
    if(newval === 'true' ) return true;
    else if(newval === 'false' ) return false;
    else return toNumber(val, options);
  } else {
    if (util.isExist(val)) {
      return val;
    } else {
      return '';
    }
  }
}


module.exports = OrderedObjParser;


/***/ }),

/***/ 844:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { buildOptions} = __webpack_require__(745);
const OrderedObjParser = __webpack_require__(78);
const { prettify} = __webpack_require__(997);
const validator = __webpack_require__(501);

class XMLParser{
    
    constructor(options){
        this.externalEntities = {};
        this.options = buildOptions(options);
        
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */
    parse(xmlData,validationOption){
        if(typeof xmlData === "string"){
        }else if( xmlData.toString){
            xmlData = xmlData.toString();
        }else{
            throw new Error("XML data is accepted in String or Bytes[] form.")
        }
        if( validationOption){
            if(validationOption === true) validationOption = {}; //validate with default options
            
            const result = validator.validate(xmlData, validationOption);
            if (result !== true) {
              throw Error( `${result.err.msg}:${result.err.line}:${result.err.col}` )
            }
          }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if(this.options.preserveOrder || orderedResult === undefined) return orderedResult;
        else return prettify(orderedResult, this.options);
    }

    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */
    addEntity(key, value){
        if(value.indexOf("&") !== -1){
            throw new Error("Entity value can't have '&'")
        }else if(key.indexOf("&") !== -1 || key.indexOf(";") !== -1){
            throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'")
        }else if(value === "&"){
            throw new Error("An entity with value '&' is not permitted");
        }else{
            this.externalEntities[key] = value;
        }
    }
}

module.exports = XMLParser;

/***/ }),

/***/ 997:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * 
 * @param {array} node 
 * @param {any} options 
 * @returns 
 */
function prettify(node, options){
  return compress( node, options);
}

/**
 * 
 * @param {array} arr 
 * @param {object} options 
 * @param {string} jPath 
 * @returns object
 */
function compress(arr, options, jPath){
  let text;
  const compressedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const property = propName(tagObj);
    let newJpath = "";
    if(jPath === undefined) newJpath = property;
    else newJpath = jPath + "." + property;

    if(property === options.textNodeName){
      if(text === undefined) text = tagObj[property];
      else text += "" + tagObj[property];
    }else if(property === undefined){
      continue;
    }else if(tagObj[property]){
      
      let val = compress(tagObj[property], options, newJpath);
      const isLeaf = isLeafTag(val, options);

      if(tagObj[":@"]){
        assignAttributes( val, tagObj[":@"], newJpath, options);
      }else if(Object.keys(val).length === 1 && val[options.textNodeName] !== undefined && !options.alwaysCreateTextNode){
        val = val[options.textNodeName];
      }else if(Object.keys(val).length === 0){
        if(options.alwaysCreateTextNode) val[options.textNodeName] = "";
        else val = "";
      }

      if(compressedObj[property] !== undefined && compressedObj.hasOwnProperty(property)) {
        if(!Array.isArray(compressedObj[property])) {
            compressedObj[property] = [ compressedObj[property] ];
        }
        compressedObj[property].push(val);
      }else{
        //TODO: if a node is not an array, then check if it should be an array
        //also determine if it is a leaf node
        if (options.isArray(property, newJpath, isLeaf )) {
          compressedObj[property] = [val];
        }else{
          compressedObj[property] = val;
        }
      }
    }
    
  }
  // if(text && text.length > 0) compressedObj[options.textNodeName] = text;
  if(typeof text === "string"){
    if(text.length > 0) compressedObj[options.textNodeName] = text;
  }else if(text !== undefined) compressedObj[options.textNodeName] = text;
  return compressedObj;
}

function propName(obj){
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if(key !== ":@") return key;
  }
}

function assignAttributes(obj, attrMap, jpath, options){
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      const atrrName = keys[i];
      if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
        obj[atrrName] = [ attrMap[atrrName] ];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}

function isLeafTag(obj, options){
  const propCount = Object.keys(obj).length;
  if( propCount === 0 || (propCount === 1 && obj[options.textNodeName]) ) return true;
  return false;
}
exports.prettify = prettify;


/***/ }),

/***/ 311:
/***/ ((module) => {

"use strict";


class XmlNode{
  constructor(tagname) {
    this.tagname = tagname;
    this.child = []; //nested tags, text, cdata, comments in order
    this[":@"] = {}; //attributes map
  }
  add(key,val){
    // this.child.push( {name : key, val: val, isCdata: isCdata });
    if(key === "__proto__") key = "#__proto__";
    this.child.push( {[key]: val });
  }
  addChild(node) {
    if(node.tagname === "__proto__") node.tagname = "#__proto__";
    if(node[":@"] && Object.keys(node[":@"]).length > 0){
      this.child.push( { [node.tagname]: node.child, [":@"]: node[":@"] });
    }else{
      this.child.push( { [node.tagname]: node.child });
    }
  };
};


module.exports = XmlNode;

/***/ }),

/***/ 153:
/***/ ((module) => {

const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
const numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
// const octRegex = /0x[a-z0-9]+/;
// const binRegex = /0x[a-z0-9]+/;


//polyfill
if (!Number.parseInt && window.parseInt) {
    Number.parseInt = window.parseInt;
}
if (!Number.parseFloat && window.parseFloat) {
    Number.parseFloat = window.parseFloat;
}

  
const consider = {
    hex :  true,
    leadingZeros: true,
    decimalPoint: "\.",
    eNotation: true
    //skipLike: /regex/
};

function toNumber(str, options = {}){
    // const options = Object.assign({}, consider);
    // if(opt.leadingZeros === false){
    //     options.leadingZeros = false;
    // }else if(opt.hex === false){
    //     options.hex = false;
    // }

    options = Object.assign({}, consider, options );
    if(!str || typeof str !== "string" ) return str;
    
    let trimmedStr  = str.trim();
    // if(trimmedStr === "0.0") return 0;
    // else if(trimmedStr === "+0.0") return 0;
    // else if(trimmedStr === "-0.0") return -0;

    if(options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;
    else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
    // } else if (options.parseOct && octRegex.test(str)) {
    //     return Number.parseInt(val, 8);
    // }else if (options.parseBin && binRegex.test(str)) {
    //     return Number.parseInt(val, 2);
    }else{
        //separate negative sign, leading zeros, and rest number
        const match = numRegex.exec(trimmedStr);
        if(match){
            const sign = match[1];
            const leadingZeros = match[2];
            let numTrimmedByZeros = trimZeros(match[3]); //complete num without leading zeros
            //trim ending zeros for floating number
            
            const eNotation = match[4] || match[6];
            if(!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str; //-0123
            else if(!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str; //0123
            else{//no leading zeros or leading zeros are allowed
                const num = Number(trimmedStr);
                const numStr = "" + num;
                if(numStr.search(/[eE]/) !== -1){ //given number is long and parsed to eNotation
                    if(options.eNotation) return num;
                    else return str;
                }else if(eNotation){ //given number has enotation
                    if(options.eNotation) return num;
                    else return str;
                }else if(trimmedStr.indexOf(".") !== -1){ //floating number
                    // const decimalPart = match[5].substr(1);
                    // const intPart = trimmedStr.substr(0,trimmedStr.indexOf("."));

                    
                    // const p = numStr.indexOf(".");
                    // const givenIntPart = numStr.substr(0,p);
                    // const givenDecPart = numStr.substr(p+1);
                    if(numStr === "0" && (numTrimmedByZeros === "") ) return num; //0.0
                    else if(numStr === numTrimmedByZeros) return num; //0.456. 0.79000
                    else if( sign && numStr === "-"+numTrimmedByZeros) return num;
                    else return str;
                }
                
                if(leadingZeros){
                    // if(numTrimmedByZeros === numStr){
                    //     if(options.leadingZeros) return num;
                    //     else return str;
                    // }else return str;
                    if(numTrimmedByZeros === numStr) return num;
                    else if(sign+numTrimmedByZeros === numStr) return num;
                    else return str;
                }

                if(trimmedStr === numStr) return num;
                else if(trimmedStr === sign+numStr) return num;
                // else{
                //     //number with +/- sign
                //     trimmedStr.test(/[-+][0-9]);

                // }
                return str;
            }
            // else if(!eNotation && trimmedStr && trimmedStr !== Number(trimmedStr) ) return str;
            
        }else{ //non-numeric string
            return str;
        }
    }
}

/**
 * 
 * @param {string} numStr without leading zeros
 * @returns 
 */
function trimZeros(numStr){
    if(numStr && numStr.indexOf(".") !== -1){//float
        numStr = numStr.replace(/0+$/, ""); //remove ending zeros
        if(numStr === ".")  numStr = "0";
        else if(numStr[0] === ".")  numStr = "0"+numStr;
        else if(numStr[numStr.length-1] === ".")  numStr = numStr.substr(0,numStr.length-1);
        return numStr;
    }
    return numStr;
}
module.exports = toNumber


/***/ }),

/***/ 113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const zlib_1 = __webpack_require__(796);
const crypto_1 = __webpack_require__(113);
const client_cloudwatch_logs_1 = __webpack_require__(316);
exports.handler = async (event) => {
    const placeholder = process.env.PLACEHOLDER || "*****";
    const destinationLogGroupName = process.env.DESTINATION_LOG_GROUP;
    const sourceLogGroupName = process.env.SOURCE_LOG_GROUP;
    const sensitiveWords = process.env.SENSITIVE_WORDS;
    const payload = await Buffer.from(event.awslogs.data, 'base64');
    function getLogRecord() {
        return new Promise(function (resolve, reject) {
            (0, zlib_1.gunzip)(payload, function (e, result) {
                if (e) {
                    reject(e);
                }
                else {
                    const parsedLog = JSON.parse(result.toString());
                    const logEvents = parsedLog.logEvents;
                    const logStream = parsedLog.logStream;
                    resolve({ logEvents, logStream });
                }
            });
        });
    }
    const logRecord = await getLogRecord();
    const { logEvents, logStream } = logRecord;
    function maskEvent() {
        return new Promise(function (resolve, reject) {
            const logs = logEvents.map(logEvent => {
                const logMessage = logEvent.message;
                let pattern = new RegExp(`(${sensitiveWords})\s*:\s*"([^"]*)`, 'g');
                const maskedMessage = logMessage?.replace(pattern, (match, key, value) => {
                    return `"${key}":"${placeholder}"`;
                });
                logEvent.message = maskedMessage;
                const newlogEvent = {
                    message: maskedMessage,
                    timestamp: Date.now()
                };
                return newlogEvent;
            });
            resolve(logs);
        });
    }
    const maskedLogEvents = await maskEvent();
    const logStreamName = (0, crypto_1.randomBytes)(20).toString('hex');
    const client = new client_cloudwatch_logs_1.CloudWatchLogsClient({ region: "eu-west-1" });
    try {
        const createLogStreamInput = {
            logGroupName: destinationLogGroupName,
            logStreamName
        };
        const command = new client_cloudwatch_logs_1.CreateLogStreamCommand(createLogStreamInput);
        const response = await client.send(command);
        if (response.$metadata.httpStatusCode > 299) {
            throw new Error(`Error creating log stream status code ${response.$metadata.httpStatusCode}`);
        }
    }
    catch (e) {
        throw e;
    }
    try {
        const putLogEventsParams = {
            logGroupName: destinationLogGroupName,
            logStreamName,
            logEvents: maskedLogEvents
        };
        const command = new client_cloudwatch_logs_1.PutLogEventsCommand(putLogEventsParams);
        const response = await client.send(command);
        if (response.$metadata.httpStatusCode > 299) {
            throw new Error(`Error put log status code ${response.$metadata.httpStatusCode}`);
        }
    }
    catch (e) {
        throw e;
    }
    try {
        const deleteLogStreamInput = {
            logGroupName: sourceLogGroupName,
            logStreamName: logStream
        };
        const command = new client_cloudwatch_logs_1.DeleteLogStreamCommand(deleteLogStreamInput);
        const response = await client.send(command);
        if (response.$metadata.httpStatusCode > 299) {
            throw new Error(`Error creating log stream status code ${response.$metadata.httpStatusCode}`);
        }
    }
    catch (e) {
        throw e;
    }
    return "success";
};

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;