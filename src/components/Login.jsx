import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_PIC } from "../utils/constants";


const Login = () => {


  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) {
      return;
    }
    if (!isSignIn) {
      //Sign Up logic
      // const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USER_PIC,
          })
            .then(() => {
              // Profile updated!
             // ...
             const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid,email,displayName,photoURL}))
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
   
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute p-12  text-white w-3/12 my-36 mx-auto right-0 left-0 rounded-lg bg-black/80"
        >
          <h1 className="font-bold text-2xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 w-full bg-gray-900"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-gray-900"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full bg-gray-900"
          />
          <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
          <button
            className="p-2 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
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
