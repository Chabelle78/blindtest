import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Main from "../Main/Main";

export default function LoginForm({ isLogged, setIsLogged }) {
  const [userRes, setUserRes] = useState();
  const getDatas = async () => {
    const datas = await (
      await fetch("http://localhost:4000/api/v1/user/", {
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
    }
  };

  return (
    <div>
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="text-center"
      >
        <div className="flex flex-col mb-2">
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
        <div className="flex flex-col mb-2">
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
          PLAY
        </button>
      </form>
    </div>
  );
}
