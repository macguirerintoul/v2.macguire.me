import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 1088px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1152px;
  }

  @media screen and (min-width: 1472px) {
    max-width: 1344px;
  }
`

export default Container
