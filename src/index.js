import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
require('dotenv').config()

ReactDOM.render(
  <Router>
    <App />
  </Router>
, document.getElementById('root'));
