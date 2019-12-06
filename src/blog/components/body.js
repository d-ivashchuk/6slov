import React from "react";
import Sidebar from "./sidebar.js";
import Suggested from "./suggested.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "tachyons";
import "../../common/styles/custom.tachyons.css";
import "../styles/grid.css";

export default props => (
  <div className="min-vh-100 blog__grid">
    <div style={{ gridArea: "header" }} />
    <div className="mw8 serif f4 lh-copy center pa2 article__container">
      {documentToReactComponents(props.content)}
    </div>

    <Sidebar
      img={props.image}
      desc={props.description}
      location={props.location}
    />
    <Suggested />
  </div>
);
