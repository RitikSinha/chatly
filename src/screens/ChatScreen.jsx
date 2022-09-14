import React from "react";
import Header from "../components/Header";
import Cam from "../assets/icons/Camera.png";
import Attach from "../assets/icons/Attach.png";
const ChatScreen = () => {
  return (
    <div className="bg-background h-screen">
      <Header isChat={true} />

      <div className=" fixed bottom-0  w-full bg-white px-3 py-8 flex justify-center">
        <div className="flex items-center justify-center px-3 py-2 bg-backgraound rounded-md md:w-1/2 md:justify-between ">
          <input
            placeholder="Type your message..."
            className=" focus:outline-none bg-transparent"
          />
          <div className="flex">
            <div className="ml-2">
              <img src={Cam} alt="" />
            </div>
            <div className="ml-2">
              <img src={Attach} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
