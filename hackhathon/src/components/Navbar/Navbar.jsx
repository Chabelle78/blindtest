import React from "react";
import { LogoutIcon } from "@heroicons/react/solid";

export default function Navbar({ isLogged, setIsLogged }) {
  const handleClick = () => {
    setIsLogged(false);
  };

  return (
    <>
      {isLogged ? (
        <div className="w-full h-16 bg-gray-900">
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
          <div className="w-full h-16 bg-gray-900">
            <div className="flex justify-end items-center h-full"></div>
          </div>
        </div>
      )}
    </>
  );
}
