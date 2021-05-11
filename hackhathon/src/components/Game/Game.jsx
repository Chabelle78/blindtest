import React from "react";

export default function Game({ songs }) {
  return (
    <div className="flex flex-col items-center justify-center align-middle">
      <audio controls src={songs[0].s3_link}></audio>
      <div>Bienvennue JULIEN</div>
      <div className="w-80 h-80 bg-black opacity-50">
        <img className="" src={songs[0].album.picture} alt="" />
      </div>
      <div>TRACK INFOS</div>
      <label htmlFor="">Réponse :</label>
      <input type="text" placeholder="votre réponse"></input>
    </div>
  );
}
