import React from "react";
import ProfileCard from "../../ProfileCard/ProfileCard";
import PopularPostsList from "../../PostList/PopularPostsList";
import Tags from "../../Tags/Tags";

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
