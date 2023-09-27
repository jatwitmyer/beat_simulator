import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Display from "./Display";
import SavedBeats from "./SavedBeats"
import EdmPads from "./EdmPads";
import Visuals from "./Visuals";
import WubPads from "./WubPads";
import TrapPads from "./TrapPads";
import Tracks from "./Tracks";
import { Switch, Route } from 'react-router-dom'
import ResetButton from "./ResetButton";

function App() {
  const [sounds, setSounds] = useState([])
  const [playingSongs, setPlayingSongs] = useState([])
  const [globalMute, setGlobalMute] = useState(false)

  const audioSources = playingSongs.map(beat => {
    console.log(beat.ref)
    return (globalMute ? '' : <Tracks key={beat.id} src={beat.ref} />)
  })

  const muteSwitch = () => {
    setGlobalMute(true)
  }

  useEffect(() => {
    fetch("http://localhost:8003/sounds")
      .then(r => r.json())
      .then(sounds => setSounds(sounds))
  }, [])


  return (
    <div className="App">
      <NavBar muteSwitch={muteSwitch} />
      <Switch>
        <Route exact path="/">
          <Display />
        </Route>
        <Route exact path="/savedbeats">
          <SavedBeats sounds={sounds} />
          {audioSources}
        </Route>
        <Route exact path="/edm">
          <div className="mixer">
            <Visuals />
            <div className="padscontainer">
              <EdmPads
                sounds={sounds}
                setGlobalMute={setGlobalMute}
                setPlayingSongs={setPlayingSongs}
              />
              <ResetButton muteSwitch={muteSwitch} />
              {audioSources}
            </div>
          </div>
        </Route>
        <Route exact path="/wubstep">
          <div className="mixer">
            <Visuals />
            <div className="padscontainer">
              <WubPads
                sounds={sounds}
                setGlobalMute={setGlobalMute}
                setPlayingSongs={setPlayingSongs}
              />
              <ResetButton muteSwitch={muteSwitch} />
              {audioSources}
            </div>
          </div>
        </Route>
        <Route exact path="/trap">
          <div className="mixer">
            <Visuals />
            <div className="padscontainer">
              <TrapPads
                sounds={sounds}
                setGlobalMute={setGlobalMute}
                setPlayingSongs={setPlayingSongs}
              />
              <ResetButton muteSwitch={muteSwitch} />
              {audioSources}
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
