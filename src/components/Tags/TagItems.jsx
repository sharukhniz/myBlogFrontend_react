import React from "react";
import tagStyle from "./Tags.module.css";

function TagItems({ tag }) {
  return (
    <span key={tag.id} className={tagStyle.tagsList}>
      {tag.content}
    </span>
    
  );
}

export default TagItems;
