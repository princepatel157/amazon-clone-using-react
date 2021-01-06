import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header.js";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/contact">
          <h2>contact page</h2>
        </Route>
      </Switch>

      <h3>hello world</h3>
    </>
  );
}
export default App;
