import React from "react";
import VideoCard from "../Common/VideoCard";

const Videos = ({ data = [] }) => {
  return (
    <>
      {data.map((video) => (
        <VideoCard
          key={video.id}
          url={video.url}
          title={video.title}
          category={video.category}
        />
      ))}
    </>
  );
};

export default Videos;
