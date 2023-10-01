import React from "react";
import EdmPads from "./EdmPads";
import WubPads from "./WubPads";
import TrapPads from "./TrapPads";
import ResetButton from "./ResetButton"

function SavedBeats({ sounds, setPlayingSongs, muteSwitch, setGlobalMute, isGreen, setIsGreen, setIsPlaying }) {

  return (
    <div>
          <EdmPads
            sounds={sounds}
            setGlobalMute={setGlobalMute}
            setPlayingSongs={setPlayingSongs}
            isGreen={isGreen}
            setIsGreen={setIsGreen}
            setIsPlaying={setIsPlaying}
          />
          <TrapPads
            sounds={sounds}
            setGlobalMute={setGlobalMute}
            setPlayingSongs={setPlayingSongs}
            isGreen={isGreen}
            setIsGreen={setIsGreen}
            setIsPlaying={setIsPlaying}
          />
          <WubPads
            sounds={sounds}
            setGlobalMute={setGlobalMute}
            setPlayingSongs={setPlayingSongs}
            isGreen={isGreen}
            setIsGreen={setIsGreen}
            setIsPlaying={setIsPlaying}
          />
          <br></br>
          <ResetButton muteSwitch={muteSwitch} />
        </div>
  )
}

export default SavedBeats