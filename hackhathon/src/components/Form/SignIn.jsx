import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Signin() {
  const [signIn, setSignIn] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitSignin = (data) => {
    setSignIn();
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
            name="pseudoSignin"
            id="pseudoSignin"
            {...register("pseudoSignin", {
              required: "This is required to play",
              minLength: {
                value: 3,
                message: "Please enter min 3 letters",
              },
            })}
          />
          <ErrorMessage errors={errors} name="pseudoSignin" />
        </div>
        <div className="">
          <input
            className={`focus:border-2 border-gray-400 rounded-full py-1 px-8 mb-2 focus:outline-none ${
              errors.passwordsignin ? "bg-red-300 placeholder-red-700" : ""
            }`}
            type="password"
            name="passwordsignin"
            placeholder="Choose a Password..."
            id="passwordsignin"
            {...register("passwordsignin", {
              required: "This is required to play",
              minLength: {
                value: 3,
                message: "Please enter min 3 letters",
              },
            })}
          />
          <ErrorMessage errors={errors} name="passwordsignin" />
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
