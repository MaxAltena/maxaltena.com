import React from "react";
import Alink from "../common/Alink";

const NavigationItems = ({ id, classes, additionalItems }) => {
  return (
    <ul id={id} className={classes}>
      {additionalItems}
      <li>
        <Alink type="NavLink" to="/" name="Home" />
      </li>
      <li>
        <Alink type="NavLink" to="/about" name="About" />
      </li>
      <li>
        <Alink type="NavLink" to="/projects" name="Projects" />
      </li>
      <li>
        <Alink type="NavLink" to="/skills" name="Skills" />
      </li>
      <li>
        <Alink type="NavLink" to="/contact" name="Contact" />
      </li>
    </ul>
  );
};

export default NavigationItems;
