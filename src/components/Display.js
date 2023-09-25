import React from "react";
import Visuals from "./Visuals";
import SoundLibrary from "./SoundLibrary"
import SavedBeats from "./SavedBeats"

function Display() {
  return(
    <div>
      <Visuals />
      <SoundLibrary />
      <SavedBeats />
    </div>
  )
}

export default Display