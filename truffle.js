var TestRPC = require("ethereumjs-testrpc");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    in_memory: {
      provider: TestRPC.provider(),
      network_id: "*",
    },
    ropsten:{
      host: "ropsten.infura.io",
      port: 8545,
      network_id: "3"
    }
  }
};
