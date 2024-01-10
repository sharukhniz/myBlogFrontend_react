import React, { useState } from 'react';
import blogStyle from './BlogEntry.module.css';

const BlogEntry = () => {
  const entriesData = [
    {
      title: "TITLE HEADING",
      img: "https://www.w3schools.com/w3images/woods.jpg",
      description: "Title description",
      date:"April 7, 2014",
      details: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      comments: 0
    },
    {
      title: "BLOG ENTRY",
      img: "https://www.w3schools.com/w3images/bridge.jpg",
      description: "Title description",
      date:"April 2, 2014",
      details: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      comments: 2
    },
  ];
  const [expandEntries, setExpandEntries] = useState(entriesData.map(() => false));

  const readMore = (index) => {
    setExpandEntries((prevExpandEntries) => {
      const newExpandEntries = [...prevExpandEntries];
      newExpandEntries[index] = !newExpandEntries[index];
      return newExpandEntries;
    });
  };

  return (
    <div>
      {entriesData.map((blog, index) => (
        <div className={blogStyle.blogContainer} key={index}>
          <img src={blog.img} alt={blog.title} style={{ width: '100%' }} />
          <div className={blogStyle.blogDetails}>
            <h3><b>{blog.title}</b></h3>
            <h5>{blog.description}, <span>{blog.date}</span></h5>
            <p>
              {expandEntries[index]
                ? blog.details
                : `${blog.details.split(' ').slice(0, 10).join(' ')}...`}
            </p>
            <div className={blogStyle.blogFooter}>
              <button
                className={blogStyle.readMore_btn}
                onClick={() => readMore(index)}
              >
                <b>{expandEntries[index] ? 'READ LESS' : 'READ MORE '}
                {expandEntries[index] ? ' ˄' : '˅'}
                </b>
              </button>
              <p>
                <div className={blogStyle.blogComments}>
                  <b>Comments &nbsp;</b> <span >{blog.comments}</span>
                </div>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogEntry;