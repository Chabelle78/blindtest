import React, { useState } from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
