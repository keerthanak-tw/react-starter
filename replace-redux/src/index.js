import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProdctsProvider from './context/products-context';

import './index.css';
import App from './App';


ReactDOM.render(
  <ProdctsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProdctsProvider>,
  document.getElementById('root')
);
