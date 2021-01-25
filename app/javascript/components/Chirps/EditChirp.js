import React, { useState, useEffect, Fragment } from 'react'
import { Redirect } from 'react-router'
import styled from 'styled-components'
import axios from 'axios'
import Navbar from '../Navbar'

const Wrapper = styled.div`
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
`
const Field = styled.div`
  label, textarea {
    width: 100%;
  }

  label {
    color: #a8dadc; /* light blue */
    font-size: 20px;
  }

  textarea {
    border: 1px solid #a8dadc; /* light blue */
    border-radius: 4px;
    height: 150px;
    padding: 10px;
    transition: all ease-in-out 150ms;

    color: #8d99ae; /* gray */
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
  }

  textarea:focus {
    outline: none;
    border: 2px solid #a8dadc; /* light blue */
    padding: 9px 9px;
  }

  input[type='submit'] {
    background: #fff;
    border: 1px solid #e63946; /* red */
    border-radius: 4px;
    color: #e63946; /* red */
    padding: 10px 20px;
    transition: all ease-in-out 150ms;

    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
  }

  input[type='submit']:hover {
    background: #e63946; /* red */
    color: #fff;
  }
`

const EditChirp = (props) => {

  const id = props.match.params.id
  const [ chirp, setChirp ] = useState({})
  const [ loaded, setLoaded ] = useState(false)
  const [ redirect, setRedirect ] = useState(false)

  useEffect( () => {
    axios.get(`/api/v1/chirps/${id}`)
      .then( resp => {
        console.log(resp.data.data);
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
        debugger
        setRedirect(true)
      })
      .catch( resp => console.log(resp) )
  }

  if (redirect) {
    return <Redirect to='/'/>;
  }

  return (
    <Fragment>
      {
        loaded &&
        <Fragment>
          <Navbar />
          <Wrapper>
            <div>[Form for Edit chirp goes here.]</div>
            <form onSubmit={handleSubmit}>
              <Field>
                <label htmlFor="chirp">New Chirp!</label>
                <textarea name="chirp" placeholder={chirp.chirp || ''}
                  value={chirp.chirp}
                  onChange={handleChange}
                />
              </Field>

              <Field>
                <input type="submit" value="Edit Chirp"/>
              </Field>
            </form>
          </Wrapper>
        </Fragment>
      }
    </Fragment>
  )
}

export default EditChirp
