import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import ProdctsProvider from './context/products-context';
import configureStore from "./hooks-store/products-store";

import "./index.css";
import App from "./App";

configureStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
