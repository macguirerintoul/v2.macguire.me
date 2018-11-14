import React, {Component} from 'react'
import styled from 'styled-components'

import Content from './Content'

const StyledProject = styled.div`
  h1 {
    color: #0024D4;
    font-size: 4.3em;
    line-height: 1.2em;
    text-shadow: 3px 3px #D60C1A;
  }
  max-width: 50em;
  margin: auto;
  /*
  @media screen and (min-width: 1088px) {
    max-width: 960px;
    width: 960px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1152px;
    width: 1152px;
  }

  @media screen and (min-width: 1472px) {
    max-width: 1344px;
    width: 1344px;
  }
  */
`

const Project = (props) => (
  <StyledProject>
    <Content>
      {props.children}
    </Content>
  </StyledProject>
)

export default Project
