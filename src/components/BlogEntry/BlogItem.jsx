import React, { useState } from "react";
import blogStyle from "./BlogEntry.module.css";

const BlogItem = ({ blog }) => {
  const [expandEntry, setExpandEntry] = useState(false);

  const readMore = () => {
    setExpandEntry((prevExpand) => !prevExpand);
  };

  return (
    <div className={blogStyle.blogContainer} key={blog.id}>
      <img src={blog.img} alt={blog.title} style={{ width: "100%" }} />
      <div className={blogStyle.blogDetails}>
        <h3>
          <b>{blog.title}</b>
        </h3>
        <h5>
          {blog.description}, <span>{blog.date}</span>
        </h5>
        <p>
          {expandEntry
            ? blog.details
            : `${blog.details.split(" ").slice(0, 10).join(" ")} ...`}
        </p>
        <div className={blogStyle.blogFooter}>
          <button className={blogStyle.readMore_btn} onClick={readMore}>
            <b>
              {expandEntry ? "READ LESS" : "READ MORE "}
              {expandEntry ? " ˄" : "˅"}
            </b>
          </button>
          <p>
            <div className={blogStyle.blogComments}>
              <b>Comments &nbsp;</b> <span>{blog.comments}</span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
