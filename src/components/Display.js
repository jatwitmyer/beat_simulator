import React, { useEffect, useState } from "react";
import SoundLibrary from "./SoundLibrary"
import SavedBeats from "./SavedBeats"
import { Switch, Route } from 'react-router-dom'

function Display() {
  const [sounds, setSounds] = useState([])

  useEffect(() => {
    fetch("http://localhost:8003/sounds")
      .then(r=>r.json())
      .then(sounds => setSounds(sounds))
  }, [])

  return(
    <div>
      <Switch>

        <Route exact path="/soundlibrary">
            <SoundLibrary />
        </Route>

        {/* <Route exact path="/savedbeats"> */}
            <SavedBeats sounds={sounds} />
        {/* </Route> */}
      </Switch>
      
    </div>
  )
}

export default Display