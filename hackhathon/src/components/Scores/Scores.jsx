import React from 'react';
import UserScore from './UserScore';

export default function Scores() {
  return (
    <div className="flex flex-col relative items-center align-middle justify-center h-full">
      <div className="w-72 h-2/4 bg-black relative opacity-50 rounded-xl border-2 flex-col ">
        <h2 className="text-white h-12 flex items-center  rounded-t-xl justify-center bg-purple-800">High Score</h2>
        <div className="overflow-y-auto h-full" >
        <UserScore />
        </div>
        <div className="flex items-center justify-center rounded-b-xl bg-purple-800 w-full h-12 absolute bottom-0 text-white">barre du bas</div>
      </div>
    </div>
  );
}
