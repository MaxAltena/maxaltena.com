import React from "react";
import Alink from "../common/Alink";

const Copyright = () => {
  return (
    <div className="Copyright">
      <div className="innerCopyright hide-on-med-and-down">
        <div>
          <p>&copy; {new Date().getFullYear()} Max Altena</p>
        </div>
        <div>
          <Alink
            type="Link"
            to="/terms"
            name="Terms & conditions"
            classes="white-text"
          />
          <Alink
            type="Link"
            to="/credits"
            name="Credits"
            classes="white-text"
          />
        </div>
      </div>
      <div className="innerCopyright hide-on-large-only">
        <Alink
          type="Link"
          to="/terms"
          name="Terms & conditions"
          classes="white-text"
        />
        <Alink type="Link" to="/credits" name="Credits" classes="white-text" />
        <p>&copy; {new Date().getFullYear()} Max Altena</p>
      </div>
    </div>
  );
};

export default Copyright;
