import React from "react";
import UserScore from "./UserScore";
import '../Game/Game.css'

export default function Scores() {
  return (
    <div className="flex flex-col relative items-center align-middle justify-center h-full">
      <div className="w-72 h-2/4 glassScore relative rounded-xl border-2 flex-col ">
        <h2 className="text-white h-12 flex items-center   rounded-t-xl justify-center ">
          High Score
        </h2>
        <div className="overflow-y-auto h-full">
          <UserScore />
        </div>
        <div className="flex items-center justify-center rounded-b-xl bg-purple-800 w-full h-12 absolute bottom-0 text-white">
         
        </div>
      </div>
    </div>
  );
}
