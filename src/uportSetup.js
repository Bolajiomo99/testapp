import { Connect } from 'uport-connect'

const uport = new Connect('uPort TestApp', {
    clientId: '0xf1cac4c44ec5385a20f65f60ca5481b89e3d4a0e'
  }
);
const web3 = uport.getWeb3()
export { web3, uport }
