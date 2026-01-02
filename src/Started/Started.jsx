import React, { useState } from "react";
import "./started.css";
import Searchbar from "../Common/Searchbar";
import Videos from "./Videos";
import Blogs from "./Blogs";
import VideosData from "../data/VideosData";
import { BlogsData } from "../data/BlogsData";

const Started = ({ VideosData, BlogsData }) => {
  const [tabId, setTabId] = useState(0);

  return (
    <div className="started">
      <Searchbar />
      <div className="started__tabs">
        <button
          className="started__tabs-item active"
          onClick={() => {
            setTabId(0);
          }}
        >
          Videos
        </button>
        <button
          className="started__tabs-item"
          onClick={() => {
            setTabId(1);
          }}
        >
          Blogs &amp; Use Cases
        </button>
      </div>

      <div className="started__content">
        {tabId === 0 ? <Videos data={VideosData} /> : <Blogs data={BlogsData}/>}
      </div>
    </div>
  );
};

export default Started;
