import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Project from '../components/Project'
import Showcase from '../components/Showcase'
import AboutLists from '../components/AboutLists'

import profile from '../images/profile.jpg'
import resume from '../Macguire Rintoul - Resume.pdf'

const StyledHistory = styled.div`
  font-size: 0.8em;
  margin: 0 0 1em 0 !important;
  label {
    font-family: 'colfaxBold';
  }
`

const History = (props) => (
  <StyledHistory>
    <label>{props.label}</label>
    <ul>
      {props.items.map(function(name, index){
        return <li key={ index }>{name}</li>;
      })}
    </ul>
  </StyledHistory>
)

const About = () => (
  <Layout>
  <Project>
      <h1>Yours Truly</h1>
      <Showcase horizontal type='image' src={profile} alt="A very nice photo of me" style={{textAlign: 'left'}}>
        <div>
          <p>I'm Macguire, and I’m an undergrad at Simon Fraser University in Vancouver, BC. My major is Interactive Arts & Technology; my minor is Computer Science.</p>
          <History label='current' items={['Systems Analyst at Vancouver Coastal Health']} />
          <History label='previous' items={['Multimedia Designer at Vancouver Coastal Health', 'Digital Designer at CanSleep Services']} />
        </div>
      </Showcase>
      <p></p>
      <p>When I'm not doing that, you can catch me <a href="https://www.mixcloud.com/weirdnite/" target="_blank">DJing</a>, <a href="https://soundcloud.com/weirdnite" target="_blank">making my own beats</a>, and <a href="https://www.youtube.com/watch?v=Y6LMuJN_3mU" target="_blank">editing travel videos</a>.</p>

      <a href="https://www.linkedin.com/in/mrintoul/" target="_blank">LinkedIn</a> — <a href="https://github.com/mrintoul" target="_blank">GitHub</a> — <a href={resume} target="_blank">Resume</a>
      <p>mrintoul@sfu.ca</p>
      </Project>
  </Layout>
)

export default About
