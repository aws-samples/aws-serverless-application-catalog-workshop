// Import all functions from get-all-items.js
const lambda = require('../../../src/items/get-all-items/index.js')
// Import dynamodb from aws-sdk
const dynamodb = require('aws-sdk/clients/dynamodb')

// This includes all tests for getAllItemsHandler()
describe('Test getAllItemsHandler', () => { // eslint-disable-line
  let scanSpy

  // Test one-time setup and teardown, see more in https://jestjs.io/docs/en/setup-teardown
  beforeAll(() => { // eslint-disable-line
    // Mock dynamodb get and put methods
    // https://jestjs.io/docs/en/jest-object.html#jestspyonobject-methodname
    scanSpy = jest.spyOn(dynamodb.DocumentClient.prototype, 'scan') // eslint-disable-line
  })

  // Clean up mocks
  afterAll(() => { // eslint-disable-line
    scanSpy.mockRestore()
  })

  it('should return ids', async () => { // eslint-disable-line
    const items = [{ id: 'id1' }, { id: 'id2' }]

    // Return the specified value whenever the spied scan function is called
    scanSpy.mockReturnValue({
      promise: () => Promise.resolve({ Items: items })
    })

    const event = {
      httpMethod: 'GET'
    }

    // Invoke helloFromLambdaHandler()
    const result = await lambda.getAllItemsHandler(event)

    const expectedResult = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(items)
    }

    // Compare the result with the expected result
    expect(result).toEqual(expectedResult) // eslint-disable-line
  })
})
