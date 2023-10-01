import React from "react";
import BeatButton from "./BeatButton";

function TrapPads({ sounds, setGlobalMute, isGreen, setIsGreen, setIsPlaying }) {

    const trapSounds = sounds.filter(sound => sound.genre === "Trap")

    const trapElements = trapSounds.map(sound => {
        return (<BeatButton
            key={sound.id}
            sound={sound}
            isGreen={isGreen}
            setIsGreen={setIsGreen}
            />)
    })

    function playTrapSong() {
        const clickedTrapBeats = Object.entries(isGreen).filter(beat => beat[0].includes("Trap") && beat[1] === true).map(beat => beat[0].replace("Trap ", ""))
        const passToApp = clickedTrapBeats.map(beat => {
            const returnedBeat = sounds.filter(sound => sound.genre === "Trap" && sound.name === beat)
            return returnedBeat
        }).map(item => item[0])
        setIsPlaying(passToApp)
        setGlobalMute(false)
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