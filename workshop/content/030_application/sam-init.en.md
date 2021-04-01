+++
title = "Creating a serverless application"
weight = 31
+++

{{% notice note %}}
This sample application will be built using `Node.js` and this structure tree might differ for other languages.
{{% /notice %}}

#### Creating an application using `sam init`

By using AWS SAM CLI, you can quickly create serverless applications using the command [sam init](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-init.html) with different levels of customization and boilerplates to get started.

Go to your Terminal session in your Cloud9 environment and create your first application.

```sh
sam init -n sample-app -r nodejs12.x
```

When prompted, select the following settings:

```sh
Which template source would you like to use?
        1 - AWS Quick Start Templates
        2 - Custom Template Location
Choice: 1


Allow SAM CLI to download AWS-provided quick start templates from Github [Y/n]: n


-----------------------
Generating application:
-----------------------
Name: sample-app
Runtime: nodejs12.x
Dependency Manager: npm
Application Template: hello-world
Output Directory: .

Next steps can be found in the README file at ./sample-app/README.md
```

If all steps executed properly, you should have a workspace with the following structure.
![c9disableiam](/images/sam-init-app.png)

{{% notice tip %}}
This creates our sample application, but doesn't deploy any resources to AWS. Let us first understand what's happening and tweak it out a little bit before deploying anything to our AWS account.
{{% /notice %}}
