import React from "react";
import "./searchbar.css";
import SearchIcon from "../Images/search-icon.png";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <form className="searchbar__form">
        <input
          type="text"
          className="searchbar__form-input"
          placeholder="Search here"
        />
        <button type="submit" className="searchbar__btn">
          <img src={SearchIcon} alt="search icon" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
