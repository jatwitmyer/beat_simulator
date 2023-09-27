import React, { useState } from "react";

function NavBar() {

    // const [isActive, setIsActive] = useState(false)
    
    return (
    <>
      <br></br>
      <img className="hero-image" src="https://i.ibb.co/2K2MfqY/header.png" alt="header" border="0"></img>
      <br></br>
      <ul>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/savedbeats">Saved Beats</NavLink></li>
        {/* THESE LI NEED A NAVLINK  */}
        <li><a href="#news">Wubstep</a></li> 
        <li><a href="#contact">EDM</a></li>
        <li><a href="#about">Trap</a></li>
      </ul>
    </>
  )
}

export default NavBar