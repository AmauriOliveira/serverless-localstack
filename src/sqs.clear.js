const AWS = require('aws-sdk');
const { promisify } = require('util');

AWS.config.update({ region: 'us-east-1' });
const sqs = new AWS.SQS({ endpoint: '' });
sqs.receiveMessage = promisify(sqs.receiveMessage);
const QueueUrl = 'http://localhost:4566/000000000000/file-queue';

const receiveParams = {
  QueueUrl,
  MaxNumberOfMessages: 1,
};

class Handler {
  async receive() {
    try {
      const queueData = await sqs.receiveMessage(receiveParams);
      if (queueData && queueData.Messages && queueData.Messages.length > 0) {
        const [firstMessage] = queueData.Messages;
        console.log('RECEIVED: ', firstMessage);
        const deleteParams = {
          QueueUrl,
          ReceiptHandle: firstMessage.ReceiptHandle,
        };
        sqs.deleteMessage(deleteParams);
      } else {
        console.log('Queue Vazia');
      }
    } catch (e) {
      console.log('ERROR: ', e);
    }
  }

  async main(event) {
    try {
      await this.receive();
      return {
        statusCode: 200,
        body: 'OK',
      };
    } catch (error) {
      console.log('***error', error.stack);
      return {
        statusCode: 500,
        body: 'Internal Error',
      };
    }
  }
}
const handler = new Handler();
module.exports = handler.main.bind(handler);
