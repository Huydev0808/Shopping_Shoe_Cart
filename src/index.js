import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.min.js";
//Setup Redux toolkit

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store ={store}>
      <App />
   </Provider>
);
reportWebVitals();
