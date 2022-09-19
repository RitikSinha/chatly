import React, { useState } from "react";
import search from "../assets/icons/Search.png";
import User from "../assets/icons/User.png";
import ChatCard from "../components/ChatCard";
import { Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export const HomeScreen = () => {
  const [searchUser, setSearchUser] = useState("");
  const [user, setUser] = useState("");
  const [err, setErr] = useState();
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", searchUser)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(doc.data());
      });
    } catch (e) {
      setErr(true);
      console.log(e);
    }
  };
  const handleKeyDown = (e) => {
    e.code = "Enter" && handleSearch();
  };

  return (
    <div className=" bg-background h-screen">
      <div className="flex justify-center">
        <div className="flex items-center justify-around w-full pt-5 md:justify-between md:w-1/2 ">
          <div className="flex items-center bg-white px-3 py-2 rounded-md text-zinc-800">
            {" "}
            <input
              placeholder="Search Message.."
              className=" focus:outline-none"
              value={searchUser}
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearchUser(e.target.value)}
            />
            <img onClick={handleSearch} src={search} alt="Search" />
          </div>
          <Link to="/profile">
            <div className="bg-white p-2 rounded-md hover:bg-gray-100">
              <img src={User} alt="user" />
            </div>
          </Link>
        </div>
      </div>

      <div className="p-5 flex flex-col  md:justify-center md:items-center">
        {err ? <div>User not Found</div> : <></>}
        {user ? (
          <Link to="/chat">
            <ChatCard displayName={user.displayName} photoUrl={user.photoURL} />
          </Link>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};
