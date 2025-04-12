"use client";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import "./logout.css";

const Logout = () => {
  return (
    <div className="logout-area">
      <button className="logout-btn">
        <span>Log out</span>
        <div className="logout-icon">
          <IoLogOutOutline size={22} />
        </div>
      </button>
    </div>
  );
};

export default Logout;
