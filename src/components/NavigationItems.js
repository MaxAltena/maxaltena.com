import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItems = ({ id, classes, additionalItems }) => {
  return (
    <ul id={id} className={classes}>
      {additionalItems}
      <li>
        <NavLink to="/" className="link">
          <span className="inner">
            <span className="default">home</span>
            <span className="hover">home</span>
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="link">
          <span className="inner">
            <span className="default">about</span>
            <span className="hover">about</span>
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className="link">
          <span className="inner">
            <span className="default">projects</span>
            <span className="hover">projects</span>
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/skills" className="link">
          <span className="inner">
            <span className="default">skills</span>
            <span className="hover">skills</span>
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="link">
          <span className="inner">
            <span className="default">contact</span>
            <span className="hover">contact</span>
          </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationItems;
