import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  & figcaption {
    text-align: center;
  }
`

const Figure = (props) => (
  <StyledFigure>
    <img src={props.imgSrc} alt={props.alt} />
    <figcaption>{props.caption}</figcaption>
  </StyledFigure>
)

export default Figure
