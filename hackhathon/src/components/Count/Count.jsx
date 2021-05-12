import React, { useState, useEffect } from "react";

export default function count({
  timer,
  isPlay,
  setIsWarming,
  isWarming,
  isWin,
  isLoose,
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
  }, [isWin, isLoose]);

  return (
    <div className="text-white w-full flex items-center align-middle justify-center text-9xl">
      {isPlay && !isWin && !isLoose ? timer : gameState}
    </div>
  );
}
