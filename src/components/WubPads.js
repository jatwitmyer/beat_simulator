import React from "react";
import BeatButton from "./BeatButton";

function WubPads({ sounds, setGlobalMute, isGreen, setIsGreen, setIsPlaying }) {

    const wubstepSounds = sounds.filter(sound => sound.genre === "Wubstep")

    const wubstepElements = wubstepSounds.map(sound => {
        return (<BeatButton
            key={sound.id}
            sound={sound}
            isGreen={isGreen}
            setIsGreen={setIsGreen}
            />)
    })

    function playWubstepSong() {
        const clickedWubstepBeats = Object.entries(isGreen).filter(beat => beat[0].includes("Wubstep") && beat[1] === true).map(beat => beat[0].replace("Wubstep ", ""))
        const passToApp = clickedWubstepBeats.map(beat => {
            const returnedBeat = sounds.filter(sound => sound.genre === "Wubstep" && sound.name === beat)
            return returnedBeat
        }).map(item => item[0])
        setIsPlaying(passToApp)
        setGlobalMute(false)
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