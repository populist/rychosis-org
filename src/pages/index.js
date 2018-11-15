import React from 'react'
import { Link, graphql } from "gatsby"

import Layout from '../components/layout'
import MMLCImage from '../components/image'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Matthew Cheney</h1>
    { data.allNodePersonalLink.edges.map(({ node }) => (
      <div>
        <p><a href={ node.field_url.uri }>{ node.title }</a></p>
      </div>
    ))}
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <MMLCImage />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
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
      	}
    	}
  	}
  }
`

export default IndexPage
