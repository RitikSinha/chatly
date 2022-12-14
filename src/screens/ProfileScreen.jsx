import React from "react";
import Header from "../components/Header";
import tony from "../assets/tony.jpg";
import OnOff from "../components/OnOff";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const ProfileScreen = () => {
  const { logOut, user } = useUserAuth();
  console.log(user);
  return (
    <div className="bg-background  h-screen">
      <Header isChat={false} fullName="Profile & Settings" />
      <div className="flex flex-col items-center justify-center h-full">
        <img src={user.photoURL} alt="tony" className="rounded-full" />
        <h1 className="mt-2 text-lg text-gray-700">{user.displayName}</h1>
        <OnOff />

        <h1 onClick={logOut} className="text-red-500 mt-5">
          Logout
        </h1>
      </div>
    </div>
  );
};

export default ProfileScreen;
