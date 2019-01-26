import React from "react";
import Alink from "../common/Alink";

const Copyright = () => {
  return (
    <div className="Copyright">
      <div>&copy; {new Date().getFullYear()} Max Altena</div>
      <div>
        <Alink
          type="Link"
          to="/terms"
          name="Terms & conditions"
          classes="white-text"
        />
        <Alink type="Link" to="/credits" name="Credits" classes="white-text" />
      </div>
    </div>
  );
};

export default Copyright;
