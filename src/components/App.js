import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SavedBeats from "./SavedBeats"
import EdmPads from "./EdmPads";
import Visuals from "./Visuals";
import WubPads from "./WubPads";
import TrapPads from "./TrapPads";
import Tracks from "./Tracks";
import ResetButton from "./ResetButton";
import Welcome from "./Welcome";
import ResetDatabase from "./ResetDatabase";
import { Switch, Route } from 'react-router-dom';

function App() {
  const [sounds, setSounds] = useState([])
  const [globalMute, setGlobalMute] = useState(false)
  const [meeples, setMeeples] = useState("")
  const [isPlaying, setIsPlaying] = useState([])
  const [isGreen, setIsGreen] = useState({
    "EDM Bass": false,
    "EDM Drum 1": false,
    "EDM Drum 2": false,
    "EDM Snare": false,
    "EDM Lead": false,
    "Trap Bass": false,
    "Trap Drum 1": false,
    "Trap Drum 2": false,
    "Trap Lead 1": false,
    "Trap Lead 2": false,
    "Wubstep Bass": false,
    "Wubstep Drum 1": false,
    "Wubstep Drum 2": false,
    "Wubstep Lead 1": false,
    "Wubstep Lead 2": false
  })

  const audioSources = isPlaying.map(beat => {
    return (globalMute ? '' : <Tracks key={beat.id} src={beat.ref} />)
  })

  const muteSwitch = () => {
    setGlobalMute(true)
    setMeeples("still")
  }

  useEffect(() => {
    console.log("useEffect ran")
    fetch("http://localhost:8003/sounds")
      .then(r => r.json())
      .then(sounds => setSounds(sounds))
  }, [])

  useEffect(() => {
    setMeeples(isPlaying.length > 0 ? isPlaying[0].genre : "still")
  }, [isPlaying])

  function resetDatabase() {
    console.log("reset mixer button was clicked")
    setIsGreen({
      "EDM Bass": false,
      "EDM Drum 1": false,
      "EDM Drum 2": false,
      "EDM Snare": false,
      "EDM Lead": false,
      "Trap Bass": false,
      "Trap Drum 1": false,
      "Trap Drum 2": false,
      "Trap Lead 1": false,
      "Trap Lead 2": false,
      "Wubstep Bass": false,
      "Wubstep Drum 1": false,
      "Wubstep Drum 2": false,
      "Wubstep Lead 1": false,
      "Wubstep Lead 2": false
    })
    muteSwitch()
  }

  return (
    <div className="App">
      <NavBar muteSwitch={muteSwitch} />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/mixer">
          <div className="mixer">
            <Visuals meeples={meeples} />
            <div className="padscontainer">
              <SavedBeats
                sounds={sounds}
                setMeeples={setMeeples}
                muteSwitch={muteSwitch}
                setGlobalMute={setGlobalMute}
                isGreen={isGreen}
                setIsGreen={setIsGreen}
                setIsPlaying={setIsPlaying}
              />
            </div>
            {audioSources}
          </div>
          <div className="reset-database">
            <ResetDatabase
              resetDatabase={resetDatabase}
            />
          </div>
        </Route>
        <Route exact path="/edm">
          <div className="mixer">
            <Visuals meeples={meeples} />
            <div className="padscontainer">
              <EdmPads
                sounds={sounds}
                setGlobalMute={setGlobalMute}
                isGreen={isGreen}
                setIsGreen={setIsGreen}
                setIsPlaying={setIsPlaying}
              />
              <ResetButton muteSwitch={muteSwitch} />
              {audioSources}
            </div>
          </div>
          <div className="reset-database">
            <ResetDatabase
              resetDatabase={resetDatabase}
            />
          </div>
        </Route>
        <Route exact path="/trap">
          <div className="mixer">
            <Visuals meeples={meeples} />
            <div className="padscontainer">
              <TrapPads
                sounds={sounds}
                setGlobalMute={setGlobalMute}
                isGreen={isGreen}
                setIsGreen={setIsGreen}
                setIsPlaying={setIsPlaying}
              />
              <ResetButton muteSwitch={muteSwitch} />
              {audioSources}
            </div>
          </div>
          <div className="reset-database">
            <ResetDatabase
              resetDatabase={resetDatabase}
            />
          </div>
        </Route>
        <Route exact path="/wubstep">
          <div className="mixer">
            <Visuals meeples={meeples} />
            <div className="padscontainer">
              <WubPads
                sounds={sounds}
                setGlobalMute={setGlobalMute}
                isGreen={isGreen}
                setIsGreen={setIsGreen}
                setIsPlaying={setIsPlaying}
              />
              <ResetButton muteSwitch={muteSwitch} />
              {audioSources}
            </div>
          </div>
          <div className="reset-database">
            <ResetDatabase
              resetDatabase={resetDatabase}
            />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
