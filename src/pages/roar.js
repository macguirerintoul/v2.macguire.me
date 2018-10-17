import React from 'react'

import Layout from '../components/layout'
import Project from '../components/Project'
import Figure from '../components/Figure'
import ProjectInformation from '../components/ProjectInformation'
import Showcase from '../components/Showcase'

import dashboardScheduleVideo from '../videos/roar/DashboardSchedule.mp4'
import registrationVideo from '../videos/roar/Registration.mp4'
import roarRegistrationTop from '../images/roar-registration-top.png'
import roarDashboard from '../images/roar-dashboard.png'

const ROAR = () => (
  <Layout>
    <Project>
      <h1 className='title is-1'>ROAR</h1>
      <p>Regional Orientation Automated Registration (ROAR) is a web app that allows Vancouver Coastal Health to more easily manage new hires and their staff orientation sessions.</p>
      <Showcase type='video' src={dashboardScheduleVideo} alt='Viewing registrations and a schedule'>
        <p>Viewing registrations and a schedule</p>
      </Showcase>
      <ProjectInformation context='Vancouver Coastal Health' roles={['Full-Stack Web Development', 'Interface Design']} tools={['Sketch', 'React', 'Laravel']} />
      <h2 className='title is-2'>Problem</h2>
      <p>Vancouver Coastal Health is responsible for the training of over 15 thousand healthcare staff and volunteers. The process of registering a newly-hired employee into their mandatory training sessions used to involve numerous emails, PDF forms, manual data entry, and hand-editing a Word template to produce each employee’s training schedule.</p>
      <h2 className='title is-2'>Solution</h2>
      <p>In order to modernize the workflow, we worked alongside the Clinical Education and Recruitment Services teams to design and develop a web app to generate each employee’s schedule and manage education sessions.</p>
      <Showcase type='video' src={registrationVideo} alt='The registration screen of ROAR'>
        <p>To register a new hire for training, a recruitment associate fills out the registration form</p>
      </Showcase>
      <Showcase src={roarDashboard} alt='The Dashboard screen of ROAR'>
        <p>The Dashboard displays registrations that have been submitted along with their status</p>
      </Showcase>
      <Showcase mediaPosition='left' src={roarDashboard} alt='The Sessions screen of ROAR'>
        <p>As future training sessions are scheduled, they can be added to ROAR from the Sessions page and will display as options for registration</p>
      </Showcase>
      <Showcase mediaPosition='right' src={roarDashboard} alt='The Schedule page of ROAR'>
        <p>The employee's schedule is generated based on the registration form, and can be reviewed in-browser</p>
      </Showcase>
      <h2 className='title is-2'>Approach</h2>
      <p>Clinical Education staff initially approached our team asking how the amount of manual labour involved in the registration process could be reduced. After evaluating the workflow from end to end, we confirmed that much of the work that people were doing could be accomplished using relatively simple technologies. This led us to an initial goal:</p>
      <blockquote>leverage computing power to save CEAs hours every week that they could spend contributing to bigger-picture projects or handling their various other duties.</blockquote>
      <p>We also noted that the workflow was not centralized in any way — the first step took the form of a PDF attached to an email; the next step involved a spreadsheet stored on a network drive; the step after that involved a Word document in a subfolder (which was then saved as another PDF and emailed to the employee). This presented another goal:</p>
      <blockquote>centralize the registration process so that all relevant information is accessible within a single system.</blockquote>
      <p>There was also an opportunity to improve the process for the staff that were submitting the registration — rather than providing a PDF that had to be downloaded with an embedded button to save and send in an email (which seemed to only work intermittently), we set a new goal:</p>
      <blockquote>rethink the way the registration is submitted to eliminate work for the person submitting the form.</blockquote>
      <h2 className='title is-2'>Constraints</h2>
      <p>Before we began designing, we laid out some considerations to keep in mind:</p>
      <ul>
        <li>the registration form has to be accessible to anybody within the health authority</li>
        <li>the information received from submissions had to be accessible only by CEAs</li>
        <li>the deadline for launch was long enough to allow thoughtful design and account for development time, but ROAR was only one of many projects on the go</li>
      </ul>
      <h2 className='title is-2'>Design</h2>
      <p>coming soon</p>
      <h2 className='title is-2'>Implementation</h2>
      <p>We used Laravel and React to create a system that was available over the Internet to anyone that needed to submit a registration, and to CEAs no matter the location. We also used the Ant Design UI library to achieve a product that was visually similar to the mockups without spending too much time creating custom components.</p>
      <h2 className='title is-2'>Outcomes</h2>
      <p>coming soon</p>
      <h2 className='title is-2'>Reflections</h2>
      <p>coming soon</p>
    </Project>
  </Layout>
)

export default ROAR
