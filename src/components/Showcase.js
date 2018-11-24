import React, {Component} from 'react'
import styled from 'styled-components'
import Lightbox from 'react-images'

const StyledShowcase = styled.div`
  .lightbox {
    transition: 0.5s;
  }
  div {
    min-width: 50%;
  }
  p {
    font-size: 0.8em;
  }
  display: flex;
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
  text-align: ${props => props.horizontal ? 'left' : 'center'};
  div:not(:first-child) {
    margin: ${props => props.horizontal ? '0 2em' : '1em 0'};
  }
  img, video {
    max-height: 80vh;
  }
  img {
    cursor: pointer;
  }
  align-items: center;
  margin: 2em 0;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    div:not(:first-child) {
      margin: 1em 0;
    }
  }
`

class Showcase extends Component {
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
    let media, first, second;
    if (this.props.type == 'image') {
      media = <div><img src={this.props.src} alt={this.props.alt} onClick={this.openLightbox} /><Lightbox className="lightbox"
          images={[{ src: this.props.src} ]}
          isOpen={this.state.lightboxIsOpen}
          onClose={this.closeLightbox}
          backdropClosesModal
          showImageCount={false}
        /></div>;
    } else if (this.props.type == 'video') {
      media = <video src={this.props.src} title={this.props.alt} autoPlay muted loop></video>
    }
    if (this.props.mediaPosition == 'after') {
      first = this.props.children;
      second = media;
    } else {
      first = media;
      second = this.props.children;
    }
    return(
      <StyledShowcase {...this.props}>
        <div>
          {first}
        </div>
        <div>
          {second}
        </div>
      </StyledShowcase>
    );
  }
}

export default Showcase
