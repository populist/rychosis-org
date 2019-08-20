require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: 'Pantheon Headless Proof of Concept',
  },
  plugins: [
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'https://dev-rychosis-d8.pantheonsite.io/',
        apiBase: 'jsonapi', // endpoint of Drupal server
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Events',
            // optional, e.g. "text/markdown", "fileNode"
            // mapping: { 'CASE_SENSITIVE_COLUMN_NAME': 'VALUE_FORMAT' },
            // optional, for deep linking to records across tables.
            tableLinks: ['Presentations']
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Presentation Instances',
            // optional, e.g. "text/markdown", "fileNode"
            // mapping: { 'CASE_SENSITIVE_COLUMN_NAME': 'VALUE_FORMAT' },
            // optional, for deep linking to records across tables.
            tableLinks: ['People', 'PARTIALLY USED: Presentations', 'Events']
          },
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
