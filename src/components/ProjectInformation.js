import React from 'react'
import styled from 'styled-components'

const StyledProjectInformation = styled.div`
  display: flex;
  font-size: 1em;
  margin: 2em 0;
  @media all and (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const StyledInformationCategory = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  font-size: 0.8em;
  padding-right: 2rem;
  @media all and (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

function ProjectInformation(props) {
  return(
    <StyledProjectInformation>
      <StyledInformationCategory>
        <h3>Context</h3>
        <span>{props.client}</span>
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
