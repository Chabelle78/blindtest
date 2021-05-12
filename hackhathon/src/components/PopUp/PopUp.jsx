import React from "react";

export default function PopUp({ getDatas, setIsLoose, setIsWin, resetGame }) {
  const handleClick = () => {
    setIsLoose(false);
    setIsWin(false);
    getDatas();
  };
  return (
    <div className="w-full h-screen absolute bg-black bg-opacity-60 flex flex-col justify-center items-center">
      <div className="h-3/5 w-6/12 bg-black rounded-xl bg-opacity-80 flex flex-col justify-around items-center">
        <p className="text-white text-6xl flex justify-center items-center">
          You Won !!
        </p>
        <button
          onClick={resetGame}
          className="text-white border-2 border-white py-2 px-4 rounded-xl hover:opacity-30 "
        >
          Ok !
        </button>
      </div>
    </div>
  );
}
