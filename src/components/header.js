import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.div`
  min-height: 5em;
  position: relative;

  & > .container {
    align-items: stretch;
    display: flex;
    min-height: 5em;
    width: 100%;
  }
`

const StyledNav = styled.nav`
  min-height: 5em;
  top: 0;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 30;
  background: rgba(255,255,255,0.75);
  h1 {
    text-shadow: none;
  }
  .container {
    align-items: stretch;
    display: flex;
    min-height: 5em;
    width: 100%;

  }
  .navbar-brand {
    align-items: center;
    display: flex;
    flex-shrink: 0;
  }
  .navbar-menu {
    flex-grow: 1;
    flex-shrink: 0;
    align-items: stretch;
    display: flex;
    a {

      font-family: 'colfaxRegular';
    }
  }
`

const Header = () => (
  <StyledHeader>
    <StyledNav>
      <div className="container">
      <div className="navbar-brand">
        <Link to='/'>
          <h1 className="title is-5">Macguire Rintoul</h1>
        </Link>
        <div className="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="/">Home</a>
          <a className="navbar-item" href="/about">About</a>
          <a className="navbar-item" target="_blank" href="https://github.com/mrintoul">GitHub</a>
          <a className="navbar-item" target="_blank" href="https://linkedin.com/in/mrintoul">LinkedIn</a>
        </div>
      </div>
      </div>
    </StyledNav>
  </StyledHeader>
)

export default Header
