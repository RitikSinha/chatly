import React from "react";
import Tony from "../assets/tony.jpg";
import Left from "../assets/icons/Left.png";
import Video from "../assets/icons/Video.png";
import Call from "../assets/icons/Phone.png";
const Header = ({ photo, fullName, isChat }) => {
  return (
    <div className="fixed w-full bg-white flex justify-center">
      <div
        className={
          isChat
            ? "bg-white w-full flex items-center justify-around py-3 px-3 md:w-1/2"
            : "flex items-center w-full py-5 px-3 md:w-1/2"
        }
      >
        <div onClick={() => window.history.back()}>
          <img src={Left} width="30" alt="" className=" rounded-full mr-3" />
        </div>
        <div className={isChat ? "block" : "hidden"}>
          <img
            src={photo ? photo : Tony}
            alt=""
            width="70"
            height="70"
            className=" rounded-full"
          />
        </div>
        <div>
          <h1>{fullName ? fullName : "Tony Stark"}</h1>
          <p className={isChat ? "text-sm text-green-600" : "hidden"}>Online</p>
        </div>
        <div className={isChat ? "block" : "hidden"}>
          <img src={Video} alt="" width="30" className=" rounded-full" />
        </div>
        <div className={isChat ? "block" : "hidden"}>
          <img src={Call} alt="" width="30" className=" rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
