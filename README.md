# testapp

uPort Testapp

This is uPort Testapp

## Install

Install dependencies
```
npm install
```

Deploy to your localnode (on localhost:8545)

```
npm run truffle migrate
```

## Deploy to S3
```
npm run build
s3-deploy './build/**' --cwd './build/' --region us-west-2 --bucket testapp.uport.me
```
