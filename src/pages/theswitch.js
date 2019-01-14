import React from 'react'

import Layout from '../components/layout'
import Project from '../components/Project'
import ProjectInformation from '../components/ProjectInformation'
import Showcase from '../components/Showcase'
import MoreProjects from '../components/MoreProjects'

import primaryVideo from '../videos/the-switch/primary.mp4'
import landingVideo from '../videos/the-switch/landing.mp4'
import secondaryVideo from '../videos/the-switch/secondary.mp4'
import instagramVideo from '../videos/the-switch/instagram.mp4'
import facebookVideo from '../videos/the-switch/facebook.mp4'
import purchaseVideo from '../videos/the-switch/purchase.mp4'

import productApprehension from '../images/the-switch-product-apprehension.jpg'
import establishedHabits from '../images/the-switch-established-habits.jpg'
import opportunity from '../images/the-switch-opportunity.jpg'
import persona from '../images/the-switch-persona.jpg'
import customerJourney from '../images/the-switch-customer-journey.jpg'
import stories from '../images/the-switch-stories.jpg'
import email from '../images/the-switch-email.jpg'

const TheSwitch = () => (
  <Layout>
    <Project>
      <h1>The Switch</h1>
      <p>An online introduction to menstrual cups aiming to address first-time user apprehensions and increase customer confidence. The four-week project is a hypothetical product for <a href='https://lenacup.com/' target='_blank' rel="noreferrer noopener">Lena</a>, and is not affiliated with the brand.</p>
      <ProjectInformation client='4 week project for a senior design course' roles={['Content Strategy', 'Project Management']} tools={['Keynote', 'G Suite']} />
      <Showcase type='video' src={primaryVideo} alt='The primary information presented in The Switch' >
        <p>The Switch is comprised of five steps which answer major questions about menstrual cups, to reduce frictions within the customer journey. Content above the fold is concise to ease visitors in, with further details provided below.</p>
      </Showcase>

      <h2>My Contribution</h2>
      <p>As the project manager, I ensured the various parts of the project were being completed according to our project timeline, and made sure they were cohesive. As the content strategist, I wrote and validated copy in the voice of a 'supportive older sister'. I also developed and promoted a qualitative and quantitative research survey that received over 450 responses, which heavily informed the project's direction.</p>

      <h2>Problem</h2>
      <p>Despite physical, environmental, and financial benefits of menstrual cups, lack of exposure in mainstream media and markets has prevented their widespread use. The majority of menstruators already use tampons, pads, and/or liners, and are not convinced to undertake the physical and emotional risk of switching menstrual hygiene products. While the Lena Cup is <a href="https://www.cosmopolitan.com/sex-love/a13126155/best-menstrual-cups/" target="_blank" rel="noopener noreferrer">recognized</a> as the <a href="https://www.bustle.com/p/the-5-best-menstrual-cups-for-beginners-8797916" target="_blank" rel="noopener noreferrer">#1 cup for beginners</a>, Lena's existing site does not effectively communicate the product's value and benefits to potential customers.</p>

      <div style={{padding:'56.25% 0 0 0', position:'relative'}}><iframe title="The Switch Introduction Video" src="https://player.vimeo.com/video/301757528?title=0&byline=0&portrait=0" style={{position:'absolute',top:0,left:0, width:'100%', height: '100%'}} frameborder="0" webkitallowfullscreen mozallowfullscreen AllowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

      <h2>Solution</h2>
      <p>The Switch by Lena directly addresses false assumptions, apprehensions, and concerns consumers may have about menstrual cups.</p>

      <Showcase type='video' src={landingVideo} alt='The new landing page' >
        <p>Leveraging the brand's #1 status and encouraging visitor engagement, The Switch acts as a hero element on Lena's landing page to capture newcomers. Lena's existing home page content remains below.</p>
      </Showcase>

      <Showcase type='video' src={primaryVideo} alt='Primary information in The Switch' >
        <p>The Switch aims to efficiently and clearly answer potential customers’ questions.</p>
      </Showcase>

      <Showcase type='video' src={secondaryVideo} alt='Secondary information in The Switch' >
        <p>Each step of the onboarding has secondary information associated with it to answer follow-up questions. </p>
      </Showcase>

      <p>Our survey of over 450 respondents suggested that most customers were convinced to try a menstrual cup by a close friend or sibling. To create a meaningful experience, the team decided to strategize content from the perspective of a supportive, older sister. As the content strategist, I ensured that all content followed this principle and had a consistent tone and attitude.</p>

      <div style={{padding:'56.25% 0 0 0', position:'relative'}}><iframe title="The Switch Persona Video" src="https://player.vimeo.com/video/301758677?title=0&byline=0&portrait=0" style={{position:'absolute',top:0,left:0, width:'100%', height: '100%'}} frameborder="0" webkitallowfullscreen mozallowfullscreen AllowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

      <h2>Process</h2>
      <p>After identifying business problems within the menstrual cup market, we identified frictions with Lena's existing website. Information was scattered across multiple pages, and neglected to highlight the product’s extensive benefits. We then conducted a survey to understand peoples' perception of cups and the factors influencing this perception, in order to design a digital experience that encouraged visitors to try the product.</p>

      <Showcase type='image' src={productApprehension} alt='Business Problem A: Product Apprehension' >
        <p>Business Problem A: Product Apprehension.</p>
      </Showcase>

      <Showcase type='image' src={establishedHabits} alt='Business Problem B: Established Habits' >
        <p>Business Problem B: Established Habits.</p>
      </Showcase>

      <p>After considering the various opportunities for this project as well as its scope and timeframe, we focused on addressing the apprehensions of potential customers.</p>

      <Showcase type='image' src={opportunity} alt='Opportunity for the project' >
        <p>The opportunity: address apprehensions for those who have not used a menstrual cup before.</p>
      </Showcase>

      <p>We then developed personas from common themes in our research: we chose to design for the 'Accustomed & Uncertain' menstruator, who uses other menstrual products and does not know enough about cups to switch over.</p>

      <Showcase type='image' src={persona} alt='Persona: Accustomed & Uncertain' >
        <p>One of the personas derived from our research: accustomed & uncertain.</p>
      </Showcase>

      <p>The nature of the product lends itself to a rocky customer journey. Our research suggests the struggle of switching is recognized by the majority of cup users, but is said to be well worth it. Considering the business problems, we chose to address the pre-purchase stages and aimed to convey the value of menstrual cups more effectively.</p>

      <Showcase type='image' src={customerJourney} alt='The Lena customer journey' >
        <p>The customer journey map of someone purchasing a Lena Cup.</p>
      </Showcase>

      <p>For the awareness stage, we considered how customers might find out about The Switch.</p>
      <Showcase horizontal type='video' src={instagramVideo} alt='Entice: Instagram Ads' >
        <p>Because Lena is an online brand, social media is a seamless touchpoint. Instagram ads capture mobile customers, as well as promote Lena's presence.</p>
      </Showcase>

      <Showcase type='video' src={facebookVideo} alt='Entice: Facebook Ads' >
        <p>Facebook ads capture desktop users and promote Lena’s page.</p>
      </Showcase>

      <Showcase type='video' src={purchaseVideo} alt='Purchase: Risk Free' >
        <p>The final step of the onboarding emphasizes Lena's customer satisfaction policy and reminds visitors that they can return their cup for a full refund.</p>
      </Showcase>

      <p>Lena's current site has a stories section, but doesn't feature any content related to personal experiences with cups. We found this was a missed opportunity, seeing as based on the number of reviews and discussion online, cup users love to share their stories. Our research also suggested that if people could see how using a cup would impact their lifestyle, they would feel more comfortable with them.</p>

      <Showcase horizontal type='image' src={email} alt='Extend: Email' >
        <p>To keep customers engaged with the brand, Lena can reach out to customers to make sure everything is going okay and ask them to share their story.</p>
      </Showcase>

      <Showcase type='image' src={stories} alt='Extend: Stories' >
        <p>Customers would then work with Lena to have their experience turned into a narrative that could help convince others to try a Lena Cup.</p>
      </Showcase>
      <h2>Reflection</h2>
      <p>Throughout the project, we may have been too ambitious about the issues we were trying to address. Trying to reduce gender dysphoria with a brand that was fairly feminine was difficult, and reducing the stigma around periods could have been an entire project on its own. The team learned a lot trying to address these issues, but deciding on one opportunity earlier in the project would have allowed more time for iteration and validation.</p>
      <MoreProjects projects={['roar', 'winebox', 'leadrx', 'privileged']}/>
    </Project>
  </Layout>
)

export default TheSwitch
