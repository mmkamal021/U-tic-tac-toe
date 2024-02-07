// import { useState } from "react";
import Square from "./Square";
// import History from "./History";

// eslint-disable-next-line react/prop-types
export default function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next Player " + (xIsNext ? "X" : "O");
  }

  function handClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      console.log("clicked!");
      return;
    }

    // eslint-disable-next-line react/prop-types
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <>
      <div>{status}</div>
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
