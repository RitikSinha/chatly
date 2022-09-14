import React from "react";
import Header from "../components/Header";
import tony from "../assets/tony.jpg";
import OnOff from "../components/OnOff";
import { Link } from "react-router-dom";
const ProfileScreen = () => {
  return (
    <div className="bg-background  h-screen">
      <Header isChat={false} fullName="Profile & Settings" />
      <div className="flex flex-col items-center justify-center h-full">
        <img src={tony} alt="tony" className="rounded-full" />
        <h1 className="mt-2 text-lg text-gray-700">Tony Stark</h1>
        <OnOff />
        <Link to="/signin">
          <h1 className="text-red-500 mt-5">Logout</h1>
        </Link>
      </div>
    </div>
  );
};

export default ProfileScreen;
