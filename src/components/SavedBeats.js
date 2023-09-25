import React from "react";
import BeatButton from "./BeatButton";

function SavedBeats( { sounds } ) {
  // console.log(sounds)

  const soundElements = sounds.map(sound => {
    return(<BeatButton key={sound.id} sound={sound}/>)
  })

  return(
    <div>
      <h3>All Sounds:</h3>
      {soundElements}
    </div>
  )
}

export default SavedBeats