import React from "react";
import { Link, NavLink } from "react-router-dom";

const Alink = ({ type, to, name, classes }) => {
  switch (type) {
    case "Link":
      return (
        <Link to={to} className={"Alink " + classes}>
          <span className="inner">
            <span className="default">{name}</span>
            <span className="hover">{name}</span>
          </span>
        </Link>
      );
    case "NavLink":
      return (
        <NavLink exact to={to} className={"Alink " + classes}>
          <span className="inner">
            <span className="default">{name}</span>
            <span className="hover">{name}</span>
          </span>
        </NavLink>
      );
    default:
      return (
        <a href={to} className={"Alink " + classes}>
          <span className="inner">
            <span className="default">{name}</span>
            <span className="hover">{name}</span>
          </span>
        </a>
      );
  }
};

export default Alink;
