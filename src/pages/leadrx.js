import React from 'react'

import Layout from '../components/layout'
import Project from '../components/Project'
import Figure from '../components/Figure'
import ProjectInformation from '../components/ProjectInformation'
import Showcase from '../components/Showcase'

import dashboardVideo from '../videos/leadrx/dashboard.mp4'
import loginVideo from '../videos/leadrx/login.mp4'
import contentVideo from '../videos/leadrx/content.mp4'
import historyVideo from '../videos/leadrx/history.mp4'
import helpVideo from '../videos/leadrx/help.mp4'
import settingsVideo from '../videos/leadrx/settings.mp4'

import userJourney from '../images/leadrx-user-journey.jpg'
import oldUI from '../images/leadrx-old-ui.png'
import newUI from '../images/leadrx-new-ui.png'

const LeadRx = () => (
  <Layout>
    <Project>
      <h1>LeadRx 📲</h1>
      <p>LeadRx is a mobile app that provides professional development content to managers at Vancouver Coastal Health.</p>

      <ProjectInformation client='Vancouver Coastal Health' roles={['Interface Design', 'Mobile Development']} tools={['Adobe XD', 'Adobe PhoneGap', 'Moodle']}/>

      <Showcase horizontal type='video' src={dashboardVideo} alt='The dashboard screen of LeadRx'>
        <p>Browsing content in LeadRx</p>
      </Showcase>

      <h2>Brief</h2>
      <p>LeadRx is a Vancouver Coastal Health initiative to encourage managers to become more confident in their positions. The LeadRx app is a repository for professional development content to support this initative. The app was originally created before I was hired, and I was asked to improve the interface and implement the changes.</p>

      <h2>Solution</h2>
      <p>The updated LeadRx app uses space more effectively, communicates information more clearly, and uses more modern visual styles.</p>

      <Showcase horizontal type='video' src={loginVideo} alt='The login screen of LeadRx'>
        <p>Managers log in using their existing online training accounts</p>
      </Showcase>

      <Showcase horizontal mediaPosition='after' type='video' src={contentVideo} alt='Browsing content in LeadRx'>
        <p>Content is retrieved from a learning management system, Moodle, with badges indicating new content</p>
      </Showcase>

      <Showcase horizontal type='video' src={historyVideo} alt='The history screen of LeadRx'>
        <p>Viewing history is recorded for easy access to previous resources</p>
      </Showcase>

      <Showcase horizontal mediaPosition='after' type='video' src={helpVideo} alt='The help screen of LeadRx'>
        <p>Because the app is a pilot, the help button puts users in direct contact with our team to discuss issues or suggestions</p>
      </Showcase>

      <Showcase horizontal type='video' src={settingsVideo} alt='The settings screen of LeadRx'>
        <p>The Settings screen provides options to clear history, view the privacy statement, or sign out</p>
      </Showcase>

      <h2>Design</h2>
      <p>Although the app already existed, additional user research was conducted to better understand who the app was intended for. An online survey was conducted and a stripped-down user journey was mapped out to emphasize managers' goals and highlight what the app should be able to provide.</p>

      <Showcase type='image' src={userJourney} alt='The preliminary user journey for LeadRx'>
        <caption>the preliminary user journey</caption>
      </Showcase>

      <p>The essential functionality of the app remained the same, but the interface was revised to be more conformant to native interface patterns and have fewer visual distractions. The typeface Proxima Nova was introduced to follow the VCH brand guidelines, and the brand colours remained from the previous interface.</p>

      <Showcase type='image' src={oldUI} alt='the previous iteration of the UI'>
        <caption>the previous iteration of the UI</caption>
      </Showcase>

      <Showcase type='image' src={newUI} alt='The updated UI'>
        <caption>the updated UI</caption>
      </Showcase>

      <h2>Development</h2>
      <p>The existing app was developed with the Ionic framework, but, being new to mobile development at the time, I did not have the skillset to take the existing code and implement changes. LeadRx was rewritten using Adobe Phonegap.</p>

      <h2>Outcomes</h2>
      <p>Due to organizational change, the project was halted and was not released to staff.</p>

    </Project>
  </Layout>
)

export default LeadRx
