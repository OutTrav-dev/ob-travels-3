import React from "react";
import sanitize from "sanitize-html";

export interface RichHtmlProps {
  html?: string;          // sanitized & rendered
  textFallback?: string;  // optional plain text (will get simple \n -> <br />)
  className?: string;
}

export default function RichHtml({
  html,
  textFallback,
  className = "prose prose-sm max-w-none",
}: RichHtmlProps) {
  if (html) {
    const clean = sanitize(html, {
      allowedTags: sanitize.defaults.allowedTags.concat(["img","h1","h2","h3","iframe"]),
      allowedAttributes: {
        ...sanitize.defaults.allowedAttributes,
        img: ["src","alt","title","width","height","loading"],
        a: ["href","name","target","rel"],
        iframe: ["src","width","height","allow","allowfullscreen","loading"],
      },
      allowedSchemes: ["http","https","mailto","tel"],
    });
    return (
      <div
        className={className + " [&_img]:rounded-md"}
        dangerouslySetInnerHTML={{ __html: clean }}
      />
    );
  }

  if (!textFallback) return null;

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: textFallback }}
    />
  );
}