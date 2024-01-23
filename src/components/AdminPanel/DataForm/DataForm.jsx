import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./DataForm.module.css";
import axios from "axios";
import PreviewData from "../PreviewData/PreviewData";

const DataForm = () => {
  const [formData, setFormData] = useState({
    img: "",
    title: "",
    description: "",
    details: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/blogPage", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
    navigate("/");
  };

  return (
    <>
      <form className={style.dataForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Image url:</label>
          <input
            type="text"
            id="img"
            name="img"
            required
            onChange={handleInputChange}
            value={formData.img}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={handleInputChange}
            value={formData.title}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            required
            onChange={handleInputChange}
            value={formData.description}
          />
        </div>
        <div>
          <label htmlFor="details">Details:</label>
          <textarea
            id="details"
            name="details"
            onChange={handleInputChange}
            required
            value={formData.details}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className={style.PreviewForm}>
        <div className={style.heading}>
          <h2>Blog Preview</h2>
        </div>
        <PreviewData formData={formData} />
      </div>
    </>
  );
};

export default DataForm;
