import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { StaticQuery, graphql } from "gatsby";
import "tachyons";

export default props => {
  let { location } = props;
  location = encodeURIComponent(location.pathname);
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              siteUrl
              email
              instagram
            }
          }
        }
      `}
      render={data => {
        const base = encodeURIComponent(data.site.siteMetadata.siteUrl);
        const { email, instagram } = data.site.siteMetadata;
        return (
          <div className="dn db-l" style={{ gridArea: "sidebar" }}>
            <div
              className="w3 bg-dark-gray flex flex-wrap"
              style={{ position: "sticky", top: "4rem" }}
            >
              <a
                href={instagram}
                className="w-100 h3 flex items-center justify-center b near-white"
              >
                <FaInstagram />
              </a>

              <a
                href={`mailto:${email}?&body=${base + location}`}
                className="w-100 h3 flex items-center justify-center b near-white"
              >
                <FiMail />
              </a>
            </div>
          </div>
        );
      }}
    />
  );
};
