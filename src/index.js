import React from 'react';
import ReactDOM from '@hot-loader/react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('app')
);
