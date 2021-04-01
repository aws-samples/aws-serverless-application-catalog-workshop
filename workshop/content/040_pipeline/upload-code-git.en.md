+++
title = "Upload Code to Repository"
weight = 44
+++

Now that we have our CodeCommit permissions and credentials properly configured, let's upload our sample application code to our repository.

Switch back to your **Cloud9** environoment and open a terminal tab.

```sh
cd ~/environment/
git clone https://git-codecommit.${AWS_REGION}.amazonaws.com/v1/repos/serverless-repo
rsync -a --exclude='.git' aws-serverless-application-catalog-workshop/code/sam/nodejs/ serverless-repo/
cd serverless-repo/
```

Upload the code to the AWS CodeCommit Repository.

```sh
git add .
git commit -m "Initial Commit"
git push
```

![Git Push](/images/git-push.png?width=40pc&classes=shadow)

{{% notice info %}}
If you are prompted to enter an username and password, enter the ones in the credentials we generated in the previous step.
{{% /notice %}}
