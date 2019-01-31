import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link, NavLink } from "react-router-dom";

const Alink = ({ type, to, name, classes, scrollToTop, onClick }) => {
  let addClass = "Alink";
  if (classes) addClass = addClass + " " + classes;
  let handleClick = () => {
    if (scrollToTop) {
      scroll.scrollToTop({
        duration: 500,
        smooth: "easeInOut"
      });
    }
    if (onClick) {
      onClick();
    }
  };

  switch (type) {
    case "Link":
      return (
        <Link to={to} className={addClass} onClick={handleClick}>
          <span className="inner">
            <span className="default">{name}</span>
            <span className="hover">{name}</span>
          </span>
        </Link>
      );
    case "NavLink":
      return (
        <NavLink exact to={to} className={addClass} onClick={handleClick}>
          <span className="inner">
            <span className="default">{name}</span>
            <span className="hover">{name}</span>
          </span>
        </NavLink>
      );
    case "a":
    default:
      return (
        <a href={to} className={addClass} onClick={handleClick}>
          <span className="inner">
            <span className="default">{name}</span>
            <span className="hover">{name}</span>
          </span>
        </a>
      );
  }
};

export default Alink;
