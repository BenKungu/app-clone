import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '../src/assets/css/bootstrap.min.css'
import '../src/assets/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import './assets/css/feathericon.min.css'

import './assets/plugins/fontawesome/css/fontawesome.min.css'
import './assets/plugins/fontawesome/css/all.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/custom.css'
import './assets/css/feathericon.min.css'
import './assets/js/feather.min.js'
import './assets/css/bootstrap.min.css'

import './assets/css/all.css'
import './assets/css/all.min.css'
import './assets/css/fontawesome.min.css'
import './assets/css/custom.css'

import { $, jQuery } from 'jquery'
// export for others scripts to use
window.$ = $
window.jQuery = jQuery

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
