import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

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
            Authorization: `Bearer0 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpJZGF5eXkiLCJpYXQiOjE2MjA3NjEyNjYsImV4cCI6MTYyMDg0NzY2Nn0.eIW8d8oZKbW6pqqs53iBED0v2D3SsS7SaT-tI5HRHiE`,
          },
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
