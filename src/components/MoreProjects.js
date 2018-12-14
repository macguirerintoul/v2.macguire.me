import React from 'react'
import styled from 'styled-components'

import Container from './Container'
import ProjectThumbnail from './ProjectThumbnail'

const StyledMoreProjects = styled.div`
  width: 100%;
  display: flex;
  flex-basis: 0;
  margin-top: 2em;
  flex-wrap: wrap;
  min-height: 8rem;
  a {
    border-bottom: none;
  }
`

function MoreProjects(props) {
  return (
    <Container>
      <h5>Like what you see?</h5>
      <StyledMoreProjects>
        {props.projects.map(function(name, index){
          return <ProjectThumbnail project={name} key={ index } />;
        })}
      </StyledMoreProjects>
    </Container>
  )
}

export default MoreProjects
