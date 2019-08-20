import React from 'react'
import { Link, graphql } from "gatsby"

import Layout from '../components/layout'
import WebOpsImage from '../components/image'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>WebOps Resources (From Drupal 8)</h1>
    { data.allNodePersonalLink.edges.map(({ node }) => (
      <div>
        <p><b><a href={ node.field_url.uri }>{ node.title }</a></b><br />
        <em>{ node.field_teaser }</em></p>
      </div>
    ))}
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <WebOpsImage />
    </div>
    <Link to="/presentations/">See WebOps Events</Link>
  </Layout>
)

export const query = graphql`
	query allNodePersonalLink {
    allNodePersonalLink {
  	  edges {
   	   node {
        title,
        field_url {
          uri
          title
       	 },
        field_teaser
      	}
    	}
  	}
  }
`

export default IndexPage
