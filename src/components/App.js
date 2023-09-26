import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Display from "./Display";
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
            <Display />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
