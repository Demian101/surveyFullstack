import React from 'react';
import ReactDOM from 'react-dom/client'
import { ReactQueryProvider } from "./lib/react-query";
import './index.css'
import App from './App'
import {Provider} from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReactQueryProvider>
    <App />
  </ReactQueryProvider>
  // <Provider store={store}>
  //   <App/>
  // </Provider>
  );
