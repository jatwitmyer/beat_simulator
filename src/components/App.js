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
  const [playingSongs, setPlayingSongs] = useState([])
  const [globalMute, setGlobalMute] = useState(false)
  const [beatButtonWasClicked, setBeatButtonWasClicked] = useState(0)
  const [meeples, setMeeples] = useState("")
  const [resetDatabaseData, setResetDatabaseData] = useState([])

  const audioSources = playingSongs.map(beat => {
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
  }, [beatButtonWasClicked, resetDatabaseData])

  useEffect(() => {
    setMeeples(playingSongs.length > 0 ? playingSongs[0].genre : "still")
  }, [playingSongs])

  function resetDatabase() {
    sounds.forEach(sound => {
      fetch(`http://localhost:8003/sounds/${sound.id}`, {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "isMuted": true
        })
      })
        .then(r => r.json())
    })
    muteSwitch()
    setResetDatabaseData([0])
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
                playingSongs={playingSongs}
                setPlayingSongs={setPlayingSongs}
                beatButtonWasClicked={beatButtonWasClicked}
                setBeatButtonWasClicked={setBeatButtonWasClicked}
                setMeeples={setMeeples}
                muteSwitch={muteSwitch}
                setGlobalMute={setGlobalMute}
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
                setPlayingSongs={setPlayingSongs}
                beatButtonWasClicked={beatButtonWasClicked}
                setBeatButtonWasClicked={setBeatButtonWasClicked}
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
                setPlayingSongs={setPlayingSongs}
                beatButtonWasClicked={beatButtonWasClicked}
                setBeatButtonWasClicked={setBeatButtonWasClicked}
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
                setPlayingSongs={setPlayingSongs}
                beatButtonWasClicked={beatButtonWasClicked}
                setBeatButtonWasClicked={setBeatButtonWasClicked}
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
