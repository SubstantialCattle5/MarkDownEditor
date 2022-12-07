import { useState } from "react";

export const Editor = (props) => {
  // handlers
  const dataHandler = (event) => {
    event.preventDefault();
    props.addData(event.target.value);
  };

  return (
    <div className="w-1/2 h-full pr-4">
      <form className="h-full w-full">
        <textarea
          className="w-full h-full text-sm text-light border-darker bg-darker focus:border-blue-500 rounded-lg "
          value={props.data}
          onChange={dataHandler}
        ></textarea>
      </form>
    </div>
  );
};
