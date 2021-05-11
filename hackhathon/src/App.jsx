import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [songs, setSongs] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [timer, setTimer] = useState(10);
  const [isPlay, setIsPlay] = useState(false);
  const [isWarming, setIsWarming] = useState(false);
  const [startTimer, setStartTimer] = useState(3);

  // useEffect(() => {
  //   if (startTimer <= 0) {
  //     console.log("okdfgdfqqdfqgh");
  //     const timer2 = setInterval(() => setTimer((c) => c - 1), 1000);

  //     setIsPlay(true);

  //     return function cleanup() {
  //       clearInterval(timer2);
  //     };
  //   }
  // }, [timer]);

  useEffect(() => {
    if (startTimer <= 0) {
      setIsPlay(true);
      setIsWarming(false);
      const timer = setInterval(() => setTimer((c) => c - 1), 1000);
      console.log("PLAY TRUE");
      console.log(timer);
      return function cleanup() {
        clearInterval(timer);
      };
      console.log(timer);
    }
  }, [startTimer]);

  useEffect(() => {
    const getDatas = async () => {
      const data = await (
        await fetch("https://api-bazify.basile.vernouillet.dev/api/v1/songs", {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpJZGF5eXkiLCJpYXQiOjE2MjA3Njc4MzAsImV4cCI6MTYyMDg1NDIzMH0.PU_CTI_zcVXgCMnBLQ9IGR55xQaSTJSfYM1FHi1NkEk",
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
      {!isLoading && (
        <Main
          setTimer={setTimer}
          startTimer={startTimer}
          setStartTimer={setStartTimer}
          isPlay={isPlay}
          setIsPlay={setIsPlay}
          timer={timer}
          songs={songs}
          setIsWarming={setIsWarming}
          isWarming={isWarming}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
