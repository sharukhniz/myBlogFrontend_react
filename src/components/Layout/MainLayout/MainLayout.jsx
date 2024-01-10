import React from "react";
import Header from "../Common/Header";
import BlogEntry from "../../BlogEntry";
import Footer from "../../Footer";
import layoutStyle from "./MainLayout.module.css";
import SideLayout from "../SideLayout/SideLayout";

function MainLayout() {
  return (
    <div className={layoutStyle.main_layout}>
      <div className={layoutStyle.container}>
        <div className={layoutStyle.header}>
          <Header name={"MY BLOG"} />
          <p>
            Welcome to the blog of <span class={layoutStyle.headTag}>unknown</span>
          </p>
        </div>
        <div className={layoutStyle.blogPage}>
            <div className={layoutStyle.blogEntry}>
                <BlogEntry />
            </div>
            <div className={layoutStyle.SideLayout}>
                <SideLayout />
            </div>
        </div>

      </div>
      <div className="footer">
    <Footer />
</div>
    </div>
  );
}
export default MainLayout;
