import React from "react";
import Goodbye from "./Footer/Goodbye";
import Copyright from "./Footer/Copyright";
import Logo from "../assets/img/Logo";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="slant" />
      <div className="container white-text">
        <Goodbye />
        <div className="divider white" />
        <Copyright />
      </div>
      {Logo()}
    </div>
  );
};

export default Footer;
