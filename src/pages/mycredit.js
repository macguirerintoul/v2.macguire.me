import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Project from '../components/Project'
import Figure from '../components/Figure'
import ProjectInformation from '../components/ProjectInformation'
import Showcase from '../components/Showcase'
import MoreProjects from '../components/MoreProjects'

import onboarding from '../videos/mycredit/onboarding.mp4'
import scoreDetails from '../videos/mycredit/score-details.mp4'
import learn from '../videos/mycredit/learn.mp4'
import goals from '../videos/mycredit/goals.mp4'
import otherAccounts from '../media/mycredit/other-accounts.mp4'
import notifications from '../media/mycredit/notifications.mp4'
import confetti from '../media/mycredit/confetti.mp4'

import insights from '../media/mycredit/insights.png'
import memberSegment from '../media/mycredit/member-segment.png'
import targetAudience from '../media/mycredit/target-audience.png'
import persona from '../media/mycredit/persona.png'
import customerJourney from '../media/mycredit/customer-journey.png'
import iterations from '../media/mycredit/iterations.png'
import validation from '../media/mycredit/validation.png'
import principles from '../media/mycredit/principles.png'
import copywriting from '../media/mycredit/copywriting.png'
import colour from '../media/mycredit/colour.png'
import type from '../media/mycredit/type.png'
import styleGuide from '../media/mycredit/style-guide.png'
import appArchitecture from '../media/mycredit/app-architecture.png'
import tips from '../media/mycredit/tips.png'
import decliningScore from '../media/mycredit/decliningScore.png'
import measuringSuccess from '../media/mycredit/measuring-success.png'
import noCredit from '../media/mycredit/no-credit.png'
import whyVancity from '../media/mycredit/why-vancity.png'
import whySeparate from '../media/mycredit/why-separate.png'
import whyDownload from '../media/mycredit/why-download.png'

const TwoByTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    flex: 0 0 50%;
    margin-bottom: 2em;
    padding-right: 1em;
  }
`

const MyCredit = () => (
  <Layout>
    <Project>
      <h1>MyCredit</h1>
      <p>Mobile app for Vancity members to understand and build credit, in order to better support their financial well-being. The four-week project is a hypothetical product for <a href="https://www.vancity.com" target="_blank">Vancity</a>, and is not affiliated with the brand.</p>
      <ProjectInformation client='4 week project for a senior design course' roles={['Content Strategy', 'Project Management', 'Interface Design']} tools={['Sketch', 'Keynote', 'G Suite']} />

      <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
        <iframe src="https://player.vimeo.com/video/305425536?byline=0&portrait=0" style={{'position':'absolute','top':0,'left':0,'width':'100%','height':'100%'}} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
      </div>

      <h2>Problem</h2>
      <p>Despite the importance of credit scores, an estimated 56% of Canadians have never checked their credit score, and 31% don't know the steps to achieve a good score.</p>
      <h2>Opportunity</h2>
      <blockquote cite="http://annualreport.vancity.com/_doc/2017_Vancity_AR%20PDF_LINKS.pdf">
        <p>"With 250,000 of them – close to half of our members – interacting with us almost entirely online or via our mobile app, we’re under pressure to deliver even more mobile and digital functionality."</p>
        <footer>— <a href="http://annualreport.vancity.com/_doc/2017_Vancity_AR%20PDF_LINKS.pdf">Vancity 2017 Annual Report</a></footer>
      </blockquote>

      <p>Vancity's current website offers some credit help, but it lies 4 levels deep in navigation. Their existing banking app has yet to provide resources for credit management.</p>

      <h2>Solution</h2>
      <p>MyCredit is a companion app for Vancity members to manage their credit and set goals that encourage credit building, to better support their financial well-being.</p>

      <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
        <iframe src="https://player.vimeo.com/video/305425815?byline=0&portrait=0" style={{'position':'absolute','top':0,'left':0,'width':'100%','height':'100%'}} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
      </div>

      <Showcase horizontal type='video' src={onboarding} alt='Onboarding for MyCredit' >
        <p>Since credit is unfamiliar for so many people, the onboarding helps members learn a bit about credit while setting up the app.</p>
      </Showcase>

      <Showcase horizontal mediaPosition="after" type='video' src={scoreDetails} alt='The Score Details screen' >
        <p>The Score Details screen provides members with an overview of their score.</p>
      </Showcase>

      <Showcase horizontal type='video' src={learn} alt='The Learn tab' >
        <p>The Learn tab educates members about the five factors that influence their score, and shows them how ther activity is influencing their score.</p>
      </Showcase>

      <Showcase horizontal mediaPosition="after" type='video' src={goals} alt='The Goals tab' >
        <p>The Goals tab allows members to track their progress, see the steps they need to take to improve their score, and set new goals.</p>
      </Showcase>

      <h2>Process</h2>
      <p>After discovering the study by BMO, we decided that as a values-based non-profit organization, Vancity would be a great client to design for. We audited Vancity's existing products and services, and identified frictions.</p>

      <p>From secondary research, we drew two main insights: that people are reluctant to check their score, and that many don't feel the need to until a lender requires it.</p>

      <Showcase type='image' src={insights} alt='Insights' />

      <p>With what we knew, we framed the problem as follows:</p>

      <blockquote>How might we provide guidance that is not overwhelming, encourages members, and provides them with tools to reach their goals?</blockquote>

      <p>After looking at the member segments of Vancity, we chose to focus our project toward the 'disappointed applicant', because compared to the other segments, there was more opportunity to improve their experience.</p>

      <Showcase type='image' src={memberSegment} alt="The member segment we chose to design for: the disappointed applicant." />

      <p>The target audience for MyCredit was Vancity members ages 25 - 45, as this is a period where many people are purchasing cars, paying off student loans, or might be thinking about a mortgage.</p>

      <Showcase type='image' src={targetAudience} alt="The target audience for MyCredit was Vancity members ages 25 - 45." />

      <p>From our research, we developed a persona to guide us in our process.</p>

      <Showcase type='image' src={persona} alt="The persona we developed to guide us in our process" />

      <p>We then mapped out the customer journey to identify where we could improve the experience.</p>

      <Showcase type='image' src={customerJourney} alt="We mapped out the customer journey to identify where we could improve the experience." />

      <p>We developed three design principles to reference throughout the project and keep us focused on what was most important.</p>

      <Showcase type='image' src={principles} alt="The three design principles we developed" />

      <p>Of course, the project wouldn't be complete without user testing, so throughout the 3 weeks of developing the project, we iterated and validated.</p>

      <Showcase type='image' src={iterations} alt="The three weeks of iterations" />

      <p>We conducted user research with nine participants, and went in with three assumptions to validate the project. While it was generally well-received, it was noted that the onboarding needed to be improved.</p>

      <Showcase type='image' src={validation} alt="The results of user testing" />

      <p>We then got to work making iterations and finalizing MyCredit.</p>

      <h2>Details</h2>
      <p>The following explains the details of our design decisions and highlights where decisions were made in MyCredit.</p>

      <Showcase type='image' src={copywriting} alt="Copy was written to be encouraging and informative, and credible but relatable." />

      <Showcase type='image' src={colour} alt="A gradient was used to add depth to Vancity's primary brand red." />

      <Showcase type='image' src={type} alt="Agenda and San Francisco were chosen as typefaces." />

      <Showcase type='image' src={appArchitecture} alt="The full app architecture" />

      <h2>Product</h2>
      <Showcase horizontal type='video' src={otherAccounts} alt="Members can see how their other accounts are influencing their score via MX Technologies.">
        <p>Members can link credit accounts from other financial institutions via MX Technologies to receive payment reminders, view balances, and see how the account influences their score.</p>
      </Showcase>

      <Showcase horizontal type='video' mediaPosition="after" src={notifications} alt="Members receive tailored notifications about their activity.">
        <p>Everyone manages their finances differently. MyCredit recommends actions specific to each member’s habits rather than providing generic information.</p>
      </Showcase>

      <Showcase horizontal type='image' src={tips} alt="Members receive actionable tips on how they can improve their score.">
        <p>Curated information helps members reach their goal by giving them clear, achievable steps within a reasonable timeframe.</p>
      </Showcase>

      <Showcase horizontal type='video' mediaPosition="after" src={confetti} alt="When members reach their goal, we celebrate with them.">
        <p>Celebrating accomplishments and recognizing members for their efforts encourages them along their credit building journey.</p>
      </Showcase>

      <p>In the case that a member's score is declining, after user testing, we decided to always project their score as if they were taking on the good habits presented in MyCredit. Research participants felt that there was enough information in the rest of the app to understand that their score was low, and that they didn't want the visual reminder that it was declining.</p>

      <Showcase type='image' src={decliningScore} alt="Prediction of future growth that could be achieved provides encouragement and hope to build their score." />

      <p>In the case that a member has no credit, MyCredit offers an explanation of why it's important and recommends ways to start.</p>

      <Showcase type='image' src={noCredit} alt="In the case that a member has no credit, MyCredit offers an explanation of why it's important and recommends ways to start." />

      <h2>Wrap-Up</h2>
      <h3>Key Performance Indicators</h3>

      <Showcase type='image' src={measuringSuccess} alt="Measuring success" />

      <h3>Dependencies</h3>
      <TwoByTwo>
        <div>
          <h4>Borrowell</h4>
          <p>A vendor that provides credit scores of individuals to financial institutions.</p>
        </div>
        <div>
          <h4>MX Technologies</h4>
          <p>A vendor that provides access to information about banking and credit acounts across all financial institutions.</p>
        </div>
        <div>
          <h4>Central 1</h4>
          <p>As a service provider to Vancity and other credit unions, Central 1 will need to collect and manage additional data from members.</p>
        </div>
        <div>
          <h4>Additional Staff</h4>
          <p>Vancity or their digital partners will require additional managers, designers, and developers to maintain a second mobile app.</p>
        </div>
      </TwoByTwo>

      <h2>Appendix</h2>

      <Showcase type='image' src={whyVancity} alt="Why Vancity?" />
      <Showcase type='image' src={whySeparate} alt="Why a separate app?" />
      <Showcase type='image' src={whyDownload} alt="Why would people download MyCredit?" />

      <MoreProjects projects={['roar', 'winebox', 'leadrx', 'privileged']}/>

      <script src="https://player.vimeo.com/api/player.js"></script>
    </Project>
  </Layout>
)

export default MyCredit
