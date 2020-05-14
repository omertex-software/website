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
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
  ],
}
