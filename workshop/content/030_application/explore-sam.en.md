+++
title = "Exploring the Hello World app"
weight = 32
+++

#### Hello World App Structure

To better understand what has been created and how these pieces glue together, let's analyze whats each file of our sample app doing:

```markdown
    sample-app
    ├── events                          <-- Folder for mock event payloads
    │   ├── event.json                  <-- Mock payload for local/unit testing
    ├── hello-world                     <-- source code of our function
    │   ├── tests                       <-- Parent folder for all tests
    │   │   ├── unit                    <-- Parent folder for all unit tests
    │   │   │   ├── test-handler.js     <-- Unit test for the lambda functions
    │   ├── app.js                      <-- Lambda function itself
    │   ├── package.json                <-- Node.js dependencies
    ├── template.yaml                   <-- SAM definition file
```

{{% notice warning %}}
As we start thinking on how complex and big a microservice project can get, doesn't this structure seem a lit bit too messy to manage in a real sized project? Why don't we come up with our own best practices for our organization during this workshop?
{{% /notice %}}

#### SAM Template

When we are developing Serverless applications using AWS SAM, the `template.yaml` file becomes the heart of our application and specifies all resources that are to be provisioned.

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31 
Description: >
  sample-app

  Sample SAM Template for sample-app
  
# More info about Globals: https://github.com/awslabs/serverless-application-model/blob/master/docs/globals.rst
Globals:
  Function:
    Timeout: 3

Resources:
  HelloWorldFunction:
    Type: AWS::Serverless::Function # More info about Function Resource: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessfunction
    Properties:
      CodeUri: hello-world/
      Handler: app.lambdaHandler
      Runtime: nodejs12.x
      Events:
        HelloWorld:
          Type: Api # More info about API Event Source: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#api
          Properties:
            Path: /hello
            Method: get

Outputs:
  # ServerlessRestApi is an implicit API created out of Events key under Serverless::Function
  # Find out more about other implicit resources you can reference within SAM
  # https://github.com/awslabs/serverless-application-model/blob/master/docs/internals/generated_resources.rst#api
  HelloWorldApi:
    Description: "API Gateway endpoint URL for Prod stage for Hello World function"
    Value: !Sub "https://${ServerlessRestApi}.execute-api.${AWS::Region}.amazonaws.com/Prod/hello/"
  HelloWorldFunction:
    Description: "Hello World Lambda Function ARN"
    Value: !GetAtt HelloWorldFunction.Arn
  HelloWorldFunctionIamRole:
    Description: "Implicit IAM Role created for Hello World function"
    Value: !GetAtt HelloWorldFunctionRole.Arn

```

{{% notice note %}}
As you can see, its syntax is extremely similar to AWS CloudFormation, except for the `Globals` sections which allows you to define global settings for AWS Lambda, Amazon API Gateway API's and Amazon DynamoDB Tables, and the `AWS::Serverless` resources you can now create. To get started with SAM in your template, you have to add the `Transform: AWS::Serverless-2016-10-31` clause in the beginning of your template.
{{% /notice %}}
