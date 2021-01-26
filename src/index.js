import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { StateProvider } from "./StateProvider.js";
import reducer, { initialState } from "./reducer.js";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
