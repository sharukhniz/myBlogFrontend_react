import React from "react";
import header from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={header.header}>
      <h1>
        <b>{props.name}</b>
      </h1>
    </div>
  );
};

export default Header;
