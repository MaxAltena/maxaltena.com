import React from "react";
import NavigationItems from "./NavigationItems";

const SidebarContent = ({ handleSidebar }) => {
  const elems = [
    <li key="close" className="close right">
      <button onClick={() => handleSidebar(false)}>
        <i className="material-icons">close</i>
      </button>
    </li>,
    <li key="title">
      <h5>Menu</h5>
    </li>
  ];

  // TODO:
  //
  // Add Social icons to the sidebar
  // Add projects to the sidebar
  //

  return <NavigationItems classes="SidebarContent" additionalItems={elems} />;
};

export default SidebarContent;
