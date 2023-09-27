import React from "react";
import BeatButton from "./BeatButton";

function TrapPads({ sounds, setPlayingSongs, setGlobalMute }) {

    const trapSounds = sounds.filter(sound => sound.genre === "Trap")

    const trapElements = trapSounds.map(sound => {
        return (<BeatButton key={sound.id} sound={sound} />)
    })

    //if they are not muted, then make a player for each of them which starts upon them all being loaded

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


    return (
        <div>
            <h1>Trap Sounds:</h1>
            <div className="button-container">
                {trapElements}
                <br></br>
                <button className="play-btn" onClick={playTrapSong}>Play Trap Song</button>
            </div>
        </div>
    )
}

export default TrapPads