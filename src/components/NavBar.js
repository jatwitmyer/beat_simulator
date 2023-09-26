import React from "react";
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return(
    <>
      <br></br>
      <img src="https://i.ibb.co/2K2MfqY/header.png" alt="header" border="0"></img>
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