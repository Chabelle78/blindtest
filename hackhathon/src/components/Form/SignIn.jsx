import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Signin({ getDatas }) {
  const [pseudo, setPseudo] = useState();
  const [password, setPassword] = useState();
  const [isRegistered, setIsRegistered] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getDatas();
  }, [isRegistered]);

  const onSubmitSignin = (data) => {
    setPseudo(data.pseudo);
    setPassword(data.password);
    if (pseudo) {
      fetch("http://localhost:4000/api/v1/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pseudo: pseudo, password: password }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .then((res) => setIsRegistered(true))
        .catch((err) => console.log(err));
    }

    getDatas();
  };
  return (
    <div>
      <p className="">If Not, Please Sign In</p>
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmitSignin)}
        action=""
        className="text-center text-bl"
      >
        <div className="">
          <input
            className={`focus:border-2 border-gray-400 rounded-full py-1 px-8 mb-2 focus:outline-none ${
              errors.pseudoSignin ? "bg-red-300 placeholder-red-700" : ""
            }`}
            type="text"
            placeholder="Choose a Pseudo..."
            name="pseudo"
            id="pseudo"
            {...register("pseudo", {
              required: "This is required to play",
              minLength: {
                value: 3,
                message: "Please enter min 3 letters",
              },
            })}
          />
          <ErrorMessage errors={errors} name="pseudo" />
        </div>
        <div className="">
          <input
            className={`focus:border-2 border-gray-400 rounded-full py-1 px-8 mb-2 focus:outline-none ${
              errors.passwordsignin ? "bg-red-300 placeholder-red-700" : ""
            }`}
            type="password"
            name="passwordsignin"
            placeholder="Choose a Password..."
            id="password"
            {...register("password", {
              required: "This is required to play",
              minLength: {
                value: 3,
                message: "Please enter min 3 letters",
              },
            })}
          />
          <ErrorMessage errors={errors} name="password" />
        </div>
        <button
          type="submit"
          className="border-4 border-black 
           bg-black rounded-2xl px-4 py-2 
           hover:bg-gray-700 text-white text-lg "
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
}
