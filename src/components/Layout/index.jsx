import React from "react";
import { Navbar } from "../NavBar";
import "./style.css";

export const Layout = ({ nickName, avatarUrl, children, id }) => {
  return (
    <div className='cnLayoutRoot'>
      <Navbar nickName={nickName} avatarUrl={avatarUrl} id={id} />
      <div className='cnLayoutBody'>{children}</div>
    </div>
  );
};
