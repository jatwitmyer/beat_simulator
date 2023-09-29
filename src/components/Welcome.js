import React, { useState, useEffect } from "react";

function Welcome() {
  const [responses, setResponses] = useState([])

  useEffect(() => {
    fetch("http://localhost:8003/responses")
    .then(r=>r.json())
    .then(data => setResponses(data))
  }, [])

  const [formData, setFormData] = useState({
    comment: "",
    name: ""
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  function handleForm(e) {
    e.preventDefault()
    fetch("http://localhost:8003/responses", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then(r=>r.json())
    .then(newResponse => setResponses([...responses, newResponse]))
    e.target.comment.value = ""
    e.target.name.value = ""
  }

  const responsesElements = responses.map(response => {
    return( <p key={response.id}>{response.name}: {response.comment}</p> )
  })

  return (
    <div className="mixer" id="welcome">
      <h1 className="welcome-title">Welcome</h1>
      <p className="welcome-message">Our EDM Beat Simulator is a music project that brings together the rhythms of three genres into a dynamic and interactive experience. Designed for music enthusiasts and aspiring DJs, this project allows users to experiment with different tracks. Using React Router we created a structured and navigable user interface for our project. In the Mixer, users can choose from three tracks, EDM, Trap, and Wubstep. Each track offers up to five of its own unique beats. Users can create a selection of different beats from the track in real-time. The integration of beats creates a custom track that users can enjoy and share. With a simple click of the "Play" button, the blended beats come to life.</p>
      <h2 className="instructions-title">Instructions:</h2>
      <div className="instructions">
        <div>
          <span>1.</span> Pick a tab (All, EDM, Wubstep, Trap).
        </div>
        <div>
          <span>2.</span> Create a selection of beats to integrate by clicking each beat you would like to use. They will turn green when they're active.
        </div>
        <div>
          <span>3.</span> Click the “Play” button for that genre and listen to your selections come to life!
        </div>
        <div>
          <span>4.</span> To stop the music click the “CUT THE BEAT” button. Your selections will still be selected.
        </div>
      </div>
      <div>
        <h2>Leave a Comment:</h2>
        <form className="form" name="form" onSubmit={handleForm}>
          <label>
            Comment: <br/>
            <input type="text" name="comment" onChange={handleChange}/> <br/>
          </label>
          <label>
            Name: <br/>
            <input  type="text" name="name" onChange={handleChange}/> <br/>
          </label>
          <input type="submit" name="submit"></input>
        </form>
      </div>
      <h2>Comments:</h2>
      {responsesElements}
    </div>
  )
}

export default Welcome