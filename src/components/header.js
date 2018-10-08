import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Container from './Container'

const StyledHeader = styled.div`
  min-height: 3.25rem;
  position: relative;

  & > .container {
    align-items: stretch;
    display: flex;
    min-height: 3.25rem;
    width: 100%;
  }
`

const Header = () => (
  <StyledHeader>
    <nav className="navbar is-fixed-top is-transparent">
      <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="index.html">
          <h1 className="title is-5">Macguire Rintoul</h1>
        </a>
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
    </nav>
  </StyledHeader>
)

export default Header
