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
        

    </StyledFooter>
  </Container>
)

export default Footer
