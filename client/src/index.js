import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./store/index.js";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);