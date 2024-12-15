import React, { FunctionComponent } from "react";

type TextSection = {
  title: string;
  content: string;
};

const TextSection: FunctionComponent<TextSection> = ({ title, content }) => {
  return (
    <div>
      <h1 style={{ marginTop: "2rem" }}>{title}</h1>
      <div style={{ marginTop: "1rem" }}>{content}</div>
    </div>
  );
};

export default TextSection;
