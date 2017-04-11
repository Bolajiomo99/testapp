import { Connect } from 'uport-connect'

const uport = new Connect('uPort TestApp', {
    clientId: '0xdb67cea13ef97b104dc80a72def566da03f5e999'
  }
);
const web3 = uport.getWeb3()
export { web3, uport }
