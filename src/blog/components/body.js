import React from "react";
import styled from "styled-components";
import Sidebar from "./sidebar.js";
import Suggested from "./suggested.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "tachyons";
import "../../common/styles/custom.tachyons.css";
import "../styles/grid.css";

const StyledBody = styled.div`
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0 25px;
  }
`;

export default props => (
  <div className="min-vh-100 blog__grid">
    <div style={{ gridArea: "header" }} />
    <StyledBody
      style={{ gridArea: "content", textAlign: "justify" }}
      className="mw8 serif f4 lh-copy center pa2 article__container"
    >
      {documentToReactComponents(props.content)}
    </StyledBody>

    <Sidebar
      img={props.image}
      desc={props.description}
      location={props.location}
    />
    <Suggested />
  </div>
);
