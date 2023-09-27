import React from "react";

function Tracks({ src }) {
    return <audio src={src} type="audio/mpeg" autoPlay loop />
}

export default Tracks