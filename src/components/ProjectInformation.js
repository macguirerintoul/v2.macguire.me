import React from 'react'
import styled from 'styled-components'

const StyledProjectInformation = styled.div`
  display: flex;
`

const StyledInformationCategory = styled.div`
  flex-grow: 1;
  & p, & li {
    font-size: 1.2em;
  }
`

function ProjectInformation(props) {
  return(
    <StyledProjectInformation>
      <StyledInformationCategory>
        <h3>Client</h3>
        <p>{props.client}</p>
      </StyledInformationCategory>
      <StyledInformationCategory>
        <h3>What I Did</h3>
        <ul>
          {props.roles.map(function(name, index){
            return <li key={ index }>{name}</li>;
          })}
        </ul>
      </StyledInformationCategory>
      <StyledInformationCategory>
        <h3>What I Used</h3>
        <ul>
          {props.tools.map(function(name, index){
            return <li key={ index }>{name}</li>;
          })}
        </ul>
      </StyledInformationCategory>
    </StyledProjectInformation>
  )
}

export default ProjectInformation
