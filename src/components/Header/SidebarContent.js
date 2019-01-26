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
      <h5>Where to captain?</h5>
    </li>
  ];

  return <NavigationItems classes="SidebarContent" additionalItems={elems} />;
};

export default SidebarContent;
