import React, { useEffect, useState, useRef } from "react";
import "./Game.css";

export default function Game({ songs, timer }) {
  const [startTimer, setStartTimer] = useState(3);
  const audioRef = useRef();

  const [random, setRandom] = useState(
    songs[Math.floor(Math.random() * songs.length)]
  );
  const [random2, setRandom2] = useState(
    songs[Math.floor(Math.random() * songs.length)]
  );
  const [random3, setRandom3] = useState(
    songs[Math.floor(Math.random() * songs.length)]
  );
  const [random4, setRandom4] = useState(
    songs[Math.floor(Math.random() * songs.length)]
  );

  const myArray = [random, random2, random3, random4];
  const [isLoose, setIsLoose] = useState(false);
  const [userChoice, setUserChoice] = useState();
  const [randomResults, setRandomResults] = useState();
  console.log(random.title);
  const handleClick = (e) => {
    console.log(e.target.value);
    console.log([random].filter((song) => song.title.includes(e.target.value)));
    if (
      [random].filter((song) => song.title.includes(e.target.value)).length > 0
    ) {
      console.log("you won !!!");
    } else {
      console.log("you loose");
    }
  };

  useEffect(() => {
    audioRef.current.currentTime = 10;
    const timer = setInterval(() => setStartTimer((c) => c - 1), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    console.log(startTimer);
    if (startTimer < 1 && startTimer > -10) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [startTimer]);

  useEffect(() => {
    if (timer < 0) {
      setIsLoose(true);
    } else {
      setIsLoose(false);
    }
  }, [timer]);

  return (
    <div className="flex flex-col text-white shadow p-8 bg-purple-800 rounded-xl bg-opacity-80 items-center justify-center align-middle">
      <audio
        className="hidden"
        ref={audioRef}
        controls
        src={random.s3_link}
      ></audio>
      <div>Bienvennue JULIEN</div>
      {startTimer > 0 ? startTimer : "START"}
      <div className="w-80 h-80 bg-black bg-opacity-50 flex items-center justify-center align-middle">
        {isLoose ? (
          <img className="" src={random.album.picture} alt="" />
        ) : (
          timer
        )}
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
