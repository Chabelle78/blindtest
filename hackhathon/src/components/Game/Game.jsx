import React, { useEffect, useState, useRef } from "react";

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
    }
    if (isPlay && isLoose) {
      setGameState(<img src={random.album.picture} />);
    }
  }, [isLoose, isPlay]);

  return (
    <div className="flex flex-col text-white shadow p-8 w-full  bg-purple-800 rounded-xl bg-opacity-80 items-center justify-center align-middle">
      <div>Bienvennue JULIEN</div>
      {isWarming ? startTimer : "WAIT"}
      <div className="w-80 h-80 bg-black bg-opacity-50 flex items-center justify-center align-middle">
        {gameState}
      </div>
      <div>TRACK INFOS</div>
      <ul className="w-full grid m-2   p-5 grid-cols-2 grid-rows-2">
        {myArray.map((song, index) => {
          return (
            <li
              key={index}
              className="flex m-2 shadow2  items-center flex-col justify-center align-middle"
            >
              <button
                className="text-white w-full   rounded-xl py-2 px-4 cursor-pointer"
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
