import React, { useEffect, useState } from "react";

export default function Game({ songs, timer }) {
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
    if (timer < 0) {
      setIsLoose(true);
    } else {
      setIsLoose(false);
    }
  }, [timer]);

  return (
    <div className="flex flex-col items-center justify-center align-middle">
      <audio controls src={random.s3_link}></audio>
      <div>Bienvennue JULIEN</div>
      <div className="w-80 h-80 bg-black bg-opacity-50 flex items-center justify-center align-middle">
        {isLoose ? (
          <img className="" src={random.album.picture} alt="" />
        ) : (
          timer
        )}
      </div>
      <div>TRACK INFOS</div>
      <ul>
        {myArray.map((song, index) => {
          return (
            <li key={index}>
              <button value={song.title} onClick={handleClick}>
                {song.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
