import React from 'react'
import styled from 'styled-components'

const StyledShowcase = styled.div`
  div {
    min-width: 50%;
  }
  display: flex;
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
  text-align: ${props => props.horizontal ? 'left' : 'center'};
  div:not(:first-child) {
    margin: ${props => props.horizontal ? '0 2em' : '1em 0'};
  }
  img, video {
    max-height: 80vh;
  }
  align-items: center;
  margin: 2em 0;
`

function Showcase(props) {
  let media, first, second;
  if (props.type == 'image') {
    media = <img src={props.src} alt={props.alt}/>;
  } else if (props.type == 'video') {
    media = <video src={props.src} title={props.alt} autoPlay muted loop></video>
  }
  if (props.mediaPosition == 'after') {
    first = props.children;
    second = media;
  } else {
    first = media;
    second = props.children;
  }
  return(
    <StyledShowcase {...props}>
      <div>
        {first}
      </div>
      <div>
        {second}
      </div>
    </StyledShowcase>
  )
}

export default Showcase
