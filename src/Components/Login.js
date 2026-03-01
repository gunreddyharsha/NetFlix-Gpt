import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, useisSignInForm] = useState(true);

  const handleSignup = () => {
    useisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg"
          alt="bgImage"
          className="h-screen w-screen"
        />
      </div>
      <form className="absolute bg-black  p-12 w-3/12   m-auto right-0 left-0 top-1/4 bg-opacity-80 rounded-xl">
        <h1 className="text-white font-bold text-2xl px-2 py-3">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            placeholder="Username"
            type="text"
            className="p-2 m-2 my-3 w-full rounded-lg bg-gray-700"
          />
        )}
        <input
          placeholder="email"
          type="text"
          className="p-2 m-2 my-3 w-full rounded-lg bg-gray-700"
        />
        <br />
        <input
          placeholder="password"
          type="password"
          className="p-2 my-3 w-full m-2 rounded-lg bg-gray-700"
        />
        <br />
        <button
          type="submit"
          className="bg-red-700 p-2 m-2 my-3 rounded-lg text-white w-full "
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="text-white p-2 cursor-pointer" onClick={handleSignup}>
          {isSignInForm
            ? " New to Netflix? Sign up Now"
            : "Already registerd? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
