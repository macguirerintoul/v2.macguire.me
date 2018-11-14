import React from 'react'
import styled from 'styled-components'

const StyledAboutLists = styled.div`
  display: flex;
  font-size: 1em;
  margin: 2em 0;
`

const StyledList = styled.div`
  flex-grow: 1;
  font-size: 0.8em;
`

function AboutLists(props) {
  return(
    <StyledAboutLists>
      <StyledList>
        <h3>Top 5 Artists</h3>
        <ul>{props.artists.map(function(name, index){
          return <li key={ index }>{name}</li>;
        })}</ul>
      </StyledList>
      <StyledList>
        <h3>Top 5 Fruits</h3>
        <ul>
          {props.fruits.map(function(name, index){
            return <li key={ index }>{name}</li>;
          })}
        </ul>
      </StyledList>
    </StyledAboutLists>
  )
}

export default AboutLists
