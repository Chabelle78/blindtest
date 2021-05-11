import React from "react";
import Game from "../Game/Game";
import Scores from "../Scores/Scores";
import Upload from "../Upload/Upload";
import "./Main.css";

export default function Main({ songs }) {
  return (
    <div className="main flex items-center align-middle justify-around w-screen h-screen">
      <Scores />
      <Game songs={songs} />
      <Upload />
    </div>
  );
}
