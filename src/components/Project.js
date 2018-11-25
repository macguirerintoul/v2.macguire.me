import React, {Component} from 'react'
import styled from 'styled-components'

import Content from './Content'

const StyledProject = styled.div`
  h1 {
    color: #0024D4;
    font-size: 4.3em;
    line-height: 1.2em;
    text-shadow: 3px 3px #D60C1A;
  }
  max-width: 50em;
  margin: auto;
  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 2em;
    }
  }
`

class Project extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('windowscroll')
    window.scrollTo(0, 0);
  }
  render() {
    return(
      <StyledProject>
        <Content>
          {this.props.children}
        </Content>
      </StyledProject>
    );
  }
}

export default Project
