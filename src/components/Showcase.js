import React from 'react'
import styled from 'styled-components'

const StyledShowcase = styled.div`
  display: flex;
  align-items: center;
  margin: 5em 0;
`

function Showcase(props) {
  let left, right;
  if (props.mediaPosition == 'left') {
    left = <img src={props.src} alt={props.alt}/>;
    right = props.children;
  } else {
    left = props.children;
    right = <img src={props.src} alt={props.alt}/>;
  }
  return(
    <StyledShowcase>
      <div>
        {left}
      </div>
      <div style={{'margin-left': '3em'}}>
        {right}
      </div>
    </StyledShowcase>
  )
}

export default Showcase
