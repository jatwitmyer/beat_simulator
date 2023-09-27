import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Display from "./Display";
import SavedBeats from "./SavedBeats"
import { Switch, Route } from 'react-router-dom'

function App() {
  const [sounds, setSounds] = useState([])

  useEffect(() => {
    fetch("http://localhost:8003/sounds")
      .then(r => r.json())
      .then(sounds => setSounds(sounds))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Display />
        </Route>
        <Route exact path="/savedbeats">
          <SavedBeats sounds={sounds} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
