import React from "react";
import Layout from "../common/layouts";
import { graphql } from "gatsby";
import Hero from "../homepage/components/hero";
import Card from "../homepage/components/card";
import About from "../homepage/components/about";
import Bio from "../homepage/components/bio";
import Seo from "../common/seo";

export default ({ data }) => {
  const featuredContentfulPost = data.contentfulPost.edges[0].node;
  return (
    <Layout>
      <Seo
        title={"Home Page"}
        description={data.site.siteMetadata.description}
      />
      <Hero
        title={featuredContentfulPost.title}
        image={featuredContentfulPost.coverImage.fluid}
        to={featuredContentfulPost.slug}
        description={featuredContentfulPost.description}
      />
      <div className="flex flex-wrap center mw9 justify-around pb3">
        {data.cards.edges.map(({ node }) => (
          <Card
            title={node.title}
            image={node.coverImage.fluid}
            to={featuredContentfulPost.slug}
            description={node.description}
          />
        ))}
      </div>
      <About />
      <Bio />
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulPost: allContentfulBlogpost(
      limit: 1
      sort: { order: DESC, fields: date }
    ) {
      edges {
        node {
          id
          title
          date(formatString: "DD-MM-YYYY")
          category
          description
          slug
          coverImage {
            fluid(maxWidth: 1920) {
              src
            }
          }
        }
      }
    }
    cards: allContentfulBlogpost(
      skip: 1
      limit: 3
      sort: { order: DESC, fields: date }
    ) {
      edges {
        node {
          id
          title
          date(formatString: "DD-MM-YYYY")
          category
          description
          slug
          coverImage {
            fluid(maxWidth: 1920) {
              src
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`;
