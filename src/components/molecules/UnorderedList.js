import React from 'react'
import styled from 'styled-components'

const StyledUnorderedList = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  font-size: 0.8em;
  padding-right: 2rem;
  @media all and (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

function UnorderedList(props) {
  return(
    <StyledUnorderedList>
      <h3>{props.title}</h3>
      <ul>
        {props.items.map(function(name, index){
          return <li key={ index }>{name}</li>;
        })}
      </ul>
    </StyledUnorderedList>
  )
}

export default UnorderedList
