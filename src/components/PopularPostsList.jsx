import React from "react";
import PostStyle from "./PopularPostsList.module.css"

const PopularPostsList = () => {
  const postsData = [
    {
      img: "https://www.w3schools.com/w3images/workshop.jpg",
      title: "Lorem",
      about: "Sed mattis nunc"
    },
    {
      img: "https://www.w3schools.com/w3images/gondol.jpg",
      title: "Ipsum",
      about: "Ultricies congue"
    },
    {
      img: "https://www.w3schools.com/w3images/skies.jpg",
      title: "Dorum",
      about: "Ultricies congue"
    },
    {
      img: "https://www.w3schools.com/w3images/rock.jpg",
      title: "Mingsum",
      about: "Lorem ipsum dipsum"
    },
  ];

  return (
    <div className={PostStyle.postContainer}>
      <h4>Popular Posts</h4>

      <ul className={PostStyle.postList}>
        {postsData.map((post) => (
           <div className={PostStyle.postCard}>
             <li >
               <img
                 src={post.img}
                 alt={post.title}
                 style={{ width: "50px" }}
               />
               <span>{post.title}</span>
               <br />
               <span>{post.about}</span>
             </li>
         </div>
        ))}
      </ul>
    </div>
  );
};

export default PopularPostsList;
