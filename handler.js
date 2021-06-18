'use strict';

const AWS = require('aws-sdk');
const host = process.env.LOCALSTACK_HOST || 'localhost';
const s3Port = process.env.S3_PORT || '4566';

const s3config = {
  apiVersion: '2006-03-01',
  s3ForcePathStyle: true,
  endpoint: new AWS.Endpoint(`http://${host}:${s3Port}`),
};
const S3 = new AWS.S3(s3config);
module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0!',

        input: event,
      },
      null,
      2
    ),
  };
};
