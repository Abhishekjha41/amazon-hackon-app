import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import { Amplify } from 'aws-amplify';
//import awsconfig from './aws-exports'; 
import { legacy_createStore as createStore } from "redux";
import allReducers from "./Reducers/index.js";
import { Provider } from "react-redux";
//Amplify.configure(awsconfig);
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
