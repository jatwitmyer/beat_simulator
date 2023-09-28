import React, { useEffect, useState } from "react";

function BeatButton( { sound, beatButtonWasClicked, setBeatButtonWasClicked } ) {

  // const [buttons, setButtons] = useState([])

  // useEffect(() => {
  //   fetch(`http://localhost:8003/sounds/${sound.id}`)
  //   .then(r=>r.json())
  //   .then(buttonData => setButtons(buttonData))
  // }, [])

  // console.log(buttons)

  // console.log(sound.isMuted)
  const [isMuted, setIsMuted] = useState(sound.isMuted)
  const [isActive, setIsActive] = useState(false)

  // console.log(sound.genre + " " + sound.name, sound.isMuted)

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
    setBeatButtonWasClicked(beatButtonWasClicked + 1)
  }



    return(
      <div>
        <button className={isMuted ? `${sound.type}-pad` : `${sound.type}-pad-on`} onClick={handleClick} >{sound.name}</button>
      </div>
    )
  }

export default BeatButton