import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const PresentationsPage = ({
  data: {
    allAirtable: { edges: presentationEdges}
  }
}) => (
  <Layout>
    <h1>Presentations</h1>
    {presentationEdges.map(presentation => (
      <div className="presentation" key={presentation.node.data.ID}>
        <h2>{presentation.node.data.Name}</h2>
        <span className="date">{presentation.node.data.Event_date}</span>
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PresentationsPage

export const query = graphql`
  query PresentationsQuery {
    allAirtable(filter: {table: {eq: "Presentation Instances"}}) {
      edges {
        node {
          data {
            Name
            Presenter
            Presentation
            Event
            Event_date
          }
        }
      }
    }
  }
`