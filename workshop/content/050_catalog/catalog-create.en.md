+++
title = "Creating a Service Catalog Product"
weight = 54
+++


{{% notice info %}}
Make sure you have the URL of your template file with you. e.g. https://serverless-wksp-sample-**`<FIRSTNAME-LASTNAME>`**.s3.amazonaws.com/service-catalog/template.yaml
{{% /notice %}}

#### Create a Service Catalog Portfolio

Click [this deep link](https://console.aws.amazon.com/catalog/home) to access your AWS Service Catalog console

- Under **Administration** select **Portifolios**
- Click **Create portifolio**
- Name it **Projects with CI/CD Pipeline** and type the **Owner** name, click Create.
- Click on your newly created portifolio.
![portifolio-1](/images/portifolio-1.png)

#### Upload a new Product

- Click **Upload new product**
- Name it **Serverless Project** and type the **Owner** name.
- On **Description** type **Creates a new Serverless project based on AWS SAM with a multi-environment CI/CD Pipeline**.
- Under **Version Details** check the box **Use a CloudFormation template** as source for your template.
- Paste the S3 URL of your `template.yaml` on **Use a CloudFormation template** text box, click Review.
- Click **Create product**
![portifolio-2](/images/portifolio-2.png)

{{% notice tip %}}
Try refreshing the page if the added Product doesn't show up in your screen.
{{% /notice %}}
