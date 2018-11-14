import React from 'react'

import Layout from '../components/layout'
import Project from '../components/Project'
import Showcase from '../components/Showcase'
import AboutLists from '../components/AboutLists'

import profile from '../images/profile.jpg'

const About = () => (
  <Layout>
  <Project>
      <h1>Yours Truly</h1>
      <Showcase horizontal type='image' src={profile} alt="A very nice photo of me">
        <p>Macguire's the name. I’m an undergrad at Simon Fraser University in Vancouver, BC. My major is Interactive Arts & Technology; my minor is Computer Science.</p>
      </Showcase>
      <p></p>
      <p>When I'm not doing that, you can catch me <a href="https://www.mixcloud.com/weirdnite/" target="_blank">DJing</a>, <a href="https://soundcloud.com/weirdnite" target="_blank">making my own beats</a>, and <a href="https://www.youtube.com/watch?v=Y6LMuJN_3mU" target="_blank">editing travel videos</a>.</p>
      <AboutLists artists={['Anderson .Paak', 'Kaytranada', 'Baauer', 'Tory Lanez', 'Shlohmo']} fruits={['Pomegranate', 'Watermelon', 'Orange', 'Apple', 'Banana']} />
      <a href="https://www.linkedin.com/in/mrintoul/" target="_blank">LinkedIn</a> — <a href="https://github.com/mrintoul" target="_blank">GitHub</a>
      </Project>
  </Layout>
)

export default About
