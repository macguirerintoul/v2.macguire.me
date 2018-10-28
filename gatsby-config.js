module.exports = {
  siteMetadata: {
    title: 'Macguire Rintoul — Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/thumbnail-roar.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
