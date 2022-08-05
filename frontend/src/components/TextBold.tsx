import React from "react";

export default function TextBold(props: { text: string }) {
  return (
    <h3
      style={{
        color: "cyan",
      }}
    >
      {props.text}
    </h3>
  );
}
