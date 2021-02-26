import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// scss/sass
import './app.scss';

// JSX ( soort van ontwikkelde vorm van html voor react )
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);