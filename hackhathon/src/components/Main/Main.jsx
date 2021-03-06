import React from "react";
import Count from "../Count/Count";
import Game from "../Game/Game";
import Scores from "../Scores/Scores";

export default function Main({
  resetGame,
  songs,
  timer,
  isPlay,
  setIsPlay,
  setIsWarming,
  isWarming,
  setStartTimer,
  startTimer,
  isWin,
  setIsWin,
  isLoose,
  setIsLoose,
  audioRef,
  setRandom,
  setRandom2,
  setRandom3,
  setRandom4,
  random,
  random2,
  random3,
  random4,
  myArray,
  shuffle,
  users,
}) {
  return (
    <div className="md:grid md:grid-cols-3 md:items-center md:align-middle md:justify-around flex flex-col w-full h-screen">
      <Scores users={users} />
      <Game
        shuffle={shuffle}
        myArray={myArray}
        setRandom={setRandom}
        setRandom2={setRandom2}
        setRandom3={setRandom3}
        setRandom4={setRandom4}
        random={random}
        random2={random2}
        random3={random3}
        random4={random4}
        audioRef={audioRef}
        isLoose={isLoose}
        setIsLoose={setIsLoose}
        isWin={isWin}
        setIsWin={setIsWin}
        isWarming={isWarming}
        timer={timer}
        setIsPlay={setIsPlay}
        isPlay={isPlay}
        songs={songs}
        setStartTimer={setStartTimer}
        startTimer={startTimer}
      />
      <Count
        resetGame={resetGame}
        isLoose={isLoose}
        isWin={isWin}
        setIsWarming={setIsWarming}
        isWarming={isWarming}
        timer={timer}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
      />
    </div>
  );
}
