import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import theSwitchThumbnail from '../images/thumbnail-the-switch.jpg';
import roarThumbnail from '../images/thumbnail-roar.jpg';
import wineboxThumbnail from '../images/thumbnail-winebox.jpg';
import leadrxThumbnail from '../images/thumbnail-leadrx.jpg';
import privilegedThumbnail from '../images/thumbnail-privileged.png';

const StyledProjectThumbnail = styled.div`
  width: 25%;
  margin-bottom: 2rem;
  h6 {
    margin-bottom: 0.5rem;
  }
  @media all and (max-width: 768px) {
    width: 50%;
  }
  @media all and (max-width: 375px) {
    width: 100%;
  }
  :not(:last-child) {
    padding-right: 1rem;
  }
`

const StyledThumbnailImage = styled.div`
  width: 100%;
  min-height: 6rem;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center;
	transition: all 0.25s ease;
  :hover {
    transform: scale(1.02);
  }
`

function ProjectThumbnail(props) {
  let thumbnailImage, name;
  if (props.project == "theSwitch") {
    thumbnailImage = <StyledThumbnailImage src={theSwitchThumbnail} />;
    name = "The Switch";
  } else if (props.project == "roar") {
    thumbnailImage = <StyledThumbnailImage src={roarThumbnail} />;
    name = "ROAR";
  } else if (props.project == "winebox") {
    thumbnailImage = <StyledThumbnailImage src={wineboxThumbnail} />;
    name = "Winebox";
  } else if (props.project == "leadrx") {
    thumbnailImage = <StyledThumbnailImage src={leadrxThumbnail} />;
    name = "LeadRx";
  } else if (props.project == "privileged") {
    thumbnailImage = <StyledThumbnailImage src={privilegedThumbnail} />;
    name = "Privileged.tech";
  }
  return (
    <StyledProjectThumbnail>
      <Link to={"/" + props.project} style={{width: '100%'}}>
        <h6>{name}</h6>
        {thumbnailImage}
      </Link>
    </StyledProjectThumbnail>
  )
}

export default ProjectThumbnail
