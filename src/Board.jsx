import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squres, setSquare] = useState([Array(9).fill(null)]);
  return (
    <>
      <div className="flex">
        <Square value={squres[0]} />
        <Square value={squres[1]} />
        <Square value={squres[2]} />
      </div>
      <div className="flex">
        <Square value={squres[3]} />
        <Square value={squres[4]} />
        <Square value={squres[5]} />
      </div>
      <div className="flex">
        <Square value={squres[6]} />
        <Square value={squres[7]} />
        <Square value={squres[9]} />
      </div>
    </>
  );
}
