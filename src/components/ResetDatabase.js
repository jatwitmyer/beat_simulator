import React from "react";

function ResetDatabase({resetDatabase}) {
  return (
    <button className={"reset-database-button"} onClick={resetDatabase}>Reset Database</button>
  )
}

export default ResetDatabase