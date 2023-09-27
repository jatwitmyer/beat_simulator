import React, { useEffect, useState } from "react";

function BeatButton( { sound } ) {

  // console.log(sound.isMuted)
  const [isMuted, setIsMuted] = useState(true)
  const [isActive, setIsActive] = useState(false)
  
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
    setIsActive(!isActive)
  }

    return(
      <div>
        <button className={isActive ? `${sound.type}-pad-on` : `${sound.type}-pad`} onClick={handleClick} >{sound.name}</button>
      </div>
    )
  }

export default BeatButton