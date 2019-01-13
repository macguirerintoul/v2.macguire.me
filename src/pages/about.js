import React from 'react'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'
import Lightbox from 'react-images'

import Layout from '../components/layout'
import Project from '../components/Project'
import Showcase from '../components/Showcase'
import AboutLists from '../components/AboutLists'
import UnorderedList from '../components/molecules/UnorderedList'

import resume from '../media/Macguire Rintoul - Resume.png'

const StyledHistory = styled.div`
  font-size: 0.8em;
  margin: 0 0 1em 0 !important;
  label {
    font-family: 'colfaxBold';
  }
`

const History = (props) => (
  <StyledHistory>
    <label>{props.label}</label>
    <ul>
      {props.items.map(function(name, index){
        return <li key={ index }>{name}</li>;
      })}
    </ul>
  </StyledHistory>
)

class About extends React.Component {
  constructor () {
		super();
		this.state = {
			lightboxIsOpen: false,
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
	}
  openLightbox (index, event) {
		this.setState({
			lightboxIsOpen: true,
		});
	}
	closeLightbox () {
		this.setState({
			lightboxIsOpen: false,
		});
	}
  render() {
    return(
      <Layout>
      <Helmet>
        <title>About | Macguire Rintoul — Portfolio</title>
        <link rel="canonical" href="https://mrintoul.com/about" />
      </Helmet>
      <Project>
          <h1>Yours Truly</h1>

          <p>I'm Macguire: an experience designer, full-stack web developer, hackathon participant, music producer, and Interactive Arts & Technology undergraduate at Simon Fraser University in Vancouver, BC.</p>

          <p>When I'm not studying or learning a new web framework, you can catch me <a href="https://www.mixcloud.com/weirdnite/" target="_blank" rel="noopener noreferrer">DJing</a>, <a href="https://soundcloud.com/weirdnite" target="_blank" rel="noopener noreferrer">making my own beats</a>, <a href="https://www.youtube.com/watch?v=Y6LMuJN_3mU" target="_blank" rel="noopener noreferrer">editing travel videos</a>, or hiking the Swiss Alps with my mom.</p>

          <h2>Resume</h2>
          <img src={resume} alt="Resume - Macguire Rintoul" style={{boxShadow: 'none', marginBottom: '2rem'}}/>

          <p>
            <a href="https://drive.google.com/open?id=1ofsMtTyvJxCSjYBhOo5Bnp5K4VxsXLuj" target="_blank" rel="noopener noreferrer">Resume (PDF)</a> — <a href="https://www.linkedin.com/in/mrintoul/" target="_blank" rel="noopener noreferrer">LinkedIn</a> — <a href="https://github.com/mrintoul" target="_blank" rel="noopener noreferrer">GitHub</a> — <a href="https://open.spotify.com/artist/28vG51nTNaNgITsMjBbTHm" target="_blank" rel="noopener noreferrer">Spotify</a>
          </p>
          </Project>
      </Layout>
    );

  }
}

export default About
