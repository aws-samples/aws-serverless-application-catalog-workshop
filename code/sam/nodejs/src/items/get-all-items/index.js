// Create clients and set shared const values outside of the handler.

// Import the X-Ray SDK to capture AWS services calls
const AWSXRay = require('aws-xray-sdk-core')

// Create a DocumentClient that represents the query to add an item
const AWS = AWSXRay.captureAWS(require('aws-sdk'))
const docClient = new AWS.DynamoDB.DocumentClient()

// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE

/**
 * A simple example includes a HTTP get method to get all items from a DynamoDB table.
 */
exports.getAllItemsHandler = async (event) => {
  if (event.httpMethod !== 'GET') {
    throw new Error(`getAllItems only accept GET method, you tried: ${event.httpMethod}`)
  }
  // All log statements are written to CloudWatch
  console.info('received:', event)

  let response
  try {
    // get all items from the table (only first 1MB data, you can use `LastEvaluatedKey` to get the rest of data)
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#scan-property
    // https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html
    var params = {
      TableName: tableName
    }
    const data = await docClient.scan(params).promise()
    const items = data.Items

    response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(items)
    }
  } catch (err) {
    response = {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(err)
    }
  }
  // All log statements are written to CloudWatch
  console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`)
  return response
}
