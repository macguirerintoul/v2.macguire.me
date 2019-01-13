import React from 'react'

import Layout from '../components/layout'
import Project from '../components/Project'
import ProjectInformation from '../components/ProjectInformation'
import Showcase from '../components/Showcase'
import MoreProjects from '../components/MoreProjects'

import landing from '../images/privileged-landing.png'
import enter from '../images/privileged-enter.png'
import question from '../images/privileged-question.png'
import overview from '../images/privileged-overview.png'
import compare from '../images/privileged-compare.png'
import end from '../images/privileged-end.png'

const Privileged = () => (
  <Layout>
    <Project>
      <h1>Privileged</h1>
      <p>Privileged.tech is a digital implementation of a privilege walk, aimed at reconciling privilege in the technology field. The majority of the project was completed in 24 hours as part of nwHacks 2018, with finishing touches done afterward.</p>

      <a href="http://www.privileged.tech/" target="_blank" rel="noopener noreferrer">Live App</a> — <a href="https://github.com/FlyteWizard/privileged" target="_blank" rel="noopener noreferrer">GitHub</a>

      <ProjectInformation client='24-hour hackathon project' roles={['Full-Stack Web Development']} tools={['React', 'Firebase', 'Heroku']} />

      <Showcase type='image' src={landing} alt='The landing screen of privileged.tech' >
        <p>The landing screen explains the activity and sets the tone.</p>
      </Showcase>

      <Showcase type='image' src={enter} alt='The enter screen of privileged.tech' >
        <p>The activity was designed to be completed in groups, like an in-person privilege walk. Multiple users can join thanks to the Firebase backend, and when they're ready, start the walk.</p>
      </Showcase>

      <Showcase type='image' src={question} alt='The question screen of privileged.tech' >
        <p>The questions in the walk aim to expose the privileges present in the community, and provoke participants to reflect on their roles and social responsibilities.</p>
      </Showcase>

      <Showcase type='image' src={overview} alt='The overview screen of privileged.tech' >
        <p>When the activity is complete, participants can see how many others were afforded a certain privilege. The data is kept anonymous.</p>
      </Showcase>

      <Showcase type='image' src={compare} alt='The compare screen of privileged.tech' >
        <p>Participants then can visualize their position relative to the others, which is the point of both the in-person and this digital activity.</p>
      </Showcase>

      <Showcase type='image' src={compare} alt='The compare screen of privileged.tech' >
        <p>Participants then can visualize their position relative to the others, which is the point of both the in-person and this digital activity.</p>
      </Showcase>

      <Showcase type='image' src={end} alt='The end screen of privileged.tech' >
        <p>To end it off, participants are given resources to help them acknowledge and address the privileges they have or to support initiatives with a similar mission.</p>
      </Showcase>

      <a href="http://www.privileged.tech/" target="_blank" rel="noopener noreferrer">Live App</a> — <a href="https://github.com/FlyteWizard/privileged" target="_blank" rel="noopener noreferrer">GitHub</a>

      <MoreProjects projects={['theswitch', 'roar', 'winebox', 'leadrx']}/>
    </Project>
  </Layout>
)

export default Privileged
