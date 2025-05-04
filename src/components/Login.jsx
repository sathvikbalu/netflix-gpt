import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_small.jpg"
          alt=""
        />
      </div>
      <div>
        <form className="absolute p-12  text-white w-3/12 my-36 mx-auto right-0 left-0 rounded-lg bg-black/80">
          <h1 className="font-bold text-2xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 w-full bg-gray-900"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-gray-900"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full bg-gray-900"
          />
          <button className="p-2 my-6 bg-red-700 w-full rounded-lg">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer" onClick={toggleSignUp}>
            {isSignIn
              ? "New to Netflix ? Sign Up Now"
              : "Already a User ? Sign In now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
