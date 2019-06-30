/* eslint-disable camelcase */
module.exports = {
  siteMetadata: {
    siteUrl: "https://maxaltena.com/"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Max Altena",
        short_name: "MaxAltena",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        display: "standalone",
        icon: "src/assets/icons/favicon.png"
      }
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: true,
        https: true,
        www: false,
        host: "maxaltena.com"
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://maxaltena.com/",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    {
      resolve: "gatsby-plugin-humans-txt",
      options: {
        team: [
          {
            Developer: "Max Altena",
            GitHub: "MaxAltena",
            Twitter: "@MaxAltena",
            LinkedIn: "maxaltena"
          }
        ],
        thanks: ["Gatsby", "Node", "Yarn"],
        site: {
          "Last update": "25 June 2019",
          Standards: "JavaScript, ES6",
          Components: "React",
          Softwares: "Visual Studio Code"
        },
        note: "Made with love by Max Altena"
      }
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/assets/icons/favicon.png",
        appName: "Max Altena",
        appDescription: "The website of Max Altena",
        developerName: "Max Altena",
        developerURL: "https://maxaltena.com/",
        dir: "auto",
        lang: "en-US",
        background: "#FFFFFF",
        theme_color: "#FFFFFF",
        display: "standalone",
        orientation: "any",
        start_url: "/",
        version: "1.0.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          yandex: true,
          windows: true
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-102319824-1",
        head: true,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en"
      }
    },
    {
      resolve: "gatsby-plugin-hotjar",
      options: {
        id: 1379953,
        sv: 6
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    "gatsby-plugin-no-sourcemaps",
    "gatsby-transformer-sharp"
  ]
};
