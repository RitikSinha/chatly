import React from "react";
import search from "../assets/icons/Search.png";
import User from "../assets/icons/User.png";
import ChatCard from "../components/ChatCard";
export const HomeScreen = () => {
  return (
    <div className=" bg-backgraound h-screen">
      <div className="flex items-center justify-around w-full pt-5 md:justify-between md:px-12">
        <div className="flex items-center bg-white px-3 py-2 rounded-md text-zinc-800">
          {" "}
          <input
            placeholder="Search Message.."
            className=" focus:outline-none"
          />
          <img src={search} alt="Search" />
        </div>
        <div className="bg-white p-2 rounded-md">
          <img src={User} alt="Search" />
        </div>
      </div>
      <div className="p-5 flex flex-col md:p-12 md:justify-start">
        <ChatCard />
      </div>
    </div>
  );
};
