import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.scss";

import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';

console.log("REACT_APP_ENV=", process.env.REACT_APP_ENV);
console.log("MY_KEY=", process.env.MY_KEY);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
