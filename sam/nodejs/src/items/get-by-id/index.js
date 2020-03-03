// Create clients and set shared const values outside of the handler.

// Import the X-Ray SDK to capture AWS services calls
const AWSXRay = require('aws-xray-sdk-core')

// Create a DocumentClient that represents the query to add an item
const AWS = AWSXRay.captureAWS(require('aws-sdk'))
const docClient = new AWS.DynamoDB.DocumentClient()

// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE

/**
 * A simple example includes a HTTP get method to get one item by id from a DynamoDB table.
 */
exports.getByIdHandler = async (event) => {
  if (event.httpMethod !== 'GET') {
    throw new Error(`getMethod only accept GET method, you tried: ${event.httpMethod}`)
  }
  // All log statements are written to CloudWatch
  console.info('received:', event)

  let response
  try {
    // Get id from pathParameters from APIGateway because of `/{id}` at template.yml
    const id = event.pathParameters.id

    // Get the item from the table
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#get-property
    var params = {
      TableName: tableName,
      Key: { id: id }
    }

    const data = await docClient.get(params).promise()
    const item = data.Item

    response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(item)
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
