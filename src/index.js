import React from 'react';
import ReactDOM from 'react-dom';

import {Router, browserHistory} from 'react-router'
import { routes } from './routes'

import p from '../package.json';
console.log("TestApp Version:"+p.version)

import u from '../node_modules/uport/package.json'
console.log("uPort Version:"+u.version)
import uc from '../node_modules/uport-connect/package.json'
console.log("uPort-Connect Version:"+uc.version)
import ul from '../node_modules/uport-lite/package.json'
console.log("uport-lite Version:"+ul.version)

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('root')
);
