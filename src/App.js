import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
          <h2>home page</h2>
        </Route>
        <Route path="/orders">
          <Header />
          <h2>order page</h2>
        </Route>
        <Route path="/cart">
          <Header />
          <h2>cart page</h2>
        </Route>
      </Switch>
    </>
  );
}
export default App;
