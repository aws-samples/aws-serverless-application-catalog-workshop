+++
title = "AWS Service Catalog"
weight = 51
+++

[AWS Service Catalog](https://aws.amazon.com/servicecatalog/) allows organizations to create and manage catalogs of IT services that are approved for use on AWS. These IT services can include everything from virtual machine images, servers, software, and databases to complete multi-tier application architectures. AWS Service Catalog allows you to centrally manage commonly deployed IT services, and helps you achieve consistent governance and meet your compliance requirements, while enabling users to quickly deploy only the approved IT services they need.

As core concepts, AWS Service Catalog works with Products and Portifolios.

### Produtcs

A product is an IT service that you want to make available for deployment on AWS. A product can comprise one or more AWS resources, such as EC2 instances, storage volumes, databases, monitoring configurations, and networking components, or packaged AWS Marketplace products. A product can be a single compute instance running AWS Linux, a fully configured multi-tier web application running in its own environment, or anything in between. You create your products by importing [AWS CloudFormation](https://aws.amazon.com/cloudformation/) templates. These templates define the AWS resources required for the product, the relationships between resources, and the parameters that the end user can plug in when they launch the product to configure security groups, create key pairs, and perform other customizations.

### Portifolios

A portfolio is a collection of products, together with configuration information. Portfolios help manage product configuration, and who can use specific products and how they can use them. With AWS Service Catalog, you can create a customized portfolio for each type of user in your organization and selectively grant access to the appropriate portfolio. When you add a new version of a product to a portfolio, that version is automatically available to all current users of that portfolio. You also can share your portfolios with other AWS accounts and allow the administrator of those accounts to distribute your portfolios with additional constraints. For example, for developers, you can define a portfolio of development environments, such as a LAMP stack with approved versions that users can use for software development and testing. You could also define a portfolio for the marketing organizations that includes campaign websites and market analysis applications.
