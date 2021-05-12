import React, { useState, useEffect } from "react";

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
      setGameState(<button onClick={handleClick}>PLAY</button>);
    }
    if (isWin && !isLoose) {
      setGameState(<div>YOU WON !</div>);
    } else if (isLoose) {
      setGameState(<div>YOU LOOSE BOOOH !</div>);
    }
  }, [isWin, isLoose, isPlay]);

  return (
    <div className="text-white w-full flex flex-col items-center align-middle justify-center text-9xl">
      {isPlay && !isWin && !isLoose ? timer : gameState}
      <button
        className="text-4xl border-2 border-white  rounded-xl my-4"
        onClick={resetGame}
      >
        RESET
      </button>
    </div>
  );
}
