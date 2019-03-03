const package = require("./package.json");

module.exports = {
  siteMetadata: {
    title: package.title,
    description: package.description,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    "gatsby-transformer-yaml",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "members",
        path: `${__dirname}/data`,
      },
    },

    "gatsby-plugin-react-helmet",

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: package.title,
        short_name: package.name,
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/logo.png",
      },
    },

    // "gatsby-plugin-offline",
  ],
};
