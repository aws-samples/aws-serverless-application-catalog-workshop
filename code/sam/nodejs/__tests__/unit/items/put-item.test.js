// Import all functions from put-item.js
const lambda = require('../../../src/items/put-item/index.js')
// Import dynamodb from aws-sdk
const dynamodb = require('aws-sdk/clients/dynamodb')

// This includes all tests for putItemHandler()
describe('Test putItemHandler', function () { // eslint-disable-line
  let putSpy

  // Test one-time setup and teardown, see more in https://jestjs.io/docs/en/setup-teardown
  beforeAll(() => { // eslint-disable-line
    // Mock dynamodb get and put methods
    // https://jestjs.io/docs/en/jest-object.html#jestspyonobject-methodname
    putSpy = jest.spyOn(dynamodb.DocumentClient.prototype, 'put') // eslint-disable-line
  })

  // Clean up mocks
  afterAll(() => { // eslint-disable-line
    putSpy.mockRestore()
  })

  // This test invokes putItemHandler() and compare the result
  it('should add id to the table', async () => { // eslint-disable-line
    const returnedItem = { id: 'id1', name: 'name1' }

    // Return the specified value whenever the spied put function is called
    putSpy.mockReturnValue({
      promise: () => Promise.resolve(returnedItem)
    })

    const event = {
      httpMethod: 'POST',
      body: '{"id": "id1","name": "name1"}'
    }

    // Invoke putItemHandler()
    const result = await lambda.putItemHandler(event)
    const expectedResult = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(returnedItem)
    }

    // Compare the result with the expected result
    expect(result).toEqual(expectedResult) // eslint-disable-line
  })
})
