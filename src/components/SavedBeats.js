import React, { useState } from "react";
import BeatButton from "./BeatButton";
import EdmPads from "./EdmPads";
import Tracks from "./Tracks";
import Visuals from "./Visuals";
import WubPads from "./WubPads";
import TrapPads from "./TrapPads";

function SavedBeats({ sounds }) {

  const [playingSongs, setPlayingSongs] = useState([])
  const [globalMute, setGlobalMute] = useState(false)


  //if they are not muted, then make a player for each of them which starts upon them all being loaded

  const muteSwitch = () => {
    setGlobalMute(true)
  }

  const audioSources = playingSongs.map(beat => {
    console.log(beat.ref)
    return (globalMute ? '' : <Tracks key={beat.id} src={beat.ref} />)
  })

  return (
    <div>
      <div className="mixer">
        <Visuals />
        <div className="padscontainer">
          <EdmPads
            sounds={sounds}
            setGlobalMute={setGlobalMute}
            setPlayingSongs={setPlayingSongs}
          />
          <WubPads
            sounds={sounds}
            setGlobalMute={setGlobalMute}
            setPlayingSongs={setPlayingSongs}
          />
          <TrapPads
            sounds={sounds}
            setGlobalMute={setGlobalMute}
            setPlayingSongs={setPlayingSongs}
          />
          {audioSources}
          <br></br>
          <div className="container">
            <button className="reset-btn" onClick={muteSwitch}>Cut the Beat</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SavedBeats