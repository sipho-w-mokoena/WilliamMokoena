const path = require("path")

module.exports = {
  siteMetadata: {
    title: `William Mokoena`,
    description: `Hi I'm Sipho William Mokoena an aspiring polymath, \
    a writer, software developer, ametuer engineer, scientist and researcher.`,
    author:  `@williammokoena`,
    siteUrl: `https://www.williammokoena.com/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          Assets: path.resolve(__dirname, "src/assets"),
          Components: path.resolve(__dirname, "src/components"),
          Lib: path.resolve(__dirname, "src/lib"),
          Pages: path.resolve(__dirname, "src/pages"),
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `skyblue`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
}
