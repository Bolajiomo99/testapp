# testapp

uPort Testapp

This is uPort Testapp

## Install

Install dependencies
```
npm install
```

Deploy contracts to your localnode (on localhost:8545)

```
npm run truffle migrate
```

Deploy contracts to your ropsten (using infura)

```
npm run truffle migrate --network ropsten
```
You need to have a `seed` file with a 12 word mnemonic


## Deploy to S3
(you need S3 permissions for this)

`npm run deploy` (to testapp.uport.me)

`npm run deploy-test` (to testapp.uport.space)
