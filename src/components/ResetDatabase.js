import React from "react";

function ResetDatabase({resetDatabase}) {
  return (
    <button className={"reset-database-button"} onClick={resetDatabase}>Reset Mixer</button>
  )
}

export default ResetDatabase