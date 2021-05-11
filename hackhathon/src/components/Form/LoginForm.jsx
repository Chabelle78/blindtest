import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function LoginForm() {
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log("jesubmite");

    reset();
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit(onSubmit)} action="">
        <div>
          {/* <label htmlFor="pseudo" className="">
            PSEUDO
          </label> */}
          <input
            className="focus:border-2 border-gray-400 rounded-full py-1 px-8 mb-2 focus:outline-none"
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
        <div>
          {/* <label htmlFor="password">PASSWORD</label> */}
          <input
            className="focus:border-2 border-gray-400 rounded-full py-1 px-8 mb-2 focus:outline-none"
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
          className="border rounded-full text-xl bg-yellow-500"
        >
          PLAY
        </button>
      </form>
    </div>
  );
}
