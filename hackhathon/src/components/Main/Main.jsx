import React from "react";
import Game from "../Game/Game";
import Scores from "../Scores/Scores";
import Upload from "../Upload/Upload";
import LoginForm from "../Form/LoginForm";
import "./Main.css";

export default function Main() {
  return (
    <div className="main flex items-center align-middle justify-center w-screen h-screen">
      <p>Hello world</p>
      <Scores />
      <Game />
      <Upload />
      <LoginForm />
    </div>
  );
}
