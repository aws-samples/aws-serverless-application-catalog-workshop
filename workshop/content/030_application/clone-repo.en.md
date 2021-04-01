+++
title = "Cloning the Service Repo"
weight = 34
+++

```sh
cd ~/environment
git clone https://github.com/aws-samples/aws-serverless-application-catalog-workshop.git
cd aws-serverless-application-catalog-workshop/code/sam/nodejs
```

This repo brings us the following proposed structure for our backend application:

```markdown
    nodejs
    ├── __tests__                           <-- Parent folder for all tests
    │   ├── unit                            <-- Parent folder for all unit tests 
    │   │   ├── items                       <-- Parent folder for tests of a logical context
    │   │   │   └── put-item.test.js        <-- put-item service unit tests 
    │   │   │   └── get-all-items.test.js   <-- get-all-items service unit tests 
    │   │   │
    ├── src                                 <-- source code of our microservices
    │   ├── items                           <-- Parent folder for a logical context 
    │   │   ├── get-all-items               <-- Parent folder for a single lambda function
    │   │   │   ├── event.json              <-- Sample payload for local/unit testing
    │   │   │   └── index.js                <-- get-all-items Lambda function 
    │   │   │
    │   │   ├── put-item                    <-- Parent folder a function within the same context
    │   │   │   ├── event.json              <-- Sample payload for local/unit testing
    │   │   │   └── index.js                <-- put-item Lambda function 
    │   │   │
    │   │   ├── another-item-service        <-- Parent folder a function within the same context
    │   ├── another-business-context        <-- Different logical context (e.g. users)
    │   ├── lib                             <-- commons lib 
    ├── template.yaml                       <-- SAM definition file
    └── package.json                        <-- Node.js dependencies
    └── buildspec.yml                       <-- AWS CodeBuild script for building our application
    └── testspec.yml                        <-- AWS CodeBuild script for executing unit tests
    └── style-checker.yml                   <-- AWS CodeBuild script for static code analysis
```

{{% notice tip %}}
Spare a couple of minutes to understand which resources are being provisioned in the `template.yaml` file.
{{% /notice %}}
