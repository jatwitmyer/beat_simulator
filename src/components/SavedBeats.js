import React from "react";
import BeatButton from "./BeatButton";

function SavedBeats( { sounds } ) {
  // console.log(sounds)

  const edmSounds = sounds.filter(sound => sound.genre === "EDM")
  const wubstepSounds = sounds.filter(sound => sound.genre === "Wubstep")
  const trapSounds = sounds.filter(sound => sound.genre === "Trap")

  // console.log(edmSounds)
  // console.log(wubstepSounds)
  // console.log(trapSounds)

  const edmElements = edmSounds.map(sound => {
    return(<BeatButton key={sound.id} sound={sound}/>)
  })
  const wubstepElements = wubstepSounds.map(sound => {
    return(<BeatButton key={sound.id} sound={sound}/>)
  })
  const trapElements = trapSounds.map(sound => {
    return(<BeatButton key={sound.id} sound={sound}/>)
  })

  function playEdmSong() {
    console.log("play song")
    //fetch all edmSounds from the database
    fetch(`http://localhost:8003/sounds`)
    .then(r=>r.json())
    .then(beats => {
      const edmBeats = beats.filter(beat => (beat.genre === "EDM"))
      const edmSong = edmBeats.filter(beat => (beat.isMuted === false))
      console.log(edmSong)
    })
    //if they are not muted, then make a player for each of them which starts upon them all being loaded
  }
  function playWubstepSong() {
    console.log("play song")
    fetch(`http://localhost:8003/sounds`)
    .then(r=>r.json())
    .then(beats => {
      const wubBeats = beats.filter(beat => (beat.genre === "Wubstep"))
      const wubSong = wubBeats.filter(beat => (beat.isMuted === false))
      console.log(wubSong)
    })
  }
  function playTrapSong() {
    console.log("play song")
    fetch(`http://localhost:8003/sounds`)
    .then(r=>r.json())
    .then(beats => {
      const trapBeats = beats.filter(beat => (beat.genre === "Trap"))
      const trapSong = trapBeats.filter(beat => (beat.isMuted === false))
      console.log(trapSong)
    })
  }

  return(
    <div>
      <h3>EDM Sounds:</h3>
      {edmElements}
      <br></br>
      <button onClick={playEdmSong}>Play EDM Song</button>
      <h3>Wubstep Sounds:</h3>
      {wubstepElements}
      <br></br>
      <button onClick={playWubstepSong}>Play Wubstep Song</button>
      <h3>Trap Sounds:</h3>
      {trapElements}
      <br></br>
      <button onClick={playTrapSong}>Play Trap Song</button>
    </div>
  )
}

export default SavedBeats