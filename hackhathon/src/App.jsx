import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import './App.css'

function App() {
  const [songs, setSongs] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => setTimer((c) => (c -= 1)), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    const getDatas = async () => {
      const data = await (
        await fetch("https://api-bazify.basile.vernouillet.dev/api/v1/songs", {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkNoYWJlbGxlNzgiLCJpYXQiOjE2MjA3NjQ5MDcsImV4cCI6MTYyMDg1MTMwN30.RYp-8fwRb4vhd78JLSHIcp3L8llJ625y9cEla11xHKk",
          },
        })
      ).json();
      setSongs(data);
      setIsLoading(false);
    };
    getDatas();
  }, []);

  return (
    <div className="apps flex flex-col">
      <Navbar />
      {!isLoading && <Main timer={timer} songs={songs} />}
      <Footer />
    </div>
  );
}

export default App;
