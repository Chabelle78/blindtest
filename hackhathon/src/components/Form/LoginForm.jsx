import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Main from "../Main/Main";

export default function LoginForm({ isLogged, setIsLogged }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log("jesubmite");
    setIsLogged(true);
    console.log(isLogged);
    reset();
  };

  console.log(isLogged);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="w-2/4 my-44 text-5xl text-center text-white">Welcome to the Super Blind Test</h1>
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex flex-col justify-center items-center w-2/4 "
      >
        <div className="flex flex-col mb-4">
          <input
            className={`focus:border-2 border-gray-400 rounded-full py-2 px-8 mb-2 focus:outline-none ${
              errors.pseudo ? "bg-red-300 placeholder-red-700" : ""
            }`}
            type="text"
            placeholder="Pseudo..."
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
        <div className="flex flex-col mb-2">
          <input
            className={`focus:border-2 border-gray-400 rounded-full py-2 px-8 mb-14 focus:outline-none ${
              errors.password ? "bg-red-300 placeholder-red-700" : ""
            }`}
            type="password"
            name="password"
            placeholder="Password..."
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
           bg-black rounded-2xl px-8 py-2 
           hover:bg-gray-700 text-white text-lg "
        >
          PLAY
        </button>
      </form>
    </div>
  );
}
