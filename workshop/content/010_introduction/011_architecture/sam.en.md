+++
title = "AWS Serverless Application Model (SAM)"
weight = 110
description = "Let's create a sample Serverless application that will be given to our developers using AWS Serverless Application Model(SAM) applying some of the best practices regarding serverless microservices workspace structure, logging, monitoring, and creating the basic unit tests for each one of these microservices."
+++


The [AWS Serverless Application Model (SAM)](https://aws.amazon.com/serverless/sam/) is an open-source framework for building serverless applications. It provides shorthand syntax to express functions, APIs, databases, and event source mappings. With just a few lines per resource, you can define the application you want and model it using YAML. During deployment, SAM transforms and expands the SAM syntax into AWS CloudFormation syntax, enabling you to build serverless applications faster.

To get started with building SAM-based applications, use the [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-reference.html#serverless-sam-cli) and the [SAM Template Specification](https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md). SAM CLI provides a Lambda-like execution environment that lets you locally build, test, and debug applications defined by SAM templates. You can also use the SAM CLI to deploy your applications to AWS.
SAM and SAM CLI are open-sourced under the Apache 2.0 license. You can contribute new features and enhancements to [SAM on GitHub](https://github.com/awslabs/serverless-application-model) or [SAM CLI on GitHub](https://github.com/awslabs/aws-sam-cli).
