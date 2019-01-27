import React from "react";
import NavContent from "./Nav/NavContent";

const Nav = ({ nav }) => {
  const { brand, menu, items } = nav;
  return (
    <nav className="Nav transparent z-depth-0">
      <div className="nav-wrapper">
        {brand}
        {menu}
        <NavContent items={items} />
      </div>
    </nav>
  );
};

export default Nav;
