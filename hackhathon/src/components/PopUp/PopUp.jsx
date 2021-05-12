import React, { useState } from "react";

export default function PopUp({
  getDatas,
  setIsLoose,
  setIsWin,
  resetGame,
  random,
  isLogged,
}) {
  const [score, setScore] = useState();
  const handleClick = () => {
    setIsLoose(false);
    setIsWin(false);

    const getData = async () => {
      const data = await fetch(
        `http://localhost:4000/api/v1/user/${isLogged}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((res) => setScore(res))
        .then((res) =>
          fetch(`http://localhost:4000/api/v1/user/${isLogged}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ score: 30 }),
          })
            .then((res) => res.json())
            .then((res) => setIsRegistered(true))
            .catch((err) => console.log(err))
        );
    };
    getData();
    resetGame();
  };
  return (
    <div className="w-full h-screen absolute bg-black bg-opacity-60 flex flex-col justify-center items-center">
      <p className="text-white text-5xl mb-5 flex justify-center items-center">
        You Won !!
      </p>
      <div className="h-3/4 w-1/2 bg-black rounded-xl bg-opacity-80 flex flex-col justify-around items-center">
        <img className="w-8/12" src={random.album.picture} alt="" />
      </div>
      <button
        onClick={handleClick}
        className="text-white border-2 border-white py-2 px-8 mt-10 rounded-xl hover:opacity-30 "
      >
        Ok !
      </button>
    </div>
  );
}
