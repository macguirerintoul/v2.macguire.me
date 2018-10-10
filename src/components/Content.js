import styled from 'styled-components'

const Content = styled.div`
  & li + li {
    margin-top: 0.25em;
  }

  & p:not(:last-child),
  & dl:not(:last-child),
  & ol:not(:last-child),
  & ul:not(:last-child),
  & blockquote:not(:last-child),
  & pre:not(:last-child),
  & table:not(:last-child) {
    margin-bottom: 1em;
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    color: #363636;
    font-weight: 600;
    line-height: 1.125;
  }

  & h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  & h1:not(:first-child) {
    margin-top: 1em;
  }

  & h2 {
    font-size: 1.75em;
    margin-bottom: 0.5714em;
  }

  & h2:not(:first-child) {
    margin-top: 1.1428em;
  }

  & h3 {
    font-size: 1.5em;
    margin-bottom: 0.6666em;
  }

  & h3:not(:first-child) {
    margin-top: 1.3333em;
  }

  & h4 {
    font-size: 1.25em;
    margin-bottom: 0.8em;
  }

  & h5 {
    font-size: 1.125em;
    margin-bottom: 0.8888em;
  }

  & h6 {
    font-size: 1em;
    margin-bottom: 1em;
  }

  & blockquote {
    background-color: whitesmoke;
    border-left: 5px solid #dbdbdb;
    padding: 1.25em 1.5em;
  }

  & figure {
    margin-bottom: 2em;
  }

  & img {
    border-radius: 0.6em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  & ol {
    list-style: decimal outside;
    margin-left: 2em;
    margin-top: 1em;
  }

  & ul {
    list-style: disc outside;
    margin-left: 2em;
    margin-top: 1em;
  }

  & ul ul {
    list-style-type: circle;
    margin-top: 0.5em;
  }

  & ul ul ul {
    list-style-type: square;
  }
`

export default Content
