module.exports = {
  siteMetadata: {
    title: `Docker Field Guide Workshop | tgallacher`,
    description: `A 1 day Docker workshop for beginners.`,
    author: `@tgallacher`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        contentPath: 'decks',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `docker-field-guide-workshop`,
        short_name: `DockerFG`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/docker-large-v-trans.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
