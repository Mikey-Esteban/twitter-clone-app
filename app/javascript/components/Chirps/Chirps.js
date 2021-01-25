import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import NewChirp from './NewChirp'

const Chirps = () => {

  const [ chirps, setChirps ] = useState([])
  const [ chirp, setChirp ] = useState({})

  useEffect( () => {
    // make an api call
    axios.get('/api/v1/chirps')
      .then( resp => {
        setChirps(resp.data.data)
      })
      .catch( resp => console.log(resp) )
  }, [chirps.length])

  const handleChange = e => {
    console.log('name:', e.target.name, 'value:', e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e);
  }

  const list = chirps.map( item => <li>{item.attributes.chirp}</li> )

  return (
    <Fragment>
      <div>This is my Chirps component</div>
      <NewChirp
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        chirp={chirp}
      />
      <ul>{list}</ul>
    </Fragment>
  )
}

export default Chirps
