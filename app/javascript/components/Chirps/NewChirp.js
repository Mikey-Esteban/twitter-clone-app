import React, { Fragment } from 'react'
import styled from 'styled-components'

const NewChirp = (props) => {
  return (
    <Fragment>
      <div>[Form for new chirp goes here.]</div>
      <form onSubmit={props.handleSubmit}>
        <div className="field">
          <label htmlFor="chirp">New Chirp!</label>
          <input type="text" name="chirp" placeholder="I fear a political career could shine a negative light on my drug dealing."
            value={props.chirp.text || ''}
            onChange={props.handleChange}
          />
        </div>

        <input type="submit" value="Create Chirp"/>
      </form>
    </Fragment>
  )
}

export default NewChirp
