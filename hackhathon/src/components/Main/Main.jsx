import React from "react";
import Game from "../Game/Game";
import Scores from "../Scores/Scores";
import Upload from "../Upload/Upload";
import LoginForm from "../Form/LoginForm";
import "./Main.css";

export default function Main({ songs, timer }) {
  return (
    <div className="main flex items-center align-middle justify-around w-full h-screen">
      <Scores />
      <Game timer={timer} songs={songs} />
      <Upload />
      <LoginForm />
    </div>
  );
}
