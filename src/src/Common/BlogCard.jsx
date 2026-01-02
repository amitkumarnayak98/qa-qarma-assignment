import React from "react";
import "./BlogCard.css";

const BlogCard = ({ key, imgSrc, title, description, link, category }) => {
  return (
    <div key={key} className="blogCard">    
      {/* <img src={imgSrc} alt="" className="blogCard__image" /> */}
      <p className="blogCard__title">{title}</p>
      <p className="blogCard__description">{description}</p>
      {/* {category} */}
      <br />
      <a href={link} className="blogCard__link">
        Read more
      </a>
    </div>
  );
};

export default BlogCard;
