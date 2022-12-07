import { useState } from "react";

export const Editor = () => {
  // states
  const [data, setData] = useState("Type something awesome!");

  // handlers
  const dataHandler = (event) => {
    setData(event.target.value);
  };

  return (
    <div className="w-1/2 h-full pr-4">
      <form className="h-full w-full">
        <textarea
          className="w-full h-full text-sm text-light border-darker bg-darker focus:border-blue-500 rounded-lg "
          value={data}
          onChange={dataHandler}
        ></textarea>
      </form>
    </div>
  );
};
