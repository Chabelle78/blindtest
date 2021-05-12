import React, { useEffect, useState } from "react";
import { useController, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import SignIn from "./SignIn";

export default function LoginForm({ isLogged, setIsLogged }) {
  const [userRes, setUserRes] = useState();
  const [error, setError] = useState(false);

  const getDatas = async () => {
    const datas = await (
      await fetch("http://192.168.1.26:4000/api/v1/user/", {
        method: "GET",
      })
    ).json();
    setUserRes(datas);
    console.log(datas);
  };
  useEffect(() => {
    getDatas();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(userRes.filter((user) => user.pseudo.includes(data.pseudo)));
    if (
      userRes.filter((user) => user.pseudo.includes(data.pseudo)).length > 0 &&
      userRes.filter((user) => user.password.includes(data.password)).length > 0
    ) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
      setError(true);
      console.log(isLogged);
    }
  };

  return (
    <div>
      <p className="">Please enter your login if you have already registered</p>
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="text-center text-bl"
      >
        <div className="">
          <input
            className={`focus:border-2 border-gray-400 rounded-full py-1 px-8 mb-2 focus:outline-none ${
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
        <div className="">
          <input
            className={`focus:border-2 border-gray-400 rounded-full py-1 px-8 mb-2 focus:outline-none ${
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
           bg-black rounded-2xl px-4 py-2 
           hover:bg-gray-700 text-white text-lg "
        >
          LOGIN
        </button>
        {error && (
          <div>
            <p className="text-xl text-red-500">INCORRECT LOGIN OR PASSWORD </p>
          </div>
        )}
      </form>
      <SignIn />
    </div>
  );
}
