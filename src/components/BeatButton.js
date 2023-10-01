import React from "react";

function BeatButton( { sound, isGreen, setIsGreen } ) {

  const key = sound.genre + " " + sound.name
  const value = !isGreen[`${key}`]
  const updatedItem = {[key]:value}

  function handleClick() {
    setIsGreen({...isGreen, ...updatedItem})
  }

    return(
      <div>
        <button className={isGreen[`${key}`] ? `${sound.type}-pad-on` : `${sound.type}-pad` } onClick={handleClick} >{sound.name}</button>
      </div>
    )
  }

export default BeatButton