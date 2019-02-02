import React from "react";
import { Link } from "react-router-dom";

const ContactTypeSwitch = ({ hash }) => {
  let content;
  switch (hash) {
    default:
    case "#form":
      content = (
        <div className="contactTypeSwitch">
          <Link
            to="#form"
            className="btn btn-large waves-effect waves-dark lowercase active"
          >
            Message me
          </Link>
          <div className="space" />
          <Link
            to="#direct"
            className="btn btn-large waves-effect waves-dark lowercase"
          >
            Email/Call me
          </Link>
        </div>
      );
      break;
    case "#direct":
      content = (
        <div className="contactTypeSwitch">
          <Link
            to="#form"
            className="btn btn-large waves-effect waves-dark lowercase"
          >
            Message me
          </Link>
          <div className="space" />
          <Link
            to="#direct"
            className="btn btn-large waves-effect waves-dark lowercase active"
          >
            Email/Call me
          </Link>
        </div>
      );
      break;
  }
  return content;
};

export default ContactTypeSwitch;
