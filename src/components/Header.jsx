import React from "react";
import Tony from "../assets/tony.jpg";
import Left from "../assets/icons/Left.png";
import Video from "../assets/icons/Video.png";
import Call from "../assets/icons/Phone.png";
const Header = () => {
  return (
    <div className="fixed w-full bg-white flex justify-center">
      <div className="  bg-white flex items-center justify-around py-3 px-3 md:w-1/2">
        <div>
          <img src={Left} width="30" alt="" className=" rounded-full" />
        </div>
        <div>
          <img
            src={Tony}
            alt=""
            width="70"
            height="70"
            className=" rounded-full"
          />
        </div>
        <div>
          <h1>Tony Stark</h1>
          <p className="text-sm text-green-600">Online</p>
        </div>
        <div>
          <img src={Video} alt="" width="30" className=" rounded-full" />
        </div>
        <div>
          <img src={Call} alt="" width="30" className=" rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
