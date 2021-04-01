+++
title = "Packaging the Node.js Application"
weight = 52
+++

Since we want every new serverless project to be  as a boilerplate, The first thing we have to do is to package our application into a ZIP file and upload it to a S3 bucket which used as source for every new AWS CodeCommit repository created.

#### Package the application

```sh
cd ~/environment/aws-serverless-application-catalog-workshop/code/sam/nodejs
rm -rf node_modules/
zip -r ~/environment/sample.zip *
```

#### Create an unique S3 bucket

Create a S3 bucket choosing an unique name for your bucket. e.g: serverless-wksp-sample-**firstname-lastname**

```sh
aws s3 mb s3://serverless-wksp-sample-<FIRSTNAME-LASTNAME>
```

Go to your [S3 console](https://s3.console.aws.amazon.com/s3/home) and confirm your bucket has been created.

![Bucket](/images/s3creation.png)

#### Upload the ZIP file to S3

```sh
cd ~/environment
aws s3 cp sample.zip s3://<your-bucket>/sam/nodejs/sample.zip
```

Go to your [S3 console](https://s3.console.aws.amazon.com/s3/home) and confirm your upload has been completed successfully.

![Bucket](/images/s3upload.png)

{{% notice tip %}}
We are using the `/sam/nodejs/` directory structure to allow our teams to grow this strategy in the future to other frameworks and approaches besides `AWS SAM` (e.g. Kubernetes microservices) and other languages besides `Node.js`.
{{% /notice %}}
