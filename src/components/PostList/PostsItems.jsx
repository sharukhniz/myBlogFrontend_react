import React from "react";
import PostStyle from "./PopularPostsList.module.css";

const PostsItems = ({ post }) => {
  return (
    <div className={PostStyle.postCard} key={post.id}>
      <li>
        <img src={post.img} alt={post.title} style={{ width: "50px" }} />
        <span>{post.title}</span>
        <br />
        <span>{post.about}</span>
      </li>
    </div>
  );
};

export default PostsItems;
