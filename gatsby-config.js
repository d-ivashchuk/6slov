const dotenv = require("dotenv").config();
module.exports = {
  siteMetadata: {
    navbarLinks: [
      { to: "/blog", name: "Blog" },
      { to: "/travel", name: "Travel" }
    ],
    title: "6slov",
    author: "Alexandra Chervynska",
    email: "a.chervynska@gmail.com",
    description: "",
    siteUrl: "https://tyra-starter.netlify.com",
    homepageHeader: "Welcome to Your New Blog",
    homepageAbout:
      "Tyra is a modern, sleek and feminine Gatsby.js theme. Easily create a beautiful and fast blog and draw attention to your stellar content.",
    mailChimpUrl: "https://mailchimp.com",
    mailChimpToken: "MAILCHIMP TOKEN HERE",
    instagram: "https://www.instagram.com/chervynska/",
    youtube: "", // YOUR YOUTUBE PROFILE HERE
    github: "", // YOUR GITHUB PROFILE HERE
    pinterest: "", // YOUR PINTEREST PROFILE HERE
    facebook: "", // YOUR FACEBOOK PROFILE HERE
    twitter: "" // YOUR TWITTER PROFILE HERE
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "content"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1400
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Karla", "Playfair Display", "Lora"]
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `n3n4zsoold3x`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/success"],
        cookieDomain: "tyra-starter.netlify.com"
      }
    }
  ]
};
