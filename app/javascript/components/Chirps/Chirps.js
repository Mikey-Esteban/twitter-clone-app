import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Navbar from '../Navbar'
import NewChirp from '../Forms/New'
import Chirp from './Chirp'

const Wrapper = styled.div`
  margin-top: 100px;
`

const Main = styled.div`
  margin: 50px auto;
  max-width: 600px;
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

  const list = chirps.map( item => <Chirp key={item.id} attributes={item.attributes} id={item.id} /> )

  return (
    <Wrapper>
      <Navbar />
      <div>This is my Chirps component</div>
      <NewChirp
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        chirp={chirp}
      />
      <Main>{list}</Main>
    </Wrapper>
  )
}

export default Chirps
