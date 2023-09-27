import React, { useState } from "react";
import BeatButton from "./BeatButton";
import EdmPads from "./EdmPads";
import Tracks from "./Tracks";
import Visuals from "./Visuals";
import WubPads from "./WubPads";

function SavedBeats({ sounds }) {

  const [playingSongs, setPlayingSongs] = useState([])
  const [globalMute, setGlobalMute] = useState(false)

  const wubstepSounds = sounds.filter(sound => sound.genre === "Wubstep")
  const trapSounds = sounds.filter(sound => sound.genre === "Trap")

  const wubstepElements = wubstepSounds.map(sound => {
    return (<BeatButton key={sound.id} sound={sound} />)
  })
  const trapElements = trapSounds.map(sound => {
    return (<BeatButton key={sound.id} sound={sound} />)
  })


  //if they are not muted, then make a player for each of them which starts upon them all being loaded

  function playWubstepSong() {
    console.log("play song")
    fetch(`http://localhost:8003/sounds`)
      .then(r => r.json())
      .then(beats => {
        const wubBeats = beats.filter(beat => (beat.genre === "Wubstep"))
        const wubSong = wubBeats.filter(beat => (beat.isMuted === false))
        setPlayingSongs(wubSong)
        setGlobalMute(false)
      })
  }

  function playTrapSong() {
    console.log("play song")
    fetch(`http://localhost:8003/sounds`)
      .then(r => r.json())
      .then(beats => {
        const trapBeats = beats.filter(beat => (beat.genre === "Trap"))
        const trapSong = trapBeats.filter(beat => (beat.isMuted === false))
        setPlayingSongs(trapSong)
        setGlobalMute(false)
      })
  }

  const muteSwitch = () => {
    setGlobalMute(true)
  }

  const audioSources = playingSongs.map(beat => {
    console.log(beat.ref)
    return (globalMute ? '' : <Tracks key={beat.id} src={beat.ref} />)
  })

  return (
    <div>
      <div className="mixer">
        <Visuals />
        <div className="padscontainer">
          <EdmPads
            sounds={sounds}
            setGlobalMute={setGlobalMute}
            setPlayingSongs={setPlayingSongs}
          />
          <WubPads
            sounds={sounds}
            setGlobalMute={setGlobalMute}
            setPlayingSongs={setPlayingSongs}
          />
          <h1>Trap Sounds:</h1>
          <div className="button-container">
            {trapElements}
            <br></br>
            <button className="play-btn" onClick={playTrapSong}>Play Trap Song</button>
          </div>
          {audioSources}
          <br></br>
          <div className="container">
            <button className="reset-btn" onClick={muteSwitch}>Cut the Beat</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SavedBeats