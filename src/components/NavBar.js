import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar({muteSwitch}) {
  return (
    <>
      <br></br>
      <img src="https://i.ibb.co/2K2MfqY/header.png" alt="header" border="0"></img>
      <br></br>
      <ul>
        <li onClick={muteSwitch}><NavLink to="/">Home</NavLink></li>
        <li onClick={muteSwitch}><NavLink to="/savedbeats">Saved Beats</NavLink></li>
        <li onClick={muteSwitch}><NavLink to="/wubstep">Wubstep</NavLink></li>
        <li onClick={muteSwitch}><NavLink to="/edm">EDM</NavLink></li>
        <li onClick={muteSwitch}><NavLink to="/trap" >Trap</NavLink></li>
      </ul>
    </>
  )
}

export default NavBar