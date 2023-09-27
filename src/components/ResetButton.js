import React from "react";

function ResetButton({ muteSwitch }) {


    return (
        <div className="container">
            <button className="reset-btn" onClick={muteSwitch}>Cut the Beat</button>
        </div>
    )
}

export default ResetButton