import React, { useEffect, useState } from "react";
import Visuals from "./Visuals";
import SoundLibrary from "./SoundLibrary"
import SavedBeats from "./SavedBeats"

function Display() {
  const [sounds, setSounds] = useState([])

  useEffect(() => {
    fetch("http://localhost:8003/sounds")
      .then(r=>r.json())
      .then(sounds => setSounds(sounds))
  }, [])

  return(
    <div>
      <Visuals />
      <SoundLibrary />
      <SavedBeats sounds={sounds}/>
    </div>
  )
}

export default Display