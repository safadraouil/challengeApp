import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import reducer from "././Reducer.js";
const store = createStore(reducer);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

//const root = ReactDOM.createRoot(document.getElementById("root"));
/* root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
