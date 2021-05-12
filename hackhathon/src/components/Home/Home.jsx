import React from "react";
import LoginForm from "../Form/LoginForm";
import Main from "../Main/Main";

export default function Home({
  songs,
  timer,
  isPlay,
  setIsPlay,
  setIsWarming,
  isWarming,
  setStartTimer,
  startTimer,
}) {
  return (
    <div>
      <LoginForm />
      {/* <Main /> */}
    </div>
  );
}
