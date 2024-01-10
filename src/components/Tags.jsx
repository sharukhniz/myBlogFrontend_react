import React from "react";
import TagItems from "./TagItems";
import tagStyle from "./Tags.module.css";

function Tags() {
  const tagList = [
    { id: "1", content: "Travel" },
    { id: "2", content: "New York" },
    { id: "3", content: "London" },
    { id: "4", content: "IKEA" },
    { id: "5", content: "NORWAY" },
    { id: "6", content: "DIY" },
    { id: "7", content: "Ideas" },
    { id: "8", content: "Baby" },
    { id: "9", content: "Family" },
    { id: "10", content: "News" },
    { id: "11", content: "Clothing" },
    { id: "12", content: "Shopping" },
    { id: "13", content: "Sports" },
    { id: "14", content: "Games" },
  ];

  return (
    <div className={tagStyle.tagsContainer}>
      <div className={tagStyle.tagsHeading}>
        <h4>Tags</h4>
      </div>
      <div className={tagStyle.tagsBody}>
        <p className={tagStyle.tagList}>
          {tagList.map((tag) => (
            <TagItems  tag={tag} />
          ))}
        </p>
      </div>
    </div>
  );
}

export default Tags;
