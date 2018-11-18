import React from 'react'
import styled from 'styled-components'

import Container from './Container'

const StyledFooter = styled.div`
  margin: 3em auto;
  text-align: center;
  p {
    margin: auto;
  }
`

const Footer = () => (
  <Container>
    <StyledFooter>

        <p>&copy; 2018 Macguire Rintoul</p>
        <p>shout out to <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> + <a href="https://www.netlify.com/" target="_blank">Netlify</a></p>

    </StyledFooter>
  </Container>
)

export default Footer
