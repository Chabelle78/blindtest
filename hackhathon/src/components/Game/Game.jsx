import React, { useEffect, useState, useRef } from "react";
import './Game.css'

export default function Game({
  songs,
  timer,
  isPlay,
  isWarming,
  setIsPlay,
  startTimer,
  setStartTimer,
  setTimer,
  isWin,
  setIsWin,
  isLoose,
  setIsLoose,
  audioRef,
  random,
  random2,
  random3,
  random4,
  setRandom,
  setRandom2,
  setRandom3,
  myArray,
  setRandom4,
  shuffle,
}) {
  const [userChoice, setUserChoice] = useState();
  const [randomResults, setRandomResults] = useState();
  const [gameState, setGameState] = useState();

  const handleClick = (e) => {
    if (
      [random].filter((song) => song.title.includes(e.target.value)).length > 0
    ) {
      console.log("you won !!!");
      setIsWin(true);
    } else {
      console.log("you loose");
      setIsWin(false);
    }
  };

  useEffect(() => {
    if (isWarming) {
      audioRef.current.currentTime = 10;
      const timer = setInterval(() => setStartTimer((c) => c - 1), 1000);

      return function cleanup() {
        clearInterval(timer);
      };
    }
  }, [isWarming]);

  useEffect(() => {
    if (isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    if (isWin) {
      audioRef.current.pause();
    }
  }, [isPlay, isWin]);

  useEffect(() => {
    if (timer <= 0 && !isWin) {
      setIsLoose(true);
      audioRef.current.pause();
    } else {
      setIsLoose(false);
    }
  }, [timer, isWin, isLoose]);

  useEffect(() => {
    if (isPlay && !isLoose) {
      setGameState(
        <img className="animate-spin" src="./src/images/vinyle.png" alt="" />
      );
    } else if (isPlay && isLoose) {
      setGameState(<img src={random.album.picture} />);
    } else {
      setGameState();
    }  }, [isLoose, isPlay]);

  return ( 
    <div className="flex flex-col text-white glass items-center justify-center align-middle minHeight">
      {isWarming ? <div className=" text-center mx-auto my-auto">
        {startTimer}
      </div> : <div className="mx-auto my-auto"> <p>GO</p></div>}
      <div className="w-64 h-72 bg-black bg-opacity-50 flex items-center justify-center align-middle rounded-xl">
        {gameState}
      </div>
      <ul className="w-full grid m-2   p-5 grid-cols-2 grid-rows-2 ">
        {myArray.map((song, index) => {
          return (
            <li
              key={index}
              className="flex m-2 glass py-2 items-center flex-col justify-center align-middle link"
            >
              <button
                className="text-white w-full text-sm  rounded-xl py-3 px-4 cursor-pointer focus:outline-none"
                value={song.title}
                onClick={handleClick}
              >
                {song.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
