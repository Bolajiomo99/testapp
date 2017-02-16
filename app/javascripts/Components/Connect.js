/* eslint-env jquery, web3 */
import React from 'react'
import { Link } from 'react-router'
import { uport } from '../uportSetup.js'

export default class Connect extends React.Component {
  constructor (props) {
    super(props)
    this.connect = this.connect.bind(this)
    this.state = {
      address: null,
      error: null,
      credentials: null
    }
  }

  connect () {
    let self = this
    uport.requestCredentials().then(credentials => {
      self.setState({address: credentials.address,
                     credentials: credentials})
                     console.log(credentials)
    },
    (error) => {
      self.setState({error})
    })
  }

  render () {
    console.log(this.state)
    const credentials = this.state.credentials || {}

    let attributesTable = credentials ? (
      <table style={{color: '#fff'}}>
        <tbody>
          <tr>
            <td style={{textAlign: 'right'}}><strong>uPort Id:</strong></td>
            <td>{ this.state.address }</td>
          </tr>
          <tr>
            <td style={{textAlign: 'right'}}><strong>Name:</strong></td>
            <td>{credentials.name}</td>
          </tr>
          <tr id='attributeDescriptionRow'>
            <td style={{textAlign: 'right'}}><strong>I am:</strong></td>
            <td>{credentials.description}</td>
          </tr>
        </tbody>
      </table>
    ) : null

    return (
      <div className='container centered' style={{maxWidth: '480px'}}>
        <Link to='/'>
          <img className='main-logo' src='images/uPort-logo.svg' alt='uPort'
            title='uPort Logo'
            style={{maxWidth: '90px', margin: '20px auto 40px', display: 'block'}} />
        </Link>
        { !this.state.address
        ? <div id='connect'>
          <button className='btn bigger' onClick={this.connect} type='submit'>Connect uPort</button>
        </div>
        : <div id='success'>
          <h3>Success! You have connected your uPort identity.</h3>
          <table className='persona'>
            <tbody>
              <tr>
                { credentials.image
                ? <td className='avatar'>
                  <div id='avatarDiv'>
                    <img id='avatarImg' style={{maxWidth: '200px'}} src={'https://ipfs.infura.io' + credentials.image.contentUrl} />
                  </div>
                </td>
                : null }
                <td>{attributesTable}</td>
              </tr>
            </tbody>
          </table>
          <Link to='sign'>
            <button className='btn bigger' type='submit'>Continue</button>
          </Link>
        </div>
        }
        {this.state.error
        ? <div id='errorDiv'>
          <h3>Error! You have NOT connected your uPort identity.</h3>
          <p><strong>Error:</strong><span id='error' style={{display: 'inline-block', marginLeft: '10px'}} /> </p>
        </div>
        : null }
      </div>
    )
  }
}

Connect.propTypes = { web3: React.PropTypes.object }
