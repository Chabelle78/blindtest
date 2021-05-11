import React from "react";
import Count from "../Count/Count";
import Game from "../Game/Game";
import Scores from "../Scores/Scores";

import "./Main.css";

export default function Main({
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
    <div className="main flex items-center align-middle justify-around w-full h-screen">
      <Scores />
      <Game
        isWarming={isWarming}
        timer={timer}
        setIsPlay={setIsPlay}
        isPlay={isPlay}
        songs={songs}
        setStartTimer={setStartTimer}
        startTimer={startTimer}
      />
      <Count
        setIsWarming={setIsWarming}
        isWarming={isWarming}
        timer={timer}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
      />
    </div>
  );
}
