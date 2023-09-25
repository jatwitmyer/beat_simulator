import React from "react";

function BeatButton( { sound } ) {
  console.log(sound)
  return(
    <div>
      <button>{sound.name}</button>
    </div>
  )
}

export default BeatButton