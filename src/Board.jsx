import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  function handClick(i) {
    // if (squares[i]) {
    //   console.log(squares[i]);
    //   return;
    // }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSqureClick={() => handClick(0)} />
        <Square value={squares[1]} onSqureClick={() => handClick(1)} />
        <Square value={squares[2]} onSqureClick={() => handClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSqureClick={() => handClick(3)} />
        <Square value={squares[4]} onSqureClick={() => handClick(4)} />
        <Square value={squares[5]} onSqureClick={() => handClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSqureClick={() => handClick(6)} />
        <Square value={squares[7]} onSqureClick={() => handClick(7)} />
        <Square value={squares[8]} onSqureClick={() => handClick(8)} />
      </div>
    </>
  );
}
