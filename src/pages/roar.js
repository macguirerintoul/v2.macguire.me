import React from 'react'

import Layout from '../components/layout'
import Project from '../components/Project'
import Figure from '../components/Figure'
import ProjectInformation from '../components/ProjectInformation'

import roarRegistrationTop from '../images/roar-registration-top.png'

const ROAR = () => (
  <Layout>
    <Project>
      <h1 className='title is-1'>ROAR</h1>
      <h2 className='title is-2'>Intro</h2>
      <p>Regional Orientation Automated Registration (ROAR) is a web app that allows Vancouver Coastal Health to more easily manage new hires and their staff orientation sessions.</p>
      <Figure imgSrc={roarRegistrationTop} alt='Screenshot of the Registration page of ROAR' caption='The Registration page of ROAR' />
      <ProjectInformation client='Vancouver Coastal Health' roles={['Full-Stack Web Development', 'Interface Design']} tools={['React', 'Laravel']} />
      <h2 className='title is-2'>Problem</h2>
      <p>Vancouver Coastal Health is responsible for the training of over 15 thousand healthcare staff and volunteers. The process of registering a newly-hired employee into their mandatory training sessions used to involve numerous back-and-forth emails, PDF forms, manual spreadsheet data entry, and hand-editing a Word template to produce each employee’s training schedule.</p>
      <h2 className='title is-2'>Solution</h2>
      <p>In order to modernize the workflow, we worked alongside the Clinical Education and Recruitment Services teams to design and develop a web app to generate each employee’s schedule and manage education sessions.</p>
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
      <p>According to CEAs, they process around four thousand new employee registrations per year. It takes an estimated [time amount] total for a CEA to manually copy the data, create the employee’s schedule, register the employee for the physical session on a different system, and notify the employee. Based on this, we conclude that ROAR saves [total time] of CEA time per year.</p>
      <h2 className='title is-2'>Reflections</h2>
      <p>Although the project brought great improvements to the workflow and the employee experience for CEAs and recruitment staff, more of an impact could have been made if an experience design approach was applied. (continued soon)</p>
    </Project>
  </Layout>
)

export default ROAR
