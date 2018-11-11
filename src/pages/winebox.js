import React from 'react'

import Layout from '../components/layout'
import Project from '../components/Project'
import Figure from '../components/Figure'
import ProjectInformation from '../components/ProjectInformation'
import Showcase from '../components/Showcase'

import wineboxHero from '../images/thumbnail-winebox.jpg'

import collection from '../videos/winebox/collection.mp4'

const Winebox = () => (
  <Layout>
    <Project>
      <h1>Winebox 🍷</h1>
      <p>Winebox is an iPad application that elegantly assists in keeping track of a personal wine collection. This is a personal redesign of a project done in a senior design course.</p>
      <ProjectInformation client='Senior Design Course' roles={['Interface Design', 'Interaction Design']} tools={['Sketch', 'Flinto']} />
      <Showcase horizontal type='video' src={collection} alt='The Collection screen of Winebox' caption='The Collection screen of Winebox'>
        <p>The collection screen of Winebox</p>
      </Showcase>

      <h2>Problem</h2>
      <p>The initial ideas for the product began from the observation that casual wine collectors were often forgetting the details of their wines. We investigated the various stages of wine enthusiasm, and found that current options for keeping track of a wine collection aren't quite ideal.</p>

      <h2>Solution</h2>
      <p>Winebox allows people to more easily understand and manage their wine collection, no matter how serious of a collector they are. Winebox accommodates Sunday sippers and seasoned sommeliers, and tells you everything you would like to know about your wines before you have to ask.</p>

      <Showcase horizontal type='video' src={collection} alt='The Collection screen of Winebox' mediaPosition='left'>
        <p>The collection screen gives an overview of the collection at a glance, and organizes wines into smart categories</p>
      </Showcase>

      <h2>Approach</h2>
      <p>To better understand the opportunity, we interviewed five semi-serious wine collectors and collected surveys from eighteen. From this research, we were able to identify wants, frustrations, and understand the ways in which wine was part of people’s lives. User research suggested the interface should provide shortcuts to specific subsets of the collection.</p>

      <p>In designing for this audience, we wanted to avoid creating another source of wine ratings and pairings — such things already exist in the hundreds for those that are interested, and our research suggested that information wasn’t always all that helpful. In order to better serve collectors, we focused on addressing frustrations that were brought up consistently when they were asked about their collections. The source of many struggles seemed to be that people couldn’t remember the details that they wanted in that moment. This led us to frame the challenge:</p>
      <blockquote>How might we help people keep tabs on their collections and avoid losing the details?</blockquote>
      <h2>Taking it Further</h2>
      <p>Further research revealed that people engage with wine in a variety of contexts; at home, at dinner with friends, at liquor stores. We also noted that people could make use of their collection information in any of these contexts.</p>
      <blockquote>How might we provide a companion for the various situations that surround wine?</blockquote>
      <h2>Design</h2>
      <p>coming soon</p>
      <h2>Reflections</h2>
      <p>coming soon</p>
    </Project>
  </Layout>
)

export default Winebox
