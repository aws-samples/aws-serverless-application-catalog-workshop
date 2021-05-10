+++
title = "Testing the APIs"
weight = 36
+++

#### Export the stack output variables
To invoke our API's, we first need to fetch the `ApiUrl` output variable that our CloudFormation stack gives us. So let us iterate through our stack and export all output variables as environment variables:

```sh
export ApiUrl=$(aws cloudformation describe-stacks --stack-name sam-app --output json | jq '.Stacks[].Outputs[] | select(.OutputKey=="ApiUrl") | .OutputValue' | sed -e 's/^"//'  -e 's/"$//')
echo "export ApiUrl="$ApiUrl
```

#### Test the `Put Item` operation

```sh
curl -X POST \
  $ApiUrl/items/ \
  -d '{
        "id":"1",  
        "name": "Sample test item"
  }'

curl -X POST \
  $ApiUrl/items/ \
  -d '{
        "id":"2",  
        "name": "Second test item"
  }'
```

#### Test the `Get All Items` operation

```sh
curl -X GET $ApiUrl/items/ | jq
```

#### Test the `Get Item by Id` operation

```sh
curl -X GET $ApiUrl/items/1 | jq
```
