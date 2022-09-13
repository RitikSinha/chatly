import React from "react";
import BG from "../assets/background.png";
import Person from "../assets/persons.png";
const SigninScreen = () => {
  return (
    <>
      <div className=" h-screen w-screen flex flex-col items-center">
        <div
          className=" w-screen flex flex-col items-center"
          style={{ backgroundImage: `url(${BG})` }}
        >
          <img src={Person} alt="persons" className="block  " />
        </div>
        <h1 className="text-2xl text-zinc-700 font-medium mt-3 text-center">
          Enjoy new experience <br /> chating with global friends
        </h1>
        <h1 className=" text-zinc-500 font-medium mt-3 text-center">
          Connect people around the world for free
        </h1>
        <button className=" bg-brand py-5 px-8 rounded-full font-medium text-lg text-white mt-5">
          Sign in with Google
        </button>
        <h1 className=" text-sm text-zinc-500 font-medium mt-8 text-center">
          {" "}
          By signing in you agree with our terms & conditions
        </h1>
      </div>
    </>
  );
};

export default SigninScreen;
