import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
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

const NewChirp = (props) => {
  return (
    <Wrapper>
      <div>[Form for new chirp goes here.]</div>
      <form onSubmit={props.handleSubmit}>
        <Field>
          <label htmlFor="chirp">New Chirp!</label>
          <textarea name="chirp" placeholder="I fear a political career could shine a negative light on my drug dealing."
            value={props.chirp.chirp || ''}
            onChange={props.handleChange}
          />
        </Field>

        <Field>
          <input type="submit" value="Create Chirp"/>
        </Field>
      </form>
    </Wrapper>
  )
}

export default NewChirp
