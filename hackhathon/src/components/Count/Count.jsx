import React, { useState, useEffect } from "react";
import '../Game/Game.css'

export default function count({
  timer,
  isPlay,
  setIsWarming,
  isWarming,
  isWin,
  isLoose,
  resetGame,
}) {
  console.log(isLoose);
  const handleClick = () => {
    setIsWarming(true);
  };
  const [gameState, setGameState] = useState(
    <button onClick={handleClick}>PLAY</button>
  );

  useEffect(() => {
    console.log(isLoose);
    if (isLoose) {
      setGameState(<div>YOU LOOSE BOOOH !</div>);
    }
    if (!isPlay) {
      setGameState(<button className="focus:outline-none" onClick={handleClick}>PLAY</button>);
    }
    if (isWin && !isLoose) {
      setGameState(<div>YOU WON !</div>);
    } else if (isLoose) {
      setGameState(<div className="text-center">YOU LOOSE BOOOH !</div>);
    }
  }, [isWin, isLoose, isPlay]);

  return (
    <div className="text-white w-72 h-72 glassPlay flex flex-col items-center align-middle  justify-center mx-auto rounded-full text-4xl">
      {isPlay && !isWin && !isLoose ? timer : gameState}
      <button
        className="text-2xl border-2 border-white  focus:outline-none rounded-xl my-4 py-2 px-4"
        onClick={resetGame}
      >
        RESET
      </button>
    </div>
  );
}
