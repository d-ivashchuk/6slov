import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import "tachyons";

export default props => (
  <div
    className="flex flex-column justify-end items-center pa2"
    style={{ gridArea: "suggested" }}
  >
    <span className="sans-serif tracked ttu tc db pv3">CONTINUE READING</span>
    <StaticQuery
      query={graphql`
        query {
          allContentfulBlogpost(limit: 2, sort: { order: DESC, fields: date }) {
            edges {
              node {
                title
                slug
                description
                coverImage {
                  fluid(maxWidth: 1920) {
                    src
                  }
                }
              }
            }
          }
        }
      `}
      render={data =>
        data.allContentfulBlogpost.edges.map(({ node }) => (
          <div className="w-100 mw6 tc mb4">
            <Link to={node.slug}>
              <Img
                className="h5"
                fluid={node.coverImage.fluid}
                alt={node.description}
              />
            </Link>
            <Link
              className="f4 serif tc dib pv2 ph3 display dark-gray no-underline"
              to={node.slug}
            >
              {node.title}
            </Link>
          </div>
        ))
      }
    />
  </div>
);
