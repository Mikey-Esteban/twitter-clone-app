import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-bottom: 25px;
  padding: 30px;

  border: 1px solid #f1faee; /* light gray */
  box-shadow: 3px 3px 3px rgba(68, 68, 68, 0.1);
`

const ImageWrapper = styled.div`
  img {
    border-radius: 100%;
    height: 96px;
    width: 96px;
  }
`

const Name = styled.div`
  font-size: 20px;
  font-weight: 500;
`

const Handle = styled.div`
  font-size: 16px;
  font-weight: 300;
`

const Body = styled.div`
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;

  color: #8d99ae; /* gray */
  font-size: 16px;
  font-weight: 300;
`

const Chirp = (props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src="https://dummyimage.com/300x200/f1faee/000" alt="placeholder image"/>
      </ImageWrapper>
      <div className="main-wrapper">
        <Name>Mikey Esteban</Name>
        <Handle>@mikeyDesign</Handle>
        <Body>{props.attributes.chirp}</Body>
        <Link to={`/chirps/${props.id}/edit`}>Edit</Link>
      </div>
    </Wrapper>
  )
}

export default Chirp
