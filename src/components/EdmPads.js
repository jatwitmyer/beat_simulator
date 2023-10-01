import React from "react";
import BeatButton from "./BeatButton";

function EdmPads({ sounds, setGlobalMute, isGreen, setIsGreen, setIsPlaying }) {
    
    const edmSounds = sounds.filter(sound => sound.genre === "EDM")

    const edmElements = edmSounds.map(sound => {
        return (<BeatButton
            key={sound.id}
            sound={sound}
            isGreen={isGreen}
            setIsGreen={setIsGreen}
            />)
    })

    function playEdmSong() {
        const clickedEdmBeats = Object.entries(isGreen).filter(beat => beat[0].includes("EDM") && beat[1] === true).map(beat => beat[0].replace("EDM ", ""))
        const passToApp = clickedEdmBeats.map(beat => {
            const returnedBeat = sounds.filter(sound => sound.genre === "EDM" && sound.name === beat)
            return returnedBeat
        }).map(item => item[0])
        setIsPlaying(passToApp)
        setGlobalMute(false)
    }
    
    return (
        <div>
            <h1>EDM Sounds:</h1>
            <div className="button-container">
                {edmElements}
                <br></br>
                <button className="play-btn" onClick={playEdmSong}>Play EDM Song</button>
            </div>
        </div>
    )
}

export default EdmPads