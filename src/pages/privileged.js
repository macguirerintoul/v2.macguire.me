import React from 'react'

import Layout from '../components/layout'
import Project from '../components/Project'
import Figure from '../components/Figure'
import ProjectInformation from '../components/ProjectInformation'
import Showcase from '../components/Showcase'

import privilegedHero from '../images/thumbnail-privileged.png'

const Privileged = () => (
  <Layout>
    <Project>
      <h1>Privileged</h1>
      <p>privileged.tech is a digital implementation of a privilege walk, aimed at reconciling privilege in the technology field. </p>
      <Figure imgSrc={privilegedHero} alt='Screenshots of privileged.tech' caption='screenshots of privileged.tech' />
      <ProjectInformation client='Hackathon' roles={['Full-Stack Web Development']} tools={['React', 'Firebase']} />
    </Project>
  </Layout>
)

export default Privileged
