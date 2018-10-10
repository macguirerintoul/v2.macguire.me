import React from 'react'
import styled from 'styled-components'

const StyledShowcase = styled.div`
  display: flex;
  align-items: center;
  margin: 5em 0;
`

const Showcase = (props) => (
  <StyledShowcase>
    <div>
      <img src={props.src} alt={props.alt}/>
    </div>
    <div style={{'margin-left': '3em'}}>
      {props.children}
    </div>
  </StyledShowcase>
)

export default Showcase
