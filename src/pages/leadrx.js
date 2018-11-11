import React from 'react'

import Layout from '../components/layout'
import Project from '../components/Project'
import Figure from '../components/Figure'
import ProjectInformation from '../components/ProjectInformation'
import Showcase from '../components/Showcase'

const LeadRx = () => (
  <Layout>
    <Project>
      <h1>LeadRx 📲</h1>
      <p>LeadRx is a mobile app that delivers professional development content to managers at Vancouver Coastal Health.</p>
      <ProjectInformation client='Vancouver Coastal Health' roles={['Interface Design', 'Mobile Development']} tools={['Adobe XD', 'Apache Cordova']}/>
      <h2>Brief</h2>
      <p>LeadRx is a Vancouver Coastal Health initiative to encourage managers to take five minutes per day to become more confident in their positions. The LeadRx app is a repository for professional development content to support this initative. The app was originally created before I was hired, and I was tasked with redesigning the interface and implementing the changes.</p>
      <h2>Solution</h2>
    </Project>
  </Layout>
)

export default LeadRx
