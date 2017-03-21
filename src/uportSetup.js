import { Connect, SimpleSigner } from 'uport-connect'

const uport = new Connect('uPort TestApp', {
    clientId: '0xdb67cea13ef97b104dc80a72def566da03f5e999',
    signer: SimpleSigner('c7e02bbeca85822d515d37f8ad049a62b8d853d366268c624c20846f1c33605c')
  }
);
const web3 = uport.getWeb3()
export { web3, uport }
