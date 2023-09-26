import React, { useState } from "react";

function NavBar() {

    // const [isActive, setIsActive] = useState(false)
    
    return (
    <>
        <>
            <img src="https://i.ibb.co/2K2MfqY/header.png" alt="header" border="0"></img>
            <br></br>
            <ul>
                {/* THESE LI NEED A NAVLINK  */}
                <li><a href="#news">Home</a></li> 
                <li><a href="#contact">Saved Beats</a></li>
                <li><a href="#news">Wubstep</a></li> 
                <li><a href="#contact">EDM</a></li>
                <li><a href="#about">Trap</a></li>
            </ul>
            <br></br>
        </>
        <>
            <img className="genreimg" src="https://i.ibb.co/4PHkkzg/d5fec23bca1b62a785ceb4f1234c603f.png" alt="edm"></img>
        <br></br>
        <div className="mixer">
                <div className="container">
                    <h1>....</h1>
                </div>
                <div className="padscontainer">
                    <h1>EDM sounds</h1>
                    <div class="button-container">
                        <button className="beat-pad"
                        >Bass</button>
                        <button className="beat-pad"
                        >Drum 1</button>
                        <button className="beat-pad"
                        >Drum 2</button>
                        <button className="beat-pad"
                         >Snare</button>
                        <button className="beat-pad"
                         >Lead</button>
                         <button className="play-btn"
                         >Play EDM song</button>
                    </div>
                    <h1>Wubstep sounds</h1>
                    <div class="button-container">
                        <button className="beat-pad"
                         >Bass</button>
                        <button className="beat-pad"
                         >Drum 1</button>
                        <button className="beat-pad"
                        >Drum 2</button>
                        <button className="beat-pad"
                         >Lead 1</button>
                        <button className="beat-pad"
                         >Lead 2</button>
                        <button className="play-btn"
                         >Play Wubstep song</button>
                    </div>
                    <h1>Trap sounds</h1>
                    <div class="button-container">
                        <button className="beat-pad"
                         >Bass</button>
                        <button className="beat-pad"
                         >Drum 1</button>
                        <button className="beat-pad"
                         >Drum 2</button>
                        <button className="beat-pad"
                         >Lead 1</button>
                        <button className="beat-pad"
                         >Lead 2</button>
                        <button className="play-btn"
                         >Play Trap song</button>
                    </div>
                </div>
                <br></br>
                <div className="container">
                    <button className="reset-btn">CUT THE BEAT</button>
                </div>
                <br></br>
            </div>
        </>
    </>
    );
}

export default NavBar