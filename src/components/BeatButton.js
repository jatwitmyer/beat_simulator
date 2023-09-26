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
        "id": 1,
        "genre": "EDM",
        "type": "bass",
        "name": "Bass",
        "ref": "/assets/EDM_Bass.mp3",
        "isMuted": (!isMuted)
      })
    })
    .then(r=>r.json())
    .then(asset => console.log(asset))
    setIsMuted(!isMuted)
  }



  //to play the sounds, you would check which ones were muted, and make a player for each or communicate with the player for each

  // const sound = new Howl({
  //   src: ["public/assets/Dub_Bass.mp3"]
  // })

  // function handleClick() {
  //   console.log(sound.ref)
  //   const player = new Tone.Player({
  //     url: sound.ref,
  //     loop: true,
  //     autostart: true
  //   }).toDestination();
  //   Tone.loaded().then(() => {
  //     Tone.Transport.scheduleRepeat((time) => {
  //     player.start(time).stop(time + 0.1);
  //   }, "1n")
  //     Tone.Transport.start()
  // })}
  // Start time must be strictly greater than previous start time

  // this one plays:
  // function handleClick() {
  //   console.log(sound.ref)


  // const player = new Tone.Player({
  //   url: sound.ref,
  //   loop: true,
  //   autostart: true
  // }).toDestination()
  // Tone.loaded().then(() => {
  //   player.start()
  // })

  // const soundsAfterClick = playingSounds.map(item => {
  //   if (item.id === sound.id) {
  //       // return (edited item where sound.isMuted = !sound.isMuted)
  //   } else {
  //       return item
  //   }
  // })

  // function handleClick() {
  //   setPlayingSounds(soundsAfterClick)
  // }

  // // soundsAfterClick needs to give a new version of the array that's in useState and change the current song to be different value OR post to the database

  // const clickedSound = playingSounds.filter(item => (item.id === sound.id))

  // if (clickedSound.isMuted === false) {
  //     player.start()
  // }

    return(
      <div>
        <button onClick={handleClick}>{sound.name}</button>
      </div>
    )
  }

export default BeatButton