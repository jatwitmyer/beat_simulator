import React from "react";
import Visuals from "./Visuals";
import SoundLibrary from "./SoundLibrary"
import SavedBeats from "./SavedBeats"
import { Switch, Route } from 'react-router-dom'

function Display() {
      
      
  return(
    <div>
      <Switch>
        <Route exact path="/visuals">
            <Visuals />
        </Route>

        <Route exact path="/soundlibrary">
            <SoundLibrary />
        </Route>

        <Route exact path="/savedbeats">
            <SavedBeats />
        </Route>
      </Switch>
      
    </div>
  )
}

export default Display