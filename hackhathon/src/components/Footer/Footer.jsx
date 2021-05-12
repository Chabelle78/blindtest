import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-400 fixed bottom-0 w-full">
      <ul className="flex flex-col items-center md:flex-row md:justify-around">
        <li className="py-3">
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
