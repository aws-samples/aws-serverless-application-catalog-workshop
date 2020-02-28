// Import all functions from get-by-id.js
const lambda = require('../../../src/items/get-by-id/index.js')
// Import dynamodb from aws-sdk
const dynamodb = require('aws-sdk/clients/dynamodb')

// This includes all tests for getByIdHandler()
describe('Test getByIdHandler', () => { // eslint-disable-line
  let getSpy

  // Test one-time setup and teardown, see more in https://jestjs.io/docs/en/setup-teardown
  beforeAll(() => { // eslint-disable-line
    // Mock dynamodb get and put methods
    // https://jestjs.io/docs/en/jest-object.html#jestspyonobject-methodname
    getSpy = jest.spyOn(dynamodb.DocumentClient.prototype, 'get') // eslint-disable-line
  })

  // Clean up mocks
  afterAll(() => { // eslint-disable-line
    getSpy.mockRestore()
  })

  // This test invokes getByIdHandler() and compare the result
  it('should get item by id', async () => { // eslint-disable-line
    const item = { id: 'id1' }

    // Return the specified value whenever the spied get function is called
    getSpy.mockReturnValue({
      promise: () => Promise.resolve({ Item: item })
    })

    const event = {
      httpMethod: 'GET',
      pathParameters: {
        id: 'id1'
      }
    }

    // Invoke getByIdHandler()
    const result = await lambda.getByIdHandler(event)

    const expectedResult = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(item)
    }

    // Compare the result with the expected result
    expect(result).toEqual(expectedResult) // eslint-disable-line
  })
})
