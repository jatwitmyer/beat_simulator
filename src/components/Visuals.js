import React from "react";

function Visuals({meeples}) {
  // console.log(meeples)
  return (
    <section className="image-container">
      <img className={meeples} id={`dj-${meeples}`} src="/assets/neon_dj.png" alt="" height="65px" />
      <img className={meeples} id={`r1-${meeples}`} src="/assets/teal_dancer.png" alt="" height="65px" />
      <img className={meeples} id={`r2-${meeples}`} src="/assets/pink_dancer.png" alt="" height="65px" />
      <img className={meeples} id={`r3-${meeples}`} src="/assets/purple_dancer.png" alt="" height="65px" />
      <img className={meeples} id={`r4-${meeples}`} src="/assets/teal_dancer.png" alt="" height="65px" />
    </section>
  )
}

export default Visuals;