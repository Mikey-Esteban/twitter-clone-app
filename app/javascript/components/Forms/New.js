import React from 'react'
import styled from 'styled-components'
import Form from './Form'

const New = (props) => {
  const { handleChange, handleSubmit, chirp } = props

  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      chirp={chirp}
      formTitle={'[ New Form goes here. ]'}
      labelText={'New Chirp!'}
      submitText={'Create Chirp'}
    />
  )
}

export default New
