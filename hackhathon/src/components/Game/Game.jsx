import React from "react";

export default function Game() {
  return (
    <div className="flex flex-col items-center justify-center align-middle">
      <div>Bienvennue JULIEN</div>
      <div className="w-80 h-80 bg-black opacity-50">
        <img className="" src="" alt="" />
      </div>
      <div>TRACK INFOS</div>
      <label htmlFor="">Réponse :</label>
      <input type="text" placeholder="votre réponse"></input>
    </div>
  );
}
