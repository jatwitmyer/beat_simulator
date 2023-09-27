import React, { useEffect, useState } from "react";
import SoundLibrary from "./SoundLibrary"

import { Switch, Route } from 'react-router-dom'

function Display() {

  return(
    <div>
      <Switch>

        <Route exact path="/soundlibrary">
            <SoundLibrary />
        </Route>

      </Switch>
      
    </div>
  )
}

export default Display