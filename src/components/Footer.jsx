import React from "react";
import FooterStyle from "./Footer.module.css"

function Footer() {
  return (
    <div className={FooterStyle.footerContainer}>
      <div className={FooterStyle.pagination}>
      <button className={FooterStyle.previousBtn} >
        Previous
      </button>
      <button className={FooterStyle.nextBtn}>
        Next &raquo;
      </button>
      </div>
      <p className={FooterStyle.poweredBy}>
        Powered by{" "}
        <a href="https://www.w3schools.com/w3css/default.asp" >
          w3.css
        </a>
      </p>
    </div>
  );
}

export default Footer;
