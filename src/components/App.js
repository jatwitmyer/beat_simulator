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
  const [resetDatabaseButtonWasClicked, setResetDatabaseButtonWasClicked] = useState(0)

  const audioSources = playingSongs.map(beat => {
    return (globalMute ? '' : <Tracks key={beat.id} src={beat.ref} />)
  })

  const muteSwitch = () => {
    setGlobalMute(true)
    setMeeples("still")
  }

  useEffect(() => {
    fetch("http://localhost:8003/sounds")
      .then(r => r.json())
      .then(sounds => setSounds(sounds))
  }, [beatButtonWasClicked, resetDatabaseButtonWasClicked])

  useEffect(() => {
    setMeeples(playingSongs.length > 0 ? playingSongs[0].genre : "still")
  }, [playingSongs])

  function resetDatabase() {
    console.log("Reset button clicked")
    // const resetSounds = sounds.map(sound => {
    sounds.forEach(sound => {
      fetch(`http://localhost:8003/sounds/${sound.id}`, {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "genre": sound.genre,
          "type": sound.type,
          "name": sound.name,
          "ref": sound.ref,
          "isMuted": true
        })
      })
        .then(r => r.json())
        .then(data => console.log(data))
    })
    setResetDatabaseButtonWasClicked(resetDatabaseButtonWasClicked + 1)
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
              setResetDatabaseButtonWasClicked={setResetDatabaseButtonWasClicked}
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
              setResetDatabaseButtonWasClicked={setResetDatabaseButtonWasClicked}
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
              setResetDatabaseButtonWasClicked={setResetDatabaseButtonWasClicked}
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
              setResetDatabaseButtonWasClicked={setResetDatabaseButtonWasClicked}
            />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
