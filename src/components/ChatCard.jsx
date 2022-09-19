import React from "react";
import Tony from "../assets/tony.jpg";
const ChatCard = ({ displayName, photoUrl }) => {
  return (
    <div className=" bg-white rounded-md w-full md:w-96 flex px-3 py-2 items-center">
      <img
        src={photoUrl}
        alt=""
        width="70"
        height="70"
        className=" rounded-full"
      />
      <div className="p-2 w-full">
        <div className="flex items-center justify-between">
          <h1>{displayName}</h1>
          <p className=" text-gray-500">20:32</p>
        </div>
        <p className=" text-gray-500">how are you man?😏</p>
      </div>
    </div>
  );
};

export default ChatCard;
