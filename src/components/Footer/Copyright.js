import React from "react";
import Alink from "../common/Alink";

const Copyright = ({ text, links }) => {
  return (
    <div className="Copyright">
      <div className="innerCopyright hide-on-med-and-down">
        <div>{text}</div>
        <div>
          {links &&
            links.map(link => {
              return (
                <Alink
                  key={link.name}
                  type={link.type}
                  to={link.to}
                  name={link.name}
                  classes={link.classes}
                  scrollToTop={true}
                />
              );
            })}
        </div>
      </div>
      <div className="innerCopyright hide-on-large-only">
        {links &&
          links.map(link => {
            return (
              <Alink
                key={link.name}
                type={link.type}
                to={link.to}
                name={link.name}
                classes={link.classes}
                scrollToTop={true}
              />
            );
          })}
        {text}
      </div>
    </div>
  );
};

export default Copyright;
