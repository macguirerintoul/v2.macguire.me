import React from 'react'
import styled from 'styled-components'

import Container from './Container'

const StyledFooter = styled.div`
  display: flex;
  margin: 3em auto;
  text-align: center;
  p {
    margin: auto;
    width: 50%;
  }
`

const Footer = () => (
  <Container>
    <StyledFooter>

        <p>&copy; 2018 Macguire Rintoul</p>
        <p>developed with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and deployed on <a href="https://www.netlify.com/">Netlify</a></p>

    </StyledFooter>
  </Container>
)

export default Footer
