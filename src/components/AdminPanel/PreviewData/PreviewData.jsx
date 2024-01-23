import React, { useState } from "react";
import style from "./PreviewData.module.css";

const PreviewData = ({ formData }) => {
  const { img, title, description, details } = formData;
  const [expandEntries, setExpandEntries] = useState(false);

  const shortDetails = details.slice(0, 100);

  const readMore = () => {
    setExpandEntries((prevExpandEntries) => !prevExpandEntries);
  };
  return (
    <div>
      <div className={style.blogContainer}>
        <div className={style.previewBody}>
          <img
            className={style.previewImg}
            src={img}
            alt="img"
            style={{ width: "100%" }}
          />
          <div className={style.blogDetails}>
            <h3>
              <b>{title}</b>
            </h3>
            <h5>
              {description} <span></span>
            </h5>
            <p>{expandEntries ? details : `${shortDetails}...`}</p>
            <div className={style.blogFooter}>
              <button className={style.readMore_btn} onClick={readMore}>
                <b>
                  {expandEntries ? "READ LESS" : "READ MORE "}
                  {expandEntries ? " ˄" : "˅"}
                </b>
              </button>
              <p>
                <div className={style.blogComments}>
                  <p>
                    comments <span>0</span>
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewData;
