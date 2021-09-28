import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/index.scss"
import {HashRouter} from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <App />
    <HashRouter />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
