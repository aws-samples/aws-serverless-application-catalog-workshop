+++
title = "Deploying the Backend Service"
weight = 35
+++

After we deploy this application, the following resources will be provisioned in our AWS account:

![Sample Architecture](/images/architecture.png?width=40pc)

### Deploying your application

```sh
cd ~/environment/aws-serverless-application-catalog-workshop/code/sam/nodejs/
npm install
sam deploy -g
```

Enter the following settings when prompted:

```sh
        Setting default arguments for 'sam deploy'
        =========================================
        Stack Name [sam-app]: 
        AWS Region [us-east-1]: 
        Parameter ProjectName []: backend-demo
        Parameter Stage []: Dev
        #Shows you resources changes to be deployed and require a 'Y' to initiate deploy
        Confirm changes before deploy [y/N]: Y
        #SAM needs permission to be able to create roles to connect to the resources in your template
        Allow SAM CLI IAM role creation [Y/n]: Y
        Save arguments to samconfig.toml [Y/n]: n
```

Wait for a few minutes and then enter the following when prompted again:


```sh
Changeset created successfully. arn:aws:cloudformation:us-east-1:1234567890:changeSet/samcli-deploy135353414/3d893bb8-2ecf-4491-9022-0644f5534da


Previewing CloudFormation changeset before deployment
======================================================
Deploy this changeset? [y/N]: Y
```

Follow [this deep link to CloudFormation](https://console.aws.amazon.com/cloudformation/home#/stacks?filteringText=sam-&filteringStatus=active&viewNested=true&hideStacks=false&stackId=) to keep up with the stack deployment.

![Sample Architecture](/images/samstacks.png)

Wait until both stacks complete its deployment and take note of your API URL endpoint for later testing.

![Sample Architecture](/images/samstackcomplete.png)
