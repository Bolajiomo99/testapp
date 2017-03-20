// import Web3 from 'web3'
// import { Uport } from 'uport-lib'
import { Connect, SimpleSigner } from 'uport-connect'

// let web3 = new Web3()
// let options = {
//   ipfsProvider: {
//     host: 'ipfs.infura.io',
//     port: '5001',
//     protocol: 'https',
//     root: ''
//   }
// }
const testAppUport = new Connect('uPort Test App - 1', {
  clientId: '0xdb67cea13ef97b104dc80a72def566da03f5e999',
  signer: SimpleSigner('c7e02bbeca85822d515d37f8ad049a62b8d853d366268c624c20846f1c33605c')
})

const web3 = testAppUport.getWeb3()

// let uport = new Uport('TestApp', options)
// let uportProvider = uport.getUportProvider('https://ropsten.infura.io:8545')
// web3.setProvider(uportProvider)

export { testAppUport, web3 }
