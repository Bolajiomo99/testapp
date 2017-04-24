import { Connect } from 'uport-connect'

let uport;
let web3;

function changeUportNetwork(network = 'ropsten'){
  console.log("Changing Uport Network to:"+network);
  uport = new Connect('uPort TestApp', {
      clientId: '0xf1cac4c44ec5385a20f65f60ca5481b89e3d4a0e',
      network: network
    }
  );
  web3 = uport.getWeb3()
}

changeUportNetwork();

export { web3, uport, changeUportNetwork }
