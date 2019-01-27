import React from "react";
import Alink from "../../common/Alink";

const Dropdown = ({ item }) => {
  return (
    <li key={item.name} className="dropdown">
      <Alink
        type={item.type}
        to={item.to}
        name={item.name}
        classes={item.classes}
      />
      <i className="material-icons">arrow_drop_down</i>
      <ul className="dropdownContent">
        {item.subItems.map(subItem => {
          return (
            <li key={subItem.name}>
              <Alink
                type={subItem.type}
                to={subItem.to}
                name={subItem.name}
                classes={subItem.classes}
              />
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Dropdown;
