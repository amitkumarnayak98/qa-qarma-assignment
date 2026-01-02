import React from "react";
import "./sidebar.css";
import { SidebarData } from "./SidebarData";
import qaQarmaLogo from "../Images/Qarma logo 2 (Traced).png";

const Sidebar = ({ filterVideosData, filterBlogsData }) => {
  return (
    <div className="sidebar">
      <header className="sidebar__logo">
        <img src={qaQarmaLogo} alt="Dextrus Logo" />
      </header>

      <p>Choose a topic</p>

      <ul className="sidebar__menu">
        {SidebarData.map((item, index) => {
          return (
            <>
              <li
                key={index}
                className="sidebar__link"
                onClick={() => {
                  filterVideosData(item.category);
                  filterBlogsData(item.category);
                }}
              >
                <span>{item.title}</span>
              </li>
              <hr />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
