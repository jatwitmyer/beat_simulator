import React from "react";
import BeatButton from "./BeatButton";

function WubPads({ sounds, setPlayingSongs, setGlobalMute }) {

    const wubstepSounds = sounds.filter(sound => sound.genre === "Wubstep")

    const wubstepElements = wubstepSounds.map(sound => {
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



    return (
        <div>
            <h1>Wubstep Sounds:</h1>
            <div className="button-container">
                {wubstepElements}
                <br></br>
                <button className="play-btn" onClick={playWubstepSong}>Play Wubstep Song</button>
            </div>
        </div>
    )
}

export default WubPads