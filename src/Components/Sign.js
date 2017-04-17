import React, { Component } from 'react';
import { Link } from 'react-router'
import { web3 } from '../uportSetup.js'
import contract from 'truffle-contract';

class Sign extends Component {
  constructor (props) {
    super(props)
    let self = this
    let StatusContract = contract(require('../contracts/Status.json'));
    StatusContract.setProvider(web3.currentProvider)

    let address = web3.eth.defaultAccount
    console.log("web3.eth.defaultAccount:"+address);

    let statusContractInstance;
    StatusContract.deployed().then( (instance) => {
      statusContractInstance = instance;
      console.log("statusContractInstance.address:"+statusContractInstance.address);
      self.setState({statusContractInstance: statusContractInstance})
      self.getStatus(address);
    });

    this.setStatus = this.setStatus.bind(this)
    this.state = {
      tx: null,
      error: null,
      statusText: null
    }
  }

  getStatus(address){
    let self = this
    this.setState({statusText: '(reading status from the blockchain)'});
    this.state.statusContractInstance.getStatus.call(address)
    .then( (error, statusText) => {
        if (error) {
          console.log(error);
          throw error;
        }
        console.log("statusText from the blockchain:"+statusText)
        if(statusText === undefined){
          statusText="(no status on the blockchain)"
        }
        self.setState({statusText: statusText})
    })

  }

  setStatus (e) {
    e.preventDefault();
    let self = this
    let statusText = this.refs.statusInput.value
    console.log('set status:' + statusText)
    this.setState({statusText: '(updating to '+statusText + ')'})

    this.state.statusContractInstance.updateStatus(statusText, {from: web3.eth.defaultAccount}).then( (txReceipt) => {
      console.log(txReceipt)
      self.setState({tx: txReceipt.tx})
      self.getStatus(web3.eth.defaultAccount);
    })
  }

  render () {
    return (
      <div className='container centered' style={{maxWidth: '400px'}}>
        <Link to='/'>
          <img className='main-logo' src='images/uPort-logo.svg' alt='uPort'
            title='uPort Logo'
            style={{maxWidth: '90px', margin: '20px auto 40px', display: 'block'}} />
        </Link>
        <div id='status'>
          Your current Status on the Blockchain:
          <h3 id='currentStatus'>{this.state.statusText}</h3>
          <br />
          <form>
            <ol className='fields'>
              <li>
                <label>New Status:</label>
                <input id='statusInput' ref='statusInput' type='text' placeholder='Status' defaultValue="I'm Happy" />
              </li>
              <li>
                <button className='btn' onClick={this.setStatus}>Set new status!</button>
              </li>
            </ol>
          </form>
        </div>

        {this.state.tx
        ? <div id='success'>
          <h3>Success! You have set your status</h3>
          <p><strong>Tx:</strong><span id='tx' style={{display: 'inline-block', marginLeft: '10px'}} />{this.state.tx}</p>
        </div>
        : null }

        {this.state.error
        ? <div id='errorDiv'>
          <h3>Error! You have NOT set your status.</h3>
          <p><strong>Error:</strong><span id='error' style={{display: 'inline-block', marginLeft: '10px'}} />{this.state.error}</p>
        </div>
        : null }
      </div>
    )
  }
}

export default Sign;
