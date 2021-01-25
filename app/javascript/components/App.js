import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Chirps from './Chirps/Chirps'
import EditChirp from './Chirps/EditChirp'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Chirps} />
      <Route exact path="/chirps/:id/edit" component={EditChirp} />
    </Switch>
  )
}

export default App
