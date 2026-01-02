import React from "react";
import "./VideoCard.css";

const VideoCard = ({ key, url, title, category }) => {
  return (
    <>
      <div key={key} className="videoCard">
        <iframe
          className="videoCard__frame"
          src={url}
          title={title}
          category={category}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <p className="videoCard__title">{title}</p>
      </div>
    </>
  );
};

export default VideoCard;
