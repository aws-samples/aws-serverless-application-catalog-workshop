+++
title = "Testing the APIs"
weight = 57
+++

Go back to your Cloud9 environment and open a terminal tab.

### Development Environment Testing

#### Export the Dev stack output variables

To invoke our API's, we first need to fetch the `ApiUrl` output variable that our CloudFormation Development stack gives us. So let us iterate through our stack and export all output variables as environment variables.

```sh
export ApiUrl=$(aws cloudformation describe-stacks --stack-name demo-service-Dev --output json | jq '.Stacks[].Outputs[] | select(.OutputKey=="ApiUrl") | .OutputValue' | sed -e 's/^"//'  -e 's/"$//')
echo "export ApiUrl="$ApiUrl
```

#### Test the `Put Item` operation

```sh
curl -X POST \
  $ApiUrl/items/ \
  -d '{
        "id":"1",  
        "name": "Development Test Item"
  }'
```

#### Test the `Get Item by Id` operation

```sh
curl -X GET $ApiUrl/items/1 | jq
```

Your expected output should be:

```json
{"id":"1","name":"Development Test Item"}
```

### Production Environment Testing

#### Export the Prod stack output variables

Let's override our environment variables with the values from the Production stack.

```sh
export ApiUrl=$(aws cloudformation describe-stacks --stack-name demo-service-Prod --output json | jq '.Stacks[].Outputs[] | select(.OutputKey=="ApiUrl") | .OutputValue' | sed -e 's/^"//'  -e 's/"$//')
echo "export ApiUrl="$ApiUrl
```

#### Test the `Get Item by Id` operation

Let's first make sure that we are calling a different endpoint return different data.

```sh
curl -X GET $ApiUrl/items/1 | jq
```

Your expected output should be:

```json
{}
```

#### Test the `Put Item` operation

```sh
curl -X POST \
  $ApiUrl/items/ \
  -d '{
        "id":"1",  
        "name": "Production Test Item"
  }'
```

#### Test the `Get Item by Id` operation again

```sh
curl -X GET $ApiUrl/items/1 | jq
```

Your expected output should be:

```json
{"id":"1","name":"Production Test Item"}
```
