import React, {Component} from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.div`
  position: relative;
`

const StyledNav = styled.nav`
  min-height: 5em;
  @media only screen and (max-width: 600px) {
    min-height: 2em;
    padding: 0 1em;
  }
  padding: 0 4em;
  top: 0;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 30;
  background: rgba(255,255,255,0.99);
  h1 {
    text-shadow: none;
  }
  align-items: stretch;
  min-height: 5em;
  width: 100%;
  .navbar-brand {
    align-items: center;
    display: flex;
    flex-shrink: 0;
  }
  .navbar-menu {
    flex-grow: 1;
    flex-shrink: 0;
    align-items: stretch;
    a {
      font-family: 'colfaxRegular';
    }
  }
`

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showMobileMenu: false
    }
    this.showMobileMenu = this.showMobileMenu.bind(this);
  }
  showMobileMenu() {
    this.setState({showMobileMenu: !this.state.showMobileMenu});
    console.log(this.state.showMobileMenu)
  }
  render() {
    let showMobileMenu = this.state.showMobileMenu ? 'is-active' : '';
    return(
      <StyledHeader className="has-navbar-fixed-top">
        <StyledNav className="navbar is-fixed-top">
          <div className="navbar-brand">
            <Link to='/' className="navbar-item">
              <h1 className="title is-5">Macguire Rintoul</h1>
            </Link>
            <div className="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false" onClick={this.showMobileMenu}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
          <div id="navMenu" className={"navbar-menu " + showMobileMenu}>
            <div className="navbar-end">
              <a className="navbar-item" href="/">Home</a>
              <a className="navbar-item" href="/about">About</a>
              <a className="navbar-item" target="_blank" href="https://github.com/mrintoul">GitHub</a>
              <a className="navbar-item" target="_blank" href="https://linkedin.com/in/mrintoul">LinkedIn</a>
            </div>
          </div>
        </StyledNav>
      </StyledHeader>
    );
  }
}

export default Header
