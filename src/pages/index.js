import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import thumbnailRoar from '../images/thumbnail-roar.png'
import thumbnailWinebox from '../images/thumbnail-winebox.png'

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Intro = styled.h1`
  width: 50%;
  text-shadow: 2px 2px #FF0000;
`

const StyledProjectCard = styled.div`
  position: relative;
  background-image: url("${props => props.thumbnail}");
  background-size: cover;
  min-height: 20em;
  width: 50%;
  :hover {
    color: red;
  }
`

const Content = styled.div`
  position: absolute;
  bottom: 0;
  transition: all 0.3s;
  visibility: hidden;
  opacity: 0;
  ${StyledProjectCard}:hover & {
    visibility: visible;
    opacity: 100;
  }
`

const ProjectCard = (props) => (
  <StyledProjectCard {...props}>
    <Link to={props.path}>
        <Content>
          {props.children}
        </Content>
    </Link>
  </StyledProjectCard>
)

const IndexPage = () => (
  <Layout>
    <ProjectsContainer>
      <Intro>experience designer and developer</Intro>
      <ProjectCard path="/roar/" thumbnail={thumbnailRoar}>
        <h2>ROAR</h2>
        <p>A web app that allows Vancouver Coastal Health to more easily manage new hires and their staff orientation sessions.</p>
      </ProjectCard>
      <ProjectCard path="/winebox/" thumbnail={thumbnailWinebox}>
        <h2>Winebox</h2>
        <p>A really nice way to organize wine.</p>
      </ProjectCard>
    </ProjectsContainer>
  </Layout>
)

export default IndexPage
