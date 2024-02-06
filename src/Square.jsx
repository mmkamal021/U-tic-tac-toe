// eslint-disable-next-line react/prop-types

import { useState } from "react";
export default function Square() {
  const [value, setValue] = useState(null);
  // check the squre component clicked or not
  function handleClick() {
    setValue("X");
  }

  return (
    <>
      <button
        className="bg-red border border-gray-400 h-20 w-20 m-1 leading-9 text-5xl font-bold"
        onClick={handleClick}
      >
        {value}
      </button>
    </>
  );
}
