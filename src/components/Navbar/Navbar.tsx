import React from "react";
import "./navbar.css";
import Searchbar from "./Searchbar/Searchbar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div></div>
      <Searchbar />
      <Link href={"/profile"}>
        <div className="profile-abatar">
          <div className="first-letter">A</div>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
