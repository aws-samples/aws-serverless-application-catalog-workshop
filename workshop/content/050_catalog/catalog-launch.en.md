+++
title = "Launching a Serverless Project"
weight = 56
+++

- Click **Product list**
- Click the **three dots** in front of your Product, click Launch.
![launch-1](/images/launch-1.png)

- Name it **demo-service** and click Next.
- Type **serverless-wksp-sample-`<FIRSTNAME-LASTNAME>`/sam/nodejs** for **CodeS3Bucket** and click Next.
- Type **demo-service** for **ProjectName**.
- Type **demo-service-repo** for **RepositoryName**.
- Type **Repository for our demo service** for **RepositoryDescription**.
- Accept all defaults by clicking Next
- Review and click **Launch**

Click on the AWS CloudFormation Stack URL to keep up with the product provisioning.
![launch-2](/images/launch-2.png)

Once the stack status shows as **CREATE_COMPLETE** inspect the [AWS CodePipeline](https://console.aws.amazon.com/codesuite/codepipeline/pipelines/demo-service/view) create for your project.
![pipeline-1](/images/pipeline-1.png)

{{% notice info %}}
The pipeline has been triggered since we uploaded the content of the `sample.zip` to our repository and it interprets the upload action as an **initial commit**. It might take around 10-15 minutes for the whole pipeline to complete.
{{% /notice %}}

![pipeline-2](/images/pipeline-2.png?width=20pc)

One way to check your resources were properly created for each environment is to check on the AWS Lambda console.

![pipeline-2](/images/lambda-1.png)
