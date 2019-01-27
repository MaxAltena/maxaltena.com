import React from "react";
import { Link } from "react-router-dom";
import Alink from "./common/Alink";

const Sidebar = ({ nav, handleSidebar }) => {
  const { items, socials } = nav;
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
        {items &&
          items.map(item => {
            let elements = [];
            if (item.subItems) {
              elements.push(
                <li key={item.name}>
                  <Alink
                    type={item.type}
                    to={item.to}
                    name={item.name}
                    classes={item.classes}
                  />
                </li>
              );
              item.subItems.forEach(subItem => {
                elements.push(
                  <li key={subItem.name} className="subItem">
                    <Alink
                      type={subItem.type}
                      to={subItem.to}
                      name={subItem.name}
                      classes={subItem.classes}
                    />
                  </li>
                );
              });
            } else {
              elements.push(
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
            return elements;
          })}
        {socials &&
          socials.map(social => {
            return (
              <li key={social.name} className="linkExternal">
                {social.type === "other" ? (
                  <a
                    href={social.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={social.classes}
                  >
                    {social.icon}
                    <span className="inner">
                      <span className="default">{social.name}</span>
                      <span className="hover">{social.name}</span>
                    </span>
                  </a>
                ) : (
                  <Link to={social.to} className={social.classes}>
                    {social.icon}
                    <span className="inner">
                      <span className="default">{social.name}</span>
                      <span className="hover">{social.name}</span>
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
