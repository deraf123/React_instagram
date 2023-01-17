import React from "react";
import "./style.css";
import UserBadge from "../UserBadge";

export const Navbar = ({ nickName, avatarUrl, id }) => {
  return (
    <div className='cnNavBarRoot'>
      <div className='cnNavBarWrapper'>
        <span>RuGram</span>
        <div>
          <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
        </div>
      </div>
    </div>
  );
};
