import React from "react";
import "./searchbar.css";
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="search-input">
        <input type="text" placeholder="Search apartments" />
      </div>
      <div className="search-btn">
        <div className="search-icon">
          <CiSearch size={20} />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
