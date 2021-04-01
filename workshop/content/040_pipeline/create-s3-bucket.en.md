+++
title = "Create a S3 Bucket for Build Artifacts"
weight = 45
+++

AWS CodeBuild and AWS CodePipeline require a S3 bucket to store artifacts that are generated during build stages.

```sh
aws s3 mb s3://aws-serverless-catalog-wksp-build-<FIRSTNAME-LASTNAME>
```
