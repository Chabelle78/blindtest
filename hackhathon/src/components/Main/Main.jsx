import React from "react";
import Game from "../Game/Game";
import Scores from "../Scores/Scores";
import Upload from "../Upload/Upload";
import "./Main.css";

export default function Main({ songs, timer }) {
  return (
    <div className="main grid grid-cols-3 w-full h-screen">
      <Scores />
      <Game timer={timer} songs={songs} />
      <Upload />
    </div>
  );
}
