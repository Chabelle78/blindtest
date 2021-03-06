import React, { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/Form/LoginForm";
import PopUp from "./components/PopUp/PopUp";
import "./App.css";

function App() {
  const [songs, setSongs] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [timer, setTimer] = useState(10);
  const [isPlay, setIsPlay] = useState(false);
  const [isWarming, setIsWarming] = useState(false);
  const [startTimer, setStartTimer] = useState(3);
  const [isLogged, setIsLogged] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isLoose, setIsLoose] = useState(false);
  const audioRef = useRef();
  const [random, setRandom] = useState("");
  const [random2, setRandom2] = useState("");
  const [random3, setRandom3] = useState("");
  const [random4, setRandom4] = useState("");
  const [shuffled, setShuffled] = useState();
  const [users, setUsers] = useState();
  let myArray = [random, random2, random3, random4];
  console.log(myArray);

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
  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };
  useEffect(() => {
    console.log(songs);
    shuffle(myArray);
    setShuffled(myArray);
    console.log(shuffled);
  }, [isPlay]);

  const resetGame = () => {
    audioRef.current.pause();
    setIsWin(false);
    setIsLoading(false);
    setIsWarming(false);
    setIsLoose(false);
    setIsPlay(false);
    setStartTimer(3);
    setTimer(10);
    getDatas();
  };

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
  const getDatas2 = async () => {
    const data = await (
      await fetch("http://192.168.1.26:4000/api/v1/user/", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkNoYWJlbGxlNzgiLCJpYXQiOjE2MjA3NjQ5MDcsImV4cCI6MTYyMDg1MTMwN30.RYp-8fwRb4vhd78JLSHIcp3L8llJ625y9cEla11xHKk",
        },
      })
    ).json();
    setUsers(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getDatas();
    getDatas2();
    console.log(users);
  }, []);
  console.log(users);
  useEffect(() => {
    if (songs) {
      setRandom(songs[Math.floor(Math.random() * songs.length)]);
      setRandom2(songs[Math.floor(Math.random() * songs.length)]);
      setRandom3(songs[Math.floor(Math.random() * songs.length)]);
      setRandom4(songs[Math.floor(Math.random() * songs.length)]);
    }
  }, [songs]);

  return (
    <div className="flex flex-col purpleWave h-screen">
      <audio
        className="hidden"
        ref={audioRef}
        controls
        src={random.s3_link}
      ></audio>
      <Navbar setIsLogged={setIsLogged} isLogged={isLogged} />
      {isLogged ? (
        !isLoading &&
        shuffled && (
          <Main
            users={users}
            shuffle={shuffle}
            resetGame={resetGame}
            myArray={shuffled}
            audioRef={audioRef}
            isLoose={isLoose}
            setIsLoose={setIsLoose}
            isWin={isWin}
            setIsWin={setIsWin}
            setTimer={setTimer}
            startTimer={startTimer}
            setStartTimer={setStartTimer}
            isPlay={isPlay}
            setIsPlay={setIsPlay}
            timer={timer}
            songs={songs}
            setIsWarming={setIsWarming}
            isWarming={isWarming}
            random={random}
            random2={random2}
            random3={random3}
            random4={random4}
            setRandom={setRandom}
            setRandom2={setRandom2}
            setRandom3={setRandom3}
            setRandom4={setRandom4}
          />
        )
      ) : (
        <LoginForm setIsLogged={setIsLogged} isLogged={isLogged} />
      )}

      {isWin && (
        <PopUp
          random={random}
          getDatas={getDatas}
          setIsWin={setIsWin}
          setIsLoose={setIsLoose}
          resetGame={resetGame}
        />
      )}
    </div>
  );
}

export default App;
