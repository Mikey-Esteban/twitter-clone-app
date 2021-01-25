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

const Form = (props) => {
  const { formTitle, handleSubmit, handleChange, labelText, submitText, chirp } = props
  
  return (
    <Wrapper>
      <div>{formTitle}</div>
      <form onSubmit={handleSubmit}>
        <Field>
          <label htmlFor="chirp">{labelText}</label>
          <textarea name="chirp" placeholder={chirp.chirp || "I fear a political career could shine a negative light on my drug dealing."}
            value={chirp.chirp || ''}
            onChange={handleChange}
          />
        </Field>

        <Field>
          <input type="submit" value={submitText} />
        </Field>
      </form>
    </Wrapper>
  )
}

export default Form
