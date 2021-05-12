import React from "react";
import '../Game/Game.css';

export default function Footer() {
  return (
    <div className=" fixed bottom-0 glassFooter  h-16 w-full text-white ">
      <ul className="flex items-center md:flex-row md:justify-around">
        <li className="py-3 ">
          Abbadie Julien
          <div className="flex md:flex-row justify-center">
            <a href="https://github.com/JIdayyy" target="_blank">
              <img className="w-6 pt-1" src="src/images/github.svg" alt="" />
            </a>
          </div>
        </li>

        <li className="py-3">
          Caron Rémi
          <div className="flex md:flex-row justify-center">
            <a href="https://github.com/Rcarondw" target="_blank">
              <img className="w-6 pt-1" src="src/images/github.svg" alt="" />
            </a>
          </div>
        </li>
        <li className="py-3">
          Chabat Estelle
          <div className="flex md:flex-row justify-center">
            <a href="https://github.com/Chabelle78">
              <img className="w-6 pt-1" src="src/images/github.svg" alt="" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

// bg-black bg-opacity-60
