import React from "react";
import Layout from "../common/layouts";
import { Link, graphql } from "gatsby";
import Breadcrumbs from "./components/breadcrumbs";
import Preview from "./components/post-preview.js";
import Seo from "../common/seo";
import "tachyons";

export default class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.posts.edges;
    const hasNext = this.props.data.posts.pageInfo.hasNextPage;
    return (
      <Layout>
        <Seo
          title={`All Blog Posts - Page ${this.props.pageContext.pageNumber}`}
          description={`Index of all blog posts. Page ${this.props.pageContext.pageNumber}`}
        />
        <div className="pv5 flex items-center justify-center bg-washed-red">
          <h1 className="fw1 tc f2 display">All Blog Post</h1>
        </div>
        <div className="mw9 center">
          <Breadcrumbs
            lastName="Blog"
            lastPath="/blog"
            currentPage={`Page ${this.props.pageContext.pageNumber}`}
          />
          {posts.map(({ node }) => (
            <Preview
              fluidImage={node.coverImage.fluid}
              slug={node.slug}
              title={node.title}
              date={node.date}
              category={node.category}
              description={node.description}
            />
          ))}
          <div className="pv5 flex w-100">
            {hasNext && (
              <Link
                className="dark-gray sans-serif ttu tracked no-underline"
                to={this.props.pageContext.nextPage}
              >
                Next Page &rarr;
              </Link>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export const blogListQuery = graphql`
  query posts($skip: Int!, $limit: Int!) {
    posts: allContentfulBlogpost(
      limit: $limit
      skip: $skip
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
            fluid(maxWidth: 1920, maxHeight: 900) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
