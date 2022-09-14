import React from "react";
import search from "../assets/icons/Search.png";
import User from "../assets/icons/User.png";
import ChatCard from "../components/ChatCard";
import { Link } from "react-router-dom";
export const HomeScreen = () => {
  return (
    <div className=" bg-background h-screen">
      <div className="flex justify-center">
        <div className="flex items-center justify-around w-full pt-5 md:justify-between md:w-1/2 ">
          <div className="flex items-center bg-white px-3 py-2 rounded-md text-zinc-800">
            {" "}
            <input
              placeholder="Search Message.."
              className=" focus:outline-none"
            />
            <img src={search} alt="Search" />
          </div>
          <Link to="/profile">
            <div className="bg-white p-2 rounded-md hover:bg-gray-100">
              <img src={User} alt="Search" />
            </div>
          </Link>
        </div>
      </div>

      <div className="p-5 flex flex-col  md:justify-center md:items-center">
        <Link to="/chat">
          <ChatCard />
        </Link>
      </div>
    </div>
  );
};
