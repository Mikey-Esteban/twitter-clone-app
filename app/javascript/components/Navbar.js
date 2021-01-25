import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;

  background: #a8dadc; /* light blue */
  color: #fff;
  padding: 20px;
`
const HomeWrapper = styled.div`
  a {
    color: #fff;
    text-decoration: none;
  }
`

const LinkWrapper = styled.div`

  a {
    border: 1px solid #fff;
    border-radius: 4px;
    margin-right: 30px;
    padding: 10px 20px;

    color: #1d3557; /* dark blue */
    background: #fff;  /* dark blue */
    text-decoration: none;

    transition: all ease-in-out 150ms;
  }

  a:hover {
    border: 1px solid #14213d;  /* dark blue */
    color: #fff;
    background: #14213d;  /* dark blue */
  }
`

const Navbar = () => {
  return (
    <Wrapper>
      <HomeWrapper>
        <Link to="/">This is the Navbar Component</Link>
      </HomeWrapper>
      <LinkWrapper>
        <Link to="/">Sign up</Link>
      </LinkWrapper>
    </Wrapper>
  )
}

export default Navbar
