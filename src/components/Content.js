import styled from 'styled-components'

const Content = styled.div`
  font-size: 1.5em;

  blockquote footer {
    text-align: right;
  }

  li + li {
    margin-top: 0.25em;
  }

  & a {
    display: inline-block;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.1s;
    transition-property: transform;
    transition-timing-function: ease-out;
    border-bottom: 1px solid;
    line-height: 1.1;
    :hover, :focus, :active {
      transform: translateY(-0.05em);
    }
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
    color: #000;
    text-shadow: none;
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
    margin-bottom: 0.5rem;
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
    background-color: rgba(0, 0, 0, 0.02);
    border-left: 5px solid #0024D4;
    padding: 1.25em 1.5em;
  }

  & figure {
    margin-bottom: 2em;
  }

  img, video {
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  & ol {
    list-style: decimal outside;
    margin-left: 2em;
    margin-top: 1em;
  }

  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 1em;
    text-indent: -1em;
    li:before {
     content: '— ';
    }
  }

  & ul ul {
    list-style-type: circle;
    margin-top: 0.5em;
  }

  & ul ul ul {
    list-style-type: square;
  }

  & label {
    color: #000;
  }

  @media only screen and (max-width: 1024px) {
    margin: 5rem;
  }

  @media only screen and (max-width: 600px) {
    margin: 0 1em;
    h1 {
      font-size: 1em;
    }
    p {
      font-size: 0.8em;
    }
  }


`

export default Content
