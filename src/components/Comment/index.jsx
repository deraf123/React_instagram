import React from "react";

import './style.css'

export const Comment = ({ nickName, text }) => {
  return (
    <div className="cnCommentRoot">
      <span className="cnCommentName">{nickName}</span>
      <span >{text}</span>
    </div>
  );
};
