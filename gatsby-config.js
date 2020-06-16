const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: `https://omertex-website.herokuapp.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Software Product Development Company - Omertex`,
        short_name: `Omertex`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        include_favicon: true,
        icon: "src/assets/images/common/logo_512.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`, `900`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 70,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://omertex-website.herokuapp.com/",
        policy: [{ userAgent: "*", disallow: ["/"] }],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
  ],
}
