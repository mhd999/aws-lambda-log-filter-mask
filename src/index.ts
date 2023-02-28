import { gunzip } from 'zlib';
import { randomBytes } from 'crypto';
import { CloudWatchLogsClient, PutLogEventsCommand, CreateLogStreamCommand, DeleteLogStreamCommand, PutLogEventsCommandInput, OutputLogEvent, InputLogEvent } from '@aws-sdk/client-cloudwatch-logs';
import { MetadataBearer } from "@aws-sdk/types";

exports.handler = async (event) => {
  const placeholder = process.env.PLAEHOLDER || "*****";
  const destinationLogGroupName = process.env.DESTINATION_LOG_GROUP;
  const sourceLogGroupName = process.env.SOURCE_LOG_GROUP;
  // TODO: get sensitive phrases from env var

  const payload = await Buffer.from(event.awslogs.data, 'base64');

  function getLogRecord(): Promise<{ logEvents: OutputLogEvent[], logStream: string }> {
    return new Promise(function (resolve, reject) {
      gunzip(payload, function (e, result) {
        if (e) {
          reject(e);
        } else {
          const parsedLog = JSON.parse(result.toString());
          const logEvents: OutputLogEvent[] = parsedLog.logEvents;
          const logStream = parsedLog.logStream;
          resolve({ logEvents, logStream });
        }
      });
    });
  }

  // TODO: Filter log events based on the specified pattern and delete log stream from the original log group if it contain senetive data
  // const filterPattern = "password";
  // const filteredLogEvents = logEvents.filter(logEvent => {
  //   const logMessage = logEvent.message;
  //   return logMessage.includes(filterPattern);
  // });


  const logRecord = await getLogRecord();
  const { logEvents, logStream } = logRecord;
  // Mask the senstive fields
  function maskEvent(): Promise<InputLogEvent[]> {
    return new Promise(function (resolve, reject) {
      const logs = logEvents.map(logEvent => {
        const logMessage = logEvent.message;
        const pattern = /"(password|new_password)"\s*:\s*"([^"]*)"/g;

        const maskedMessage = logMessage?.replace(pattern, (match, key, value) => {
          return `"${key}":"${placeholder}"`;
        });

        logEvent.message = maskedMessage;
        const newlogEvent = {
          message: maskedMessage,
          timestamp: Date.now()
        }
        return newlogEvent;
      });
      resolve(logs);
    });
  }

  const maskedLogEvents: InputLogEvent[] = await maskEvent();
  const logStreamName = randomBytes(20).toString('hex');

  // create log stream
  const client = new CloudWatchLogsClient({ region: "eu-west-1" }); // TODO: region from env var
  try {

    const createLogStreamInput = {
      logGroupName: destinationLogGroupName,
      logStreamName
    };
    const command = new CreateLogStreamCommand(createLogStreamInput);
    const response: MetadataBearer = await client.send(command);

    if (response.$metadata.httpStatusCode > 299) {
      throw new Error(`Error creating log stream status code ${response.$metadata.httpStatusCode}`);
    }
  } catch (e) {
    throw e;
  }

  // post the masked log events in the new stream to the new log group
  try {
    const putLogEventsParams: PutLogEventsCommandInput = {
      logGroupName: destinationLogGroupName,
      logStreamName,
      logEvents: maskedLogEvents
    };

    const command = new PutLogEventsCommand(putLogEventsParams);
    const response: MetadataBearer = await client.send(command);
    if (response.$metadata.httpStatusCode > 299) {
      throw new Error(`Error put log status code ${response.$metadata.httpStatusCode}`);
    }
  } catch (e) {
    throw e;
  }


  // delete the log stream from the source destenation log group
  try {
    const deleteLogStreamInput = {
      logGroupName: sourceLogGroupName,
      logStreamName: logStream
    };
    const command = new DeleteLogStreamCommand(deleteLogStreamInput);
    const response: MetadataBearer = await client.send(command);

    if (response.$metadata.httpStatusCode > 299) {
      throw new Error(`Error creating log stream status code ${response.$metadata.httpStatusCode}`);
    }
  } catch (e) {
    throw e;
  }
  return "success"
};
