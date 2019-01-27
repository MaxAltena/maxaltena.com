import React from "react";
import Dropdown from "./Dropdown";
import Alink from "../../common/Alink";

const NavContent = ({ items }) => {
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      {items &&
        items.map(item => {
          if (item.subItems) {
            return <Dropdown key={item.name} item={item} />;
          } else {
            return (
              <li key={item.name}>
                <Alink
                  type={item.type}
                  to={item.to}
                  name={item.name}
                  classes={item.classes}
                />
              </li>
            );
          }
        })}
    </ul>
  );
};

export default NavContent;
