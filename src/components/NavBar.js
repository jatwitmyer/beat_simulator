import React from "react";

function NavBar() {
  return(
    <>
      <img src="https://i.ibb.co/2K2MfqY/header.png" alt="header" border="0"></img>
      <br></br>
      <ul>
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#news">Saved Beats</a></li>
        <li><a href="#contact">Sound Library</a></li>
        <li><a href="#about">Mix</a></li>
      </ul>
    </>
  )
}

export default NavBar