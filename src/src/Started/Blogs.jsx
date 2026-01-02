import React from "react";
import BlogCard from "../Common/BlogCard";

const Blogs = ({data = [] }) => {
  
  return (
    <>
      {data.map((blog) => (
        <BlogCard
          key={blog.id}
          imgSrc={blog.imgScr}
          title={blog.title}
          description={blog.description}
          link={blog.link}
          category={blog.category}
        />
      ))}
    </>
  );
};

export default Blogs;
