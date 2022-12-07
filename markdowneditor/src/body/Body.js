import React, { useState } from "react";
import Display from "./display/Display";
import { Editor } from "./editor/Editor";
export const Body = () => {
  // states
  const [data, setData] = useState("");

  // handlers
  const dataHandler = (newData) => {
    setData(newData);
  };


  return (
    <div className=" flex flex-row w-full h-full">
      <Editor data={data} addData={dataHandler} />
      <Display data={data} />
    </div>
  );
};
