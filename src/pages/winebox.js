import React from 'react'

import Layout from '../components/layout'
import Project from '../components/Project'
import ProjectInformation from '../components/ProjectInformation'
import Showcase from '../components/Showcase'
import MoreProjects from '../components/MoreProjects'

import persona from '../images/winebox-persona.png'
import experienceMapOne from '../images/winebox-experience-map-1.jpg'
import experienceMapTwo from '../images/winebox-experience-map-2.jpg'

import collection from '../videos/winebox/collection.mp4'
import addWineVideo from '../videos/winebox/add-wine.mp4'
import shareVideo from '../videos/winebox/share.mp4'
import lastWineVideo from '../videos/winebox/remove-last-bottle.mp4'

const Winebox = () => (
  <Layout>
    <Project>
      <h1>Winebox</h1>
      <p>Winebox is an iPad app that assists in keeping track of a personal wine collection.</p>
      <ProjectInformation client='6 week project for a senior design course' roles={['Interface Design', 'Interaction Design', 'User Research']} tools={['Sketch', 'Flinto']} />
      <Showcase horizontal type='video' src={collection} alt='The Collection screen of Winebox' caption='The Collection screen of Winebox'>
        <p>The collection screen of Winebox</p>
      </Showcase>

      <h2>My Contribution</h2>
      <p>As one of the interface designers, I was responsible for designing the collection tab of Winebox, as well as features in other tabs. As the primary researcher, I developed a survey of 18 respondents, and conducted interviews and think-aloud user tests with various wine collectors to inform and validate the project. At the end of the course, I revised the visual design of the interface.</p>

      <h2>Problem</h2>
      <p>The initial ideas for the product began from the observation that casual wine collectors were often forgetting the details of their wines. We investigated the various stages of wine enthusiasm through interviews and a survey, and found that current options for keeping track of a wine collection aren't quite ideal.</p>

      <h4>Is there anything that frustrates you about collecting wine?</h4>
      <blockquote>
        <p>"Forgetting the wines I love the best."</p>
        <p>"I can never remember the cost, where it came from or how long it will last."</p>
        <p>"The price! lol but I find it's difficult to store and categorize."</p>
        <footer>— Wine Collector Research Survey</footer>
      </blockquote>

      <h4>Please describe methods you currently use to organize and manage your collection. Do any of these methods incorporate technology?</h4>
      <blockquote>
        <p>"None, but I could see that being useful."</p>
        <p>"I don’t use any. Masking tape and permanent marker to mark the ones my wife can’t open"</p>
        <p>"Nothing organized."</p>
        <footer>— Wine Collector Research Survey</footer>
      </blockquote>

      <h2>Solution</h2>
      <p>Winebox allows people to more easily understand and manage their wine collection, no matter how serious of a collector they are. Winebox accommodates Sunday sippers and seasoned sommeliers, and tells you everything you would like to know about your wines before you have to ask.</p>

      <Showcase horizontal type='video' src={collection} alt='The Collection screen of Winebox'>
        <p>The collection screen gives an overview of the collection at a glance, and organizes wines into smart categories</p>
      </Showcase>

      <Showcase horizontal type='video' src={addWineVideo} alt='Adding a wine to winebox' mediaPosition='after'>
        <p>Wines can be added by scanning a barcode, or manually entering information</p>
      </Showcase>

      <Showcase horizontal type='video' src={shareVideo} alt='Sharing a history item' >
        <p>History items can be shared with friends to recommend a great bottle</p>
      </Showcase>

      <Showcase horizontal type='video' src={lastWineVideo} alt='Removing the last of a wine from Winebox' mediaPosition='after'>
        <p>A confirmation dialog is shown when the last wine is about to be removed</p>
      </Showcase>

      <h2>Process</h2>
      <p>To better understand the opportunity, we interviewed five semi-serious wine collectors and collected surveys from eighteen. From this research, we were able to identify wants and frustrations, and better understand the ways in which wine was part of people's lives.</p>

      <Showcase type='image' src={persona} alt='Zameel, the persona used for Winebox'>
        <p>We developed a persona based on our research to help keep the audience in mind while designing.</p>
      </Showcase>

      <p>In order to better serve collectors, we focused on addressing frustrations that were brought up consistently when they were asked about their collections. The source of many struggles seemed to be that people couldn’t remember the details that they wanted in that moment. This led us to frame the challenge:</p>

      <blockquote>How might we help people keep tabs on their collections and avoid losing the details?</blockquote>

      <p>Further research revealed that people engage with wine in a variety of contexts; at home, at dinner with friends, at liquor stores. We also noted that people could make use of their collection information in any of these contexts.</p>
      <blockquote>How might we provide a companion for the various situations that surround wine?</blockquote>

      <Showcase type='image' src={experienceMapOne} alt='The first part of the experience map for Zameel'>
        <p>We mapped out our persona's experience across common wine-related situations to identify frictions and opportunities.</p>
      </Showcase>

      <Showcase type='image' src={experienceMapTwo} alt='The second part of the experience map for Zameel'>
        <p>The experience map included different contexts of use, although we ultimately ended up designing for use at home.</p>
      </Showcase>

      <MoreProjects projects={['theswitch', 'roar', 'leadrx', 'privileged']}/>
    </Project>
  </Layout>
)

export default Winebox
