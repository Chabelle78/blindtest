import React from "react";
import UserScore from "./UserScore";
import "../Game/Game.css";
import "./Score.css";

export default function Scores({ users }) {
  return (
    <div className="flex flex-col relative items-center align-middle justify-center height">
      <div className="w-72 h-2/4 glassScore relative rounded-xl border-2 flex-col h-full">
        <h2 className="text-white h-12 flex items-center  border-b border-purple-400 rounded-t-xl justify-center ">
          High Score
        </h2>
        <div className="overflow-y-auto sidebar h-80">
          <ul className="text-white text-sm text-center">
            {users.map((user) => {
              return (
                <li className="border-b flex flex-col border-purple-400">
                  <div>Name :{user.pseudo}</div>
                  <div>Score :{user.score}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center justify-center rounded-b-xl bg-purple-800 border-t border-purple-400 w-full h-12 absolute bottom-0 text-white"></div>
      </div>
    </div>
  );
}
