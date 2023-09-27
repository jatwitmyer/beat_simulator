import React, { useState } from "react";
import EdmPads from "./EdmPads";
import Tracks from "./Tracks";
import Visuals from "./Visuals";
import WubPads from "./WubPads";
import TrapPads from "./TrapPads";
import ResetButton from "./ResetButton"

function SavedBeats({ sounds }) {

  const [playingSongs, setPlayingSongs] = useState([])
  const [globalMute, setGlobalMute] = useState(false)

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
         <ResetButton muteSwitch={muteSwitch} />
        </div>
      </div>
    </div >
  )
}

export default SavedBeats