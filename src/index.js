import React from 'react';
import ReactDOM from '@hot-loader/react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/styles.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
