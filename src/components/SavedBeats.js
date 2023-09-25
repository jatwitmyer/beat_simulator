import React from "react";
import BeatButton from "./BeatButton";

function SavedBeats( { sounds } ) {
  // console.log(sounds)

  const edmSounds = sounds.filter(sound => sound.genre === "EDM")
  const wubstepSounds = sounds.filter(sound => sound.genre === "Wubstep")
  const trapSounds = sounds.filter(sound => sound.genre === "Trap")

  console.log(edmSounds)
  console.log(wubstepSounds)
  console.log(trapSounds)

  const edmElements = edmSounds.map(sound => {
    return(<BeatButton key={sound.id} sound={sound}/>)
  })
  const dubElements = wubstepSounds.map(sound => {
    return(<BeatButton key={sound.id} sound={sound}/>)
  })
  const trapElements = trapSounds.map(sound => {
    return(<BeatButton key={sound.id} sound={sound}/>)
  })

  return(
    <div>
      <h3>EDM Sounds:</h3>
      {edmElements}
      <h3>Dub Sounds:</h3>
      {dubElements}
      <h3>Trap Sounds:</h3>
      {trapElements}
    </div>
  )
}

export default SavedBeats