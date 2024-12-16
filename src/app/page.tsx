import { Metadata } from "next";
import { CSSProperties } from "react";
import TextSection from "../../components/TextSection";
import * as textdata from "../../data/text-sections.json";

export const metadata: Metadata = {
  title: "如何成为一个好老师",
  description: "成为好老师的技巧",
};

const StyleProps: CSSProperties = {
  maxWidth: "50rem",
  margin: "0 auto",
  justifyContent: "center",
  marginTop: "5rem",
  marginBottom: "5rem",
};

export default function Home() {
  return (
    <div style={StyleProps}>
      <h1
        style={{
          maxWidth: "fit-content",
          margin: "0 auto",
          marginBottom: "2rem",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      >
        如何成为一个好老师
      </h1>

      <iframe
        width="500"
        height="300"
        src="https://www.youtube.com/embed/hp71nkviI8Q?si=8upGXEJxhGg_l5iQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ margin: "0 auto", display: "block" }}
      />

      <TextSection
        title={textdata["introduction"].title}
        content={textdata["introduction"].content}
      />
      <TextSection
        title={textdata["reasons-for-career"].title}
        content={textdata["reasons-for-career"].content}
      />
      <TextSection
        title={textdata["job-search-process"].title}
        content={textdata["job-search-process"].content}
      />
      <TextSection
        title={textdata["soft-technical-skills"].title}
        content={textdata["soft-technical-skills"].content}
      />
      <TextSection
        title={textdata["preparation-for-job"].title}
        content={textdata["preparation-for-job"].content}
      />
      <TextSection
        title={textdata["ubc-teaching-style"].title}
        content={textdata["ubc-teaching-style"].content}
      />
      <TextSection
        title={textdata["work-life-balance"].title}
        content={textdata["work-life-balance"].content}
      />
    </div>
  );
}
