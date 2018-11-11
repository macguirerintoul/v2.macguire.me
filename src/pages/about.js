import React from 'react'

import Layout from '../components/layout'
import Project from '../components/Project'

import profile from '../images/profile.jpg'

const About = () => (
  <Layout>
  <Project>
      <h1>Yours Truly</h1>
      <img src={profile} alt="A very nice photo of me" style={{float: "left", width: "10em", height: "auto"}} />
      <p>Macguire's the name.</p>
      <p>Designing products that ensure enjoyable user experiences and add value to organizations is the game.</p>
      <p>I’m an undergrad at the School of Interactive Arts & Technology within Simon Fraser University, in Vancouver, BC.</p>
      <p>When I'm not doing that, you can catch me <a href="https://www.mixcloud.com/weirdnite/" target="_blank">DJing</a>, <a href="https://soundcloud.com/weirdnite" target="_blank">making my own beats</a>, and <a href="https://www.youtube.com/watch?v=Y6LMuJN_3mU" target="_blank">editing travel videos</a> (2 more coming soon).</p>
      <a href="https://www.linkedin.com/in/mrintoul/" target="_blank">LinkedIn</a> — <a href="https://github.com/mrintoul" target="_blank">GitHub</a>
      </Project>
  </Layout>
)

export default About
