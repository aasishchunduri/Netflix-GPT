import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUpForm, setSignUpForm] = useState(true);

  const handleToggleSignUp = () => {
    setSignUpForm(!isSignUpForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/fa6f97d9-245e-43d7-bb56-af27cbf6d656/US-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="bg-black absolute p-12 w-3/12 my-32 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="py-4 text-3xl font-bold">
          {isSignUpForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSignUpForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignUpForm ? "Sign in" : "Sign up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={handleToggleSignUp}>
          {isSignUpForm
            ? "New to Netflix? SignUp"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
