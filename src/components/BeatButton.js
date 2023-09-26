import React, { useEffect, useState } from "react";
// import { Howl, Howler } from "howler";
import * as Tone from "tone";

function BeatButton( { sound } ) {

  // console.log(sound.isMuted)
  const [isMuted, setIsMuted] = useState(true)
  
  function handleClick() {
    fetch(`http://localhost:8003/sounds/${sound.id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "genre": sound.genre,
        "type": sound.type,
        "name": sound.name,
        "ref": sound.ref,
        "isMuted": (!isMuted)
      })
    })
    .then(r=>r.json())
    .then(asset => console.log(asset))
    setIsMuted(!isMuted)
  }

    return(
      <div>
        <button onClick={handleClick} >{sound.name}</button>
      </div>
    )
  }

export default BeatButton