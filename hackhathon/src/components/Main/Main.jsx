import React from "react";
import Game from "../Game/Game";
import Scores from "../Scores/Scores";
import Upload from "../Upload/Upload";

export default function Main() {
  return (
    <div className="flex items-center align-middle justify-center">
      <Scores />
      <Game />
      <Upload />
    </div>
  );
}
