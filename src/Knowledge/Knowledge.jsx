import React from "react";
import VideosData from "../data/VideosData";
import { BlogsData } from "../data/BlogsData";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import Started from "../Started/Started";
import "./Knowledge.css";

const Knowledge = () => {
  const [videosData, setVideosData] = useState([]);
  const [filterString, setFilterString] = useState("");
  const [blogsData, setBlogsData] = useState([]);
  const [filterBlogs, setFilterBlogs] = useState("");

  const filterVideosData = (category) => {
    setFilterString(category);
  };

  const filteredData = VideosData.filter((item) =>
    filterString === "" ? true : item.category === filterString
  );

  const filterBlogsData = (category) => {
    setFilterBlogs(category);
    console.log("filterBlogs", category);
  };

  const filteredBlogs = BlogsData.filter((item) =>
    filterBlogs === "" ? true : item.category === filterBlogs
  );

  return (
    <div className="app__main">
      <Sidebar
        filterVideosData={filterVideosData}
        filterBlogsData={filterBlogsData}
      />
      <section>
        <Started VideosData={filteredData} BlogsData={filteredBlogs} />
      </section>
    </div>
  );
};

export default Knowledge;
