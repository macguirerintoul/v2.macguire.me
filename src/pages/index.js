import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import thumbnailRoar from '../images/thumbnail-roar.jpg'
import thumbnailWinebox from '../images/thumbnail-winebox.jpg'
import thumbnailLeadRx from '../images/thumbnail-leadrx.jpg'
import thumbnailSFUCode from '../images/thumbnail-sfu-code.png'
import thumbnailPrivileged from '../images/thumbnail-privileged.png'
import thumbnailSignal from '../images/thumbnail-signal.jpg'
import thumbnailSkype from '../images/thumbnail-skype.png'
import thumbnailSlack from '../images/thumbnail-slack.png'

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Intro = styled.h1`
  text-align: center;
  font-size: 4.3em;
  line-height: 1.2em;
  margin: 2em;
  text-shadow: 3px 3px #D60C1A;
`

const StyledProjectCard = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;

  height: 100%;
  min-height: 20em;
  width: 100%;
  color: #FFF;
  h2 {
    font-size: 2em;
    color: #FFF;
    text-shadow: 2px 2px #D60C1A;
  }
  p {
    font-size: 1.3em;
  }
  & * {
    transition: all 0.25s;
  }
  transform: perspective(1px) translateZ(0);
  position: relative;
  overflow: hidden;
  :after {
    content: "";
    position: absolute;
    z-index: 5;
    left: 0;
    right: 100%;
    bottom: 0;
    background: #FFF;
    height: 4px;
    transition-property: right;
    transition-duration: 0.25s;
    transition-timing-function: ease-out;
  }
  :hover:after, :focus:after, :active:after {
    right: 0;
  }
`

const StyledImageBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${props => props.thumbnail}");
  background-size: cover;
  background-position: center;
	transition: all 0.25s ease;
  :hover {
    transform: scale(1.02);
  }
`

const StyledCardCover = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0,0,0,0.75);
  ${StyledProjectCard}:hover & {
    visibility: visible;
    opacity: 100;
  }
`

const StyledCardContent = styled.div`
  position: absolute;
  bottom: 0;
  visibility: hidden;
  opacity: 0;
  margin: 2em;
  :before {
    content:
  }
  ${StyledProjectCard}:hover & {
    visibility: visible;
    opacity: 100;
  }
`

const ProjectCard = (props) => (
  <Link to={props.path} style={{width: '50%'}}>
    <StyledProjectCard {...props}>
      <StyledImageBackground thumbnail={props.thumbnail}>
        <StyledCardCover>
          <StyledCardContent>
            {props.children}
          </StyledCardContent>
        </StyledCardCover>
      </StyledImageBackground>
    </StyledProjectCard>
  </Link>
)

const IndexPage = () => (
  <Layout>
    <Intro>experience designer + developer</Intro>
    <ProjectsContainer>

      <ProjectCard path="/roar/" thumbnail={thumbnailRoar}>
        <h2>ROAR</h2>
        <p>web app enabling Vancouver Coastal Health to more easily manage new hires and their staff orientation sessions</p>
      </ProjectCard>
      <ProjectCard path="/winebox/" thumbnail={thumbnailWinebox}>
        <h2>Winebox</h2>
        <p>iPad app that elegantly assists in keeping track of a personal wine collection</p>
      </ProjectCard>
      <ProjectCard path="/leadrx/" thumbnail={thumbnailLeadRx}>
        <h2>LeadRx</h2>
        <p>mobile app that provides professional development content to managers at Vancouver Coastal Health</p>
      </ProjectCard>
      <ProjectCard path="/sfucode/" thumbnail={thumbnailSFUCode}>
        <h2>SFU Code</h2>
        <p>student club at Simon Fraser University to bring together the student developer community</p>
      </ProjectCard>
      <ProjectCard path="/privileged/" thumbnail={thumbnailPrivileged}>
        <h2>privileged.tech</h2>
        <p>a digital implementation of a privilege walk, aimed at reconciling privilege in the technology field</p>
      </ProjectCard>
      <ProjectCard path="/signal/" thumbnail={thumbnailSignal}>
        <h2>Signal — Quick Compose</h2>
        <p>redesign of message composition in Signal to reduce confusion and frustration</p>
      </ProjectCard>
      <ProjectCard path="/slack/" thumbnail={thumbnailSlack}>
        <h2>Slack — Usability Evaluation</h2>
        <p>usability evaluation of Slack, specifically regarding Jakob Nielsen's heuristics</p>
      </ProjectCard>
    </ProjectsContainer>
  </Layout>
)

export default IndexPage
