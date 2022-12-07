import React from "react";
import Display from "./display/Display";
import { Editor } from "./editor/Editor";
export const Body = () => {
  return (
    <div className="border-solid flex flex-row w-full h-full">
      <Editor />
      <Display />
    </div>
  );
};
