+++
title = "Configure IAM Roles & Permissions"
weight = 42
+++

#### Create Service Rules

First of all, we need to create [AWS Identity and Access Management](https://aws.amazon.com/iam/) (IAM) Service Roles for AWS CodeBuild, AWS CodePipeline and AWS CloudFormation granting access provision and operate the resources we need to execute our CI/CD pipeline.

Switch back to your **Cloud9** environoment and open a terminal tab.

Create role for AWS CodeBuild:

```sh
cd ~/environment

TRUST="{ \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Principal\": { \"Service\": \"codebuild.amazonaws.com\" }, \"Action\": \"sts:AssumeRole\" } ] }"

echo '{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": "*", "Resource": "*" } ] }' > /tmp/iam-role-policy

aws iam create-role --role-name serverless-catalog-wksp-build-role --assume-role-policy-document "$TRUST" --output text --query 'Role.Arn'

aws iam put-role-policy --role-name serverless-catalog-wksp-build-role --policy-name build-permissions --policy-document file:///tmp/iam-role-policy
```

Create role for AWS CloudFormation:

```sh
cd ~/environment

TRUST="{ \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Principal\": { \"Service\": \"cloudformation.amazonaws.com\" }, \"Action\": \"sts:AssumeRole\" } ] }"

aws iam create-role --role-name serverless-catalog-wksp-cf-role --assume-role-policy-document "$TRUST" --output text --query 'Role.Arn'

aws iam put-role-policy --role-name serverless-catalog-wksp-cf-role --policy-name cf-permissions --policy-document file:///tmp/iam-role-policy
```

Create role for AWS CodePipeline:

```sh
cd ~/environment

TRUST="{ \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Principal\": { \"Service\": \"codepipeline.amazonaws.com\" }, \"Action\": \"sts:AssumeRole\" } ] }"

aws iam create-role --role-name serverless-catalog-wksp-pipeline-role --assume-role-policy-document "$TRUST" --output text --query 'Role.Arn'

aws iam put-role-policy --role-name serverless-catalog-wksp-pipeline-role --policy-name pipeline-permissions --policy-document file:///tmp/iam-role-policy
```

#### Add CodeCommit permission to your user

{{% notice warning %}}
If you are at an AWS hosted event (such as re:Invent, Roadshows, Immersion Day, etc), go to [Generate CodeCommit Credentials](../git-credentials/).
{{% /notice %}}

Now we need to grant access to our user to operate AWS CodeCommit. This requires us to update the IAM permissions assigned to your current user.

Go to your [IAM Console](https://console.aws.amazon.com/iam/home).

- Click **Users**.
- Click on your current user.
- Click on **Add permissions**.

![Git IAM 1](/images/git-iam-1.png?width=50pc&classes=shadow)

- Select **Attach existing policies directly**.
- Choose **AWSCodeCommitFullAccess**.
- Click on **Next: Review**.
- Click on **Add permissions**.

![Git IAM 2](/images/git-iam-2.png?width=50pc&classes=shadow)
