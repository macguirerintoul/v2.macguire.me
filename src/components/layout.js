import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Container from './Container'
import Footer from './footer'

import icon32 from '../favicon-32x32.png'

import './layout.css'

const LayoutContent = styled.div`
  margin-top: 4em;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: "I'm Macguire, and I am: an experience designer + developer, and an undergrad at Simon Fraser University in Vancouver, BC." },
            { name: 'keywords', content: 'portfolio, experience, design, designer, developer, siat, sfu' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${icon32}`}
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutContent>
          <Container>
            {children}
          </Container>
        </LayoutContent>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
