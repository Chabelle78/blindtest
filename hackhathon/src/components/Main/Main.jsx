import React from "react";
import Game from "../Game/Game";
import Scores from "../Scores/Scores";
import Upload from "../Upload/Upload";
import "./Main.css";

export default function Main() {
  return (
    <div className="main flex items-center align-middle justify-around w-full h-screen">
      <Scores />
      <Game />
      <Upload />
    </div>
  );
}
