import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [songs, setSongs] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => setTimer((c) => (c -= 1)).toString(), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  console.log(timer);

  useEffect(() => {
    const getDatas = async () => {
      const data = await (
        await fetch("http://localhost:4000/api/v1/songs", {
          method: "GET",
        })
      ).json();
      setSongs(data);
      setIsLoading(false);
    };
    getDatas();
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      {!isLoading && <Main timer={timer} songs={songs} />}
      <Footer />
    </div>
  );
}

export default App;
