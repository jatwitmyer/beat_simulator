import React from "react";
import EdmPads from "./EdmPads";
import WubPads from "./WubPads";
import TrapPads from "./TrapPads";
import ResetButton from "./ResetButton"

function SavedBeats({ sounds, setPlayingSongs, beatButtonWasClicked, setBeatButtonWasClicked, muteSwitch, setGlobalMute}) {

  return (
    <div>
          <EdmPads
            sounds={sounds}
            setGlobalMute={setGlobalMute}
            setPlayingSongs={setPlayingSongs}
            beatButtonWasClicked={beatButtonWasClicked}
            setBeatButtonWasClicked={setBeatButtonWasClicked}
          />
          <TrapPads
            sounds={sounds}
            setGlobalMute={setGlobalMute}
            setPlayingSongs={setPlayingSongs}
            beatButtonWasClicked={beatButtonWasClicked}
            setBeatButtonWasClicked={setBeatButtonWasClicked}
          />
          <WubPads
            sounds={sounds}
            setGlobalMute={setGlobalMute}
            setPlayingSongs={setPlayingSongs}
            beatButtonWasClicked={beatButtonWasClicked}
            setBeatButtonWasClicked={setBeatButtonWasClicked}
          />
          <br></br>
          <ResetButton muteSwitch={muteSwitch} />
        </div>
  )
}

export default SavedBeats