import React from "react";
import headLogo from "../Images/Mask group.png";
import dashboardLogo from "../Images/Vector 680.png";
import settingsLogo from "../Images/Group 336.png";
import knowlhubLogo from "../Images/Group 393.png";
import searchIcon from "../Images/Group 3.png";
import userIcon from "../Images/Ellipse 103.png";
import bellIcon from "../Images/Group 2.png";
import watchLogo from "../Images/Group 108.png";
import hamburgerIcon from "../Images/Group 4.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="qa_qarma_header">
        <div className="qa_qarma_header_logo">
          <img src={headLogo} alt="" className="header_logo" />
        </div>
        <div className="qa_qarma_header_lists">
          <ul className="header_list_items">
            <div className="header_list_items_dashboard">
              <img
                src={dashboardLogo}
                alt=""
                className="header_dashboardLogo"
              />
              <li className="header_list_items_one">Dashboard</li>
            </div>
            <div className="header_list_items_dashboard">
              <img
                src={dashboardLogo}
                alt=""
                className="header_dashboardLogo"
              />
              <li className="header_list_items_one">Project</li>
            </div>
            <div className="header_list_items_dashboard">
              <img src={watchLogo} alt="" className="header_dashboardLogo" />
              <li className="header_list_items_one">Schedules</li>
            </div>
            <div className="header_list_items_dashboard">
              <img src={settingsLogo} alt="" className="header_dashboardLogo" />
              <li className="header_list_items_one">Settings</li>
            </div>
            <div className="header_list_items_dashboard">
              <img src={knowlhubLogo} alt="" className="header_dashboardLogo" />
              <li className="header_list_items_one">Knowledge Hub</li>
            </div>
          </ul>
        </div>
        <div className="qa_qarma_header_right">
          <div className="qa_qarma_search_bar">
            <input type="search" className="search_bar" />
            <img
              src={searchIcon}
              onClick="this.style.display='none';"
              alt=""
              className="search_icon"
            />
          </div>
          <div className="qa_qarma_bell_icon">
            <img src={bellIcon} alt="" className="bell_icon" />
          </div>
          <div className="qa_qarma_user_icon">
            <img src={userIcon} alt="" className="user_icon" />
          </div>
          <div className="qa_qarma_hamburger_icon">
            <img src={hamburgerIcon} alt="" className="hamburger_icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
