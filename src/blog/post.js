import React from "react";
import Layout from "../common/layouts";
import Hero from "./components/hero.js";
import Body from "./components/body.js";
import Seo from "./seo.js";
import MetaSeo from "../common/seo";
import { graphql } from "gatsby";

export default ({ location, data }) => {
  console.log(data);
  const { category, date, title, slug, description } = data.post;
  const content = data.post.postBody.json;
  const { author } = data.site.siteMetadata;
  return (
    <Layout>
      <Seo slug={slug} title={title} date={date} description={description} />
      <MetaSeo title={title} description={description} />
      <Hero date={date} author={author} category={category} title={title} />
      <Body content={content} description={description} location={location} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: contentfulBlogpost(slug: { eq: $slug }) {
      id
      title
      date(formatString: "DD-MM-YYYY")
      category
      description
      slug
      postBody {
        json
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;
