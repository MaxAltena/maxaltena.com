import React from "react";
import Alink from "./common/Alink";

const Sidebar = ({ nav, handleSidebar }) => {
  const { items } = nav;
  console.log(items);
  // TODO:
  //
  // Add Social icons to the sidebar
  // Add projects to the sidebar
  //
  return (
    <div className="Sidebar">
      <ul>
        <li key="close" className="close right">
          <button onClick={() => handleSidebar(false)}>
            <i className="material-icons">close</i>
          </button>
        </li>
        <li key="title">
          <h5>Menu</h5>
        </li>
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
    </div>
  );
};

export default Sidebar;
