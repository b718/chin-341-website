import React, { FunctionComponent } from "react";

type TextSection = {
  title: string;
  content: string;
};

const TextSection: FunctionComponent<TextSection> = ({ title, content }) => {
  return (
    <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
      <h1 style={{ marginTop: "2rem", textTransform: "capitalize" }}>
        {title}
      </h1>
      <div style={{ marginTop: "1rem", textAlign: "justify" }}>{content}</div>
    </div>
  );
};

export default TextSection;
