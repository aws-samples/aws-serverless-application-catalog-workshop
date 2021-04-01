+++
title = "Serverless application structure"
weight = 120
+++

When creating our sample application, we are going to deploy an application containing the following resources:

![Sample Architecture](/images/architecture.png?width=40pc)

Even though there's no single source of thruth, a good rule of thumb to follow when structuring your serverless applications using SAM can be adopting the following structure:

```markdown
    content
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

{{% notice note %}}
This sample application will be built using `Node.js` and this structure tree might differ for other languages.
{{% /notice %}}
