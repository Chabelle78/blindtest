import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [isLogged, setIsLogged] = useState(false);
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log("jesubmite");
    setIsLogged(!isLogged);
    console.log(isLogged);
    reset();
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
          {/* {  {isLogged ? <Link to={`/${user}`}> : ""}} */}
          PLAY
        </button>
      </form>
    </div>
  );
}
