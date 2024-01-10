import React from 'react';
import BlogItem from './BlogItem';

const BlogEntry = () => {
  const entriesData = [
    {
      id: 1,
      title: "TITLE HEADING",
      img: "https://www.w3schools.com/w3images/woods.jpg",
      description: "Title description",
      date: "April 7, 2014",
      details: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      comments: 0
    },
    {
      id: 2,
      title: "BLOG ENTRY",
      img: "https://www.w3schools.com/w3images/bridge.jpg",
      description: "Title description",
      date: "April 2, 2014",
      details: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      comments: 2
    },
  ];

  return (
    <div>
      {entriesData.map((blog) => (
        <BlogItem  blog={blog} />
      ))}
    </div>
  );
};

export default BlogEntry;