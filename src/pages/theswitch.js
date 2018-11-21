import React from 'react'

import Layout from '../components/layout'
import Project from '../components/Project'
import ProjectInformation from '../components/ProjectInformation'
import Showcase from '../components/Showcase'

import primaryVideo from '../videos/the-switch/primary.mp4'
import landingVideo from '../videos/the-switch/landing.mp4'
import secondaryVideo from '../videos/the-switch/secondary.mp4'
import benefitsVideo from '../videos/the-switch/benefits.mp4'
import instagramVideo from '../videos/the-switch/instagram.mp4'
import facebookVideo from '../videos/the-switch/facebook.mp4'
import purchaseVideo from '../videos/the-switch/purchase.mp4'

import tamponsImage from '../images/the-switch-tampons.png'
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
      <p>A web app introduction to menstrual cups that aims to address apprehensions and increase customer confidence. The four-week project is a hypothetical product for <a href='https://lenacup.com/' target='_blank'>Lena</a>, and is not affiliated with the brand.</p>
      <ProjectInformation client='4 week project for a senior design course' roles={['Content Strategy', 'Project Management']} tools={['Keynote', 'G Suite']} />
      <Showcase type='video' src={primaryVideo} alt='The primary information presented in The Switch' >
        <p>The Switch has five steps that answer big questions and lessen frictions within the customer journey. Primary content is concise to ease visitors in, with more detailed information available below.</p>
      </Showcase>

      <h2>Problem</h2>
      <p>Despite the physical, environmental, and financial benefits of menstrual cups, lack of exposure in mainstream media has slowed their normalization. Furthermore, the majority of people that menstruate already use tampons, pads, or liners, and aren’t motivated to take the physical and emotional risk of switching products. While the Lena Cup is <a href="https://www.cosmopolitan.com/sex-love/a13126155/best-menstrual-cups/" target="_blank">recognized</a> as the <a href="https://www.bustle.com/p/the-5-best-menstrual-cups-for-beginners-8797916" target="_blank">#1 cup for beginners</a>, Lena's existing site does not effectively communicate the product's value and benefits.</p>

      <div style={{padding:'56.25% 0 0 0', position:'relative'}}><iframe src="https://player.vimeo.com/video/301757528?title=0&byline=0&portrait=0" style={{position:'absolute',top:0,left:0, width:'100%', height: '100%'}} frameborder="0" webkitallowfullscreen mozallowfullscreen AllowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

      <h2>Solution</h2>
      <p>The Switch by Lena addresses false assumptions and apprehensions about menstrual cups head-on, to alleviate the concerns people have about trying one.</p>

      <Showcase type='video' src={landingVideo} alt='The new landing page' >
        <p>Leveraging the brand's #1 status and encouraging visitors to engage, The Switch acts as a hero element on Lena's landing page to capture newcomers.</p>
      </Showcase>

      <Showcase type='video' src={primaryVideo} alt='Primary information in The Switch' >
        <p>The Switch aims to answer questions as soon as possible, so potential customers find what they're looking for.</p>
      </Showcase>

      <Showcase type='video' src={secondaryVideo} alt='Secondary information in The Switch' >
        <p>Each step of the onboarding has secondary information associated with it, to answer follow-up questions. To keep the experience authentic, the content was created and organized as if it were coming from a supportive older sister. Improved information design delivers details in a more understandable way.</p>
      </Showcase>

      <div style={{padding:'56.25% 0 0 0', position:'relative'}}><iframe src="https://player.vimeo.com/video/301758677?title=0&byline=0&portrait=0" style={{position:'absolute',top:0,left:0, width:'100%', height: '100%'}} frameborder="0" webkitallowfullscreen mozallowfullscreen AllowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

      <h2>Process</h2>
      <p>After identifying business problems in the menstrual cup market, we identified frictions with Lena's existing website. Information was distributed across multiple pages, and described the product without effectively explaining how it was better than alternatives. We then conducted a survey to understand peoples' perceptions of cups and suggest how they could be swayed.</p>

      <Showcase type='image' src={productApprehension} alt='Business Problem A: Product Apprehension' />

      <Showcase type='image' src={establishedHabits} alt='Business Problem B: Established Habits' />

      <p>While we acknowledged the various opportunities for the project, we focused on addressing apprehensions considering the scope and timeframe.</p>

      <Showcase type='image' src={opportunity} alt='Opportunity for the project' />

      <p>We then developed personas from common themes in our research. We chose to design for 'Accustomed & Uncertain', someone who uses other menstrual products and doesn't know enough about cups to switch over.</p>

      <Showcase type='image' src={persona} alt='Persona: Accustomed & Uncertain' />

      <p>The Lena customer journey is a bit rocky due to the nature of the product. The struggle of switching is recognized by the majority of cup users, but is said to be well worth it. Considering the business problems, we chose to address the pre-purchase stages and aimed to convey the value of menstrual cups more effectively.</p>

      <Showcase type='image' src={customerJourney} alt='The Lena customer journey' />

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
    </Project>
  </Layout>
)

export default TheSwitch
