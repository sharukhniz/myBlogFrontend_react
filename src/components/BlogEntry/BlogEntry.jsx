import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";

const BlogEntry = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/blogPage")
      .then((response) => response.json())
      .then((items) => setItems(items.reverse()));
  }, []);

  return (
    <div>
      {items.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogEntry;
