import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import thumbnailMyCredit from '../images/thumbnail-mycredit.jpg'
import thumbnailTheSwitch from '../images/thumbnail-the-switch.jpg'
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
  @media all and (max-width: 812px) {
    text-align: center;
    font-size: 2em;
    line-height: auto;
    margin: 1em;
  }
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
    height: 2px;
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
  @media all and (max-width: 812px) {
    visibility: visible;
    opacity: 100;
    background-color: rgba(0,0,0,0.2);
    p {
      display: none;
    }
  }
  ${StyledProjectCard}:hover & {
    visibility: visible;
    opacity: 100;
  }
`

const StyledCardContent = styled.div`
  position: absolute;
  bottom: 0;
  /* visibility: hidden;
  opacity: 0; */
  margin: 2em;
  :before {
    content:
  }
  @media all and (max-width: 812px) {
    visibility: visible;
    opacity: 100;
  }
  ${StyledProjectCard}:hover & {
    visibility: visible;
    opacity: 100;
  }
`

const StyledCardLink = styled.div`
  width: 50%;
  @media all and (max-width: 812px) {
    width: 100%;
  }
`

const CardLink = (props) => (
  <StyledCardLink>
    {props.children}
  </StyledCardLink>
);

const ProjectCard = (props) => (
  <StyledCardLink>
    <Link to={props.path}>
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
  </StyledCardLink>
)

const LineBreak = styled.br`
  display: none;
  @media all and (min-width: 364px) {
    display: block;
  }
`

const IndexPage = () => (
  <Layout>
    <Intro>experience designer<LineBreak/> + developer</Intro>
    <ProjectsContainer>
      <ProjectCard path="/mycredit/" thumbnail={thumbnailMyCredit}>
        <h2>MyCredit</h2>
        <p>Mobile app to help Vancity members understand and build credit to support their financial well-being</p>
      </ProjectCard>
      <ProjectCard path="/theswitch/" thumbnail={thumbnailTheSwitch}>
        <h2>The Switch</h2>
        <p>Web app introduction to menstrual cups that aims to address apprehensions and increase customer confidence</p>
      </ProjectCard>
      <ProjectCard path="/roar/" thumbnail={thumbnailRoar}>
        <h2>ROAR</h2>
        <p>Web app that allows Vancouver Coastal Health to more easily manage new hires and their staff orientation sessions</p>
      </ProjectCard>
      <ProjectCard path="/winebox/" thumbnail={thumbnailWinebox}>
        <h2>Winebox</h2>
        <p>iPad app that elegantly assists in keeping track of a personal wine collection</p>
      </ProjectCard>
      <ProjectCard path="/leadrx/" thumbnail={thumbnailLeadRx}>
        <h2>LeadRx</h2>
        <p>Mobile app that provides professional development content to managers at Vancouver Coastal Health</p>
      </ProjectCard>
      <ProjectCard path="/privileged/" thumbnail={thumbnailPrivileged}>
        <h2>Privileged.tech</h2>
        <p>Web app implementation of a privilege walk that aims to reconcile privilege in the technology field</p>
      </ProjectCard>
      {/*
      <ProjectCard path="/signal/" thumbnail={thumbnailSignal}>
        <h2>Signal — Quick Compose</h2>
        <p>redesign of message composition in Signal to reduce confusion and frustration</p>
      </ProjectCard>
      <ProjectCard path="/slack/" thumbnail={thumbnailSlack}>
        <h2>Slack — Usability Evaluation</h2>
        <p>usability evaluation of Slack, specifically regarding Jakob Nielsen's heuristics</p>
      </ProjectCard>
      */}
    </ProjectsContainer>
  </Layout>
)

export default IndexPage
