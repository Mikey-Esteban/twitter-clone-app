import React, { useState, useEffect, Fragment } from 'react'
import { Redirect } from 'react-router'
import styled from 'styled-components'
import axios from 'axios'
import Navbar from '../Navbar'
import Form from './Form'

const Wrapper = styled.div`
  margin-top: 100px;
`

const Edit = (props) => {

  const id = props.match.params.id
  const [ chirp, setChirp ] = useState({})
  const [ loaded, setLoaded ] = useState(false)
  const [ redirect, setRedirect ] = useState(false)

  useEffect( () => {
    axios.get(`/api/v1/chirps/${id}`)
      .then( resp => {
        setChirp(resp.data.data.attributes)
        setLoaded(true)
      })
      .catch( resp => console.log(resp) )
  }, [])

  const handleChange = e => {
    setChirp({...chirp, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.put(`/api/v1/chirps/${id}`, { chirp: chirp })
      .then( resp => {
        setRedirect(true)
      })
      .catch( resp => console.log(resp) )
  }

  if (redirect) {
    return <Redirect to='/'/>;
  }

  return (
    <Wrapper>
      {
        loaded &&
        <Fragment>
          <Navbar />
          <Form
            formTitle={'[ Edit Form goes here. ]'}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            labelText={'Edit Chirp!'}
            submitText={'Edit chirp'}
            chirp={chirp}
          />
        </Fragment>
      }
    </Wrapper>
  )
}

export default Edit
