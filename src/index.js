import React from "react";
import App from "./containers/App";
import './index.css';
import{ createRoot }from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

//USED BEFORE REACT VERSION 18 
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

//CHANGES IN REACT v18
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
