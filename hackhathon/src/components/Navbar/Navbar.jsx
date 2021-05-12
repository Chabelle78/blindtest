import React from "react";
import { LogoutIcon } from "@heroicons/react/solid";
import '../Game/Game.css'

export default function Navbar({ isLogged, setIsLogged }) {
  const handleClick = () => {
    setIsLogged(false);
  };

  return (
    <>
      {isLogged ? (
        <div className="w-full h-16 glassNav fixed ">
          <div className="flex justify-end items-center h-full">
            <p className="mr-5 text-xl text-white flex items-center">
              UserName
            </p>
            <button onClick={handleClick}>
              <LogoutIcon className="text-white h-6 mr-5" />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full h-16 bg-black fixed bg-opacity-60">
            <div className="flex justify-end items-center h-full"></div>
          </div>
        </div>
      )}
    </>
  );
}
