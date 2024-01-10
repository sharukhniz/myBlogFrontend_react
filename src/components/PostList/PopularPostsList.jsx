import React from "react";
import PostStyle from "./PopularPostsList.module.css";
import PostsItems from "./PostsItems";

const PopularPostsList = () => {
  const postsData = [
    {
      id: 1,
      img: "https://www.w3schools.com/w3images/workshop.jpg",
      title: "Lorem",
      about: "Sed mattis nunc",
    },
    {
      id: 2,
      img: "https://www.w3schools.com/w3images/gondol.jpg",
      title: "Ipsum",
      about: "Ultricies congue",
    },
    {
      id: 3,
      img: "https://www.w3schools.com/w3images/skies.jpg",
      title: "Dorum",
      about: "Ultricies congue",
    },
    {
      img: "https://www.w3schools.com/w3images/rock.jpg",
      title: "Mingsum",
      about: "Lorem ipsum dipsum",
    },
  ];

  return (
    <div className={PostStyle.postContainer}>
      <h4>Popular Posts</h4>
      <ul className={PostStyle.postList}>
        {postsData.map((post) => (
          <PostsItems post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PopularPostsList;
