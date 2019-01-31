import React from "react";
import ContactCTA from "./Footer/ContactCTA";
import Goodbye from "./Footer/Goodbye";
import Copyright from "./Footer/Copyright";

const Footer = ({ goodbye, copyright, logo }) => {
  return (
    <div className="Footer">
      <div className="slant" />
      <div className="background" />
      <div className="container white-text">
        <ContactCTA />
        <Goodbye sitemap={goodbye.sitemap} other={goodbye.other} />
        <div className="divider">
          <div className="innerDivider white" />
        </div>
        <Copyright text={copyright.text} links={copyright.links} />
      </div>
      {logo()}
    </div>
  );
};

export default Footer;
