import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <Main />
      <Footer />
    </div>
  );
}

export default App;
