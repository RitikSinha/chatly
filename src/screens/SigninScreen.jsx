import React from "react";
import BG from "../assets/background.png";
import Person from "../assets/persons.png";
import { Navigate, useNavigate } from "react-router-dom";

import { useUserAuth } from "../context/UserAuthContext";
//firestore setup
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
const SigninScreen = () => {
  const navigate = useNavigate();

  const { googleSignIn, user } = useUserAuth();

  //auth logic
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await googleSignIn();
      await setDoc(doc(db, "users", res.user.uid), {
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
        lastSignInAt: res.user.metadata.lastSignInTime,
        creationTime: res.user.metadata.creationTime,
        uid: res.user.uid,
      });
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  if (user) {
    return <Navigate to="/" />;
  }
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
        <button
          onClick={handleGoogleSignIn}
          className=" bg-brand py-5 px-8 rounded-full font-medium text-lg text-white mt-5"
        >
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
