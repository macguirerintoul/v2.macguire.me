import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Project from '../components/Project'

const NotFoundPage = () => (
  <Layout>
    <Project>
      <h1>Where did I go wrong... I lost a friend...</h1>
      <h3>Somewhere along in the bitterness...</h3>
      <p>This means the page wasn't found. <Link to='/'>Have another go?</Link></p>
    </Project>
  </Layout>
)

export default NotFoundPage
