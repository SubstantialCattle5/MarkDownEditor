import React from "react";
import ReactMarkdown from "react-markdown";
function Display(props) {
  console.log(props.data);
  return (
    <ReactMarkdown className="border-solid w-1/2">
      {props.data}
    </ReactMarkdown>
  );
}

export default Display;
