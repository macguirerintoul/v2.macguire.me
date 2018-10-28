import React from 'react'
import styled from 'styled-components'

const StyledProjectInformation = styled.div`
  display: flex;
  font-size: 1em;
  margin: 2em 0;
`

const StyledInformationCategory = styled.div`
  flex-grow: 1;
  font-size: 0.8em;
`

function ProjectInformation(props) {
  return(
    <StyledProjectInformation>
      <StyledInformationCategory>
        <h3>Client</h3>
        <p>{props.client}</p>
      </StyledInformationCategory>
      <StyledInformationCategory>
        <h3>Roles</h3>
        <ul>
          {props.roles.map(function(name, index){
            return <li key={ index }>{name}</li>;
          })}
        </ul>
      </StyledInformationCategory>
      <StyledInformationCategory>
        <h3>Tools</h3>
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
