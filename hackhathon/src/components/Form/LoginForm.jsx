import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import SignIn from "./SignIn";

export default function LoginForm({ isLogged, setIsLogged }) {
  const [userRes, setUserRes] = useState();
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
    <div className="flex flex-col items-center justify-center ">
      <h1 className="w-2/4 my-44 text-5xl text-center text-white">
        Welcome to the Super Blind Test
      </h1>
      <div className="flex justify-around items-center px-5 mx-10">
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex flex-col justify-center items-center w-2/4 mr-16 ">
        <div className="flex flex-col mb-4">
          <input
            className={`flex flex-col focus:border-2 border-gray-400 rounded-2xl py-2 px-8 mb-2 focus:outline-none ${
              errors.pseudo ? "bg-red-300 placeholder-red-700" : ""
            }`}
            type="text"
            placeholder="Pseudo..."
            name="pseudo"
            id="pseudo"
            {...register("pseudo", {
              required: "Required",
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
            className={`flex flex-col focus:border-2 border-gray-400 rounded-2xl py-2 px-8 mb-14 focus:outline-none ${
              errors.password ? "bg-red-300 placeholder-red-700" : ""
            }`}
            type="password"
            name="password"
            placeholder="Password..."
            id="password"
            {...register("password", {
              required: "Required",
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
          LOGIN
        </button>
        {error && (
          <div>
            <p className="text-xl text-red-500">INCORRECT LOGIN OR PASSWORD </p>
          </div>
        )}
        
      </form>
      <div className="mx-auto">
      <SignIn getDatas={getDatas} />
      </div>
      </div>
    </div>
  );
}
