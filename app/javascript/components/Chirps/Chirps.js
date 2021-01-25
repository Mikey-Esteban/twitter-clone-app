import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import NewChirp from './NewChirp'
import Chirp from './Chirp'

const Main = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
`

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
    setChirp({...chirp, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    // make an axios post
    axios.post('/api/v1/chirps', {chirp})
      .then( resp => {
        setChirps([...chirps, resp.data.data])
        setChirp({})
      })
      .catch( resp => console.log(resp) )
  }

  const list = chirps.map( item => <Chirp key={item.id} attributes={item.attributes} /> )

  return (
    <Fragment>
      <div>This is my Chirps component</div>
      <NewChirp
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        chirp={chirp}
      />
      <Main>{list}</Main>
    </Fragment>
  )
}

export default Chirps
