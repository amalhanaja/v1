module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'profile',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        // eslint-disable-next-line @typescript-eslint/camelcase
        short_name: 'starter',
        // eslint-disable-next-line @typescript-eslint/camelcase
        start_url: '/',
        // eslint-disable-next-line @typescript-eslint/camelcase
        background_color: '#663399',
        // eslint-disable-next-line @typescript-eslint/camelcase
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/personal-logo.svg', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
