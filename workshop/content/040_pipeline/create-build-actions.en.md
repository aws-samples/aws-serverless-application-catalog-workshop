+++
title = "Configure Additional Build Actions"
weight = 47
+++

Open your [recently created pipeline](https://console.aws.amazon.com/codesuite/codepipeline/pipelines/serverless-pipeline/view).

- Click **Edit**

![Edit-Pipeline-1](/images/pipeline-edit-1.png?width=50pc&classes=shadow)

- In the **Build** section click **Edit stage**
- Click **Add action group** below the current Build action to configure a new AWS CodeBuild action.

![Edit-Pipeline-2](/images/pipeline-edit-2.png?width=50pc&classes=shadow)

- Name it **UnitTest**
- Select **AWS CodeBuild** as **Action provider**
- Select your current region
- Select **SourceArtifact** as **Input artifacts**
- Click **Create project** to configure your CodeBuild project. A pop-up will open.

![Edit-Pipeline-3](/images/pipeline-edit-3.png?width=50pc&classes=shadow)

- Name it **serverless-test-project**
- In the **Environment** section select **Managed image** as **Environment image**
- Select **Amazon Linux 2** as **Operating system**
- Select **Standard** as **Runtime(s)**
- Select **aws/codebuild/amazonlinux2-x86-64-standard:2.0** as **Image**
- For **Service role**, choose **Existing service role**
- Browse for **service-catalog-wksp-build-role** under **Role ARN**
- Uncheck the **Allow AWS CodeBuild to modify this service role so it can be used with this build project** box
- In the **Buildspec** section, type **testspec.yml** in the ***Buildspec name - optional*** textbox.
- Leave all other settings as default, click **Continue to CodePipeline**
- Click **Done**

![Edit-Pipeline-4](/images/pipeline-edit-4.png?width=50pc&classes=shadow)

- Click **Done** again.

![Edit-Pipeline-5](/images/pipeline-edit-5.png?width=50pc&classes=shadow)

**Do not save your work just yet**. We still need to configure the deployment stages of our pipeline in the next step.
