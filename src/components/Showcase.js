import React from 'react'
import styled from 'styled-components'

const StyledShowcase = styled.div`
  display: flex;
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
  text-align: ${props => props.horizontal ? 'left' : 'center'};
  div:not(:first-child) {
    margin: ${props => props.horizontal ? '0 1em' : '1em 0'};
  }
  align-items: center;
  margin: 2em 0;
`

function Showcase(props) {
  let left, right;
  if (props.mediaPosition == 'right') {
    left = props.children;
    right = <img src={props.src} alt={props.alt}/>;
  } else {
    left = <img src={props.src} alt={props.alt}/>;
    right = props.children;
  }
  return(
    <StyledShowcase {...props}>
      <div>
        {left}
      </div>
      <div>
        {right}
      </div>
    </StyledShowcase>
  )
}

export default Showcase
