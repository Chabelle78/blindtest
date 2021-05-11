import React, { useState } from "react";

export default function count({ timer, isPlay, setIsWarming, isWarming }) {
  const handleClick = () => {
    setIsWarming(true);
  };

  return (
    <div className="text-white w-full flex items-center align-middle justify-center text-9xl">
      {isPlay ? timer : <button onClick={handleClick}>PLAY</button>}
    </div>
  );
}
