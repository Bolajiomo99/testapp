import React, { Component } from 'react';
import '../sass/uport.css'

class App extends Component {
  render () {
    return (<div className='connect'>{this.props.children}</div>)
  }
}
export default App;
