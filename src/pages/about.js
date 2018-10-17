import React from 'react'

import Layout from '../components/layout'
import Project from '../components/Project'
import Figure from '../components/Figure'
import ProjectInformation from '../components/ProjectInformation'
import Showcase from '../components/Showcase'

const About = () => (
  <Layout>
    <Project>
      <h1>Yours Truly</h1>
      <p>Macguire's the name.</p>
      <p>Designing products that ensure enjoyable user experiences and add value to organizations is the game.</p>
      <p>I’m an undergrad at the School of Interactive Arts & Technology within Simon Fraser University, in Vancouver, BC.</p>
      <p>When I'm not doing that, you can catch me <a href="https://www.mixcloud.com/weirdnite/" target="_blank">making a mix</a>, <a href="https://soundcloud.com/weirdnite" target="_blank">creating proprietary noise</a>, and hiking the Swiss Alps.</p>
      <a href="https://www.linkedin.com/in/mrintoul/" target="_blank">LinkedIn</a> — <a href="https://github.com/mrintoul" target="_blank">GitHub</a>
    </Project>
  </Layout>
)

export default About
