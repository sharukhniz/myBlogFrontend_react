import React from "react";
import ProfileCard from "../../ProfileCard";
import PopularPostsList from "../../PopularPostsList";
import Tags from "../../Tags";


function SideLayout() {
  return (
    <div>
      <ProfileCard />
      <div className="popularPostList">
        <PopularPostsList />
      </div>
      <div className="tags">
        <Tags />
      </div>
    </div>
  );
}

export default SideLayout;
