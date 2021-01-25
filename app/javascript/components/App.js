import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Chirps from './Chirps/Chirps'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Chirps} />
    </Switch>
  )
}

export default App
