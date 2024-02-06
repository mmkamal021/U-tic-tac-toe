/* eslint-disable react/prop-types */
// Game
//   -> Board
//     -> Square
//   -> History

import { useState } from "react";

import Square from "./Square";
import Board from "./Board";
import History from "./History";
import Game from "./Game";
export default function App() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "learn react",
    tag: ["web", "react"],
  };
  const [square, setSquare] = useState([defaultTask]);
  return (
    <div className="">
      <Board />
      <History />
      <Game />
    </div>
  );
}
