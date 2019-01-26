import React from "react";

const Goodbye = () => {
  return (
    <div className="Goodbye">
      <div className="row">
        <div
          className="section col s12 m5 offset-m1"
          style={{ border: "2px solid black" }}
        >
          <p>sitemap</p>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>skills</li>
            <li>contact</li>
            {/* space */}
            <li>projects</li>
            <ul>
              <li>project1</li>
              <li>project2</li>
              <li>project3</li>
            </ul>
          </ul>
        </div>
        <div
          className="section col s6 m3"
          style={{ border: "2px solid black" }}
        >
          <p>social</p>
          <ul>
            <li>github</li>
            <li>linkedin</li>
            <li>flickr</li>
            <li />
          </ul>
        </div>
        <div
          className="section col s6 m3"
          style={{ border: "2px solid black" }}
        >
          <p>get in touch</p>
          <ul>
            <li>phone</li>
            <li>email</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Goodbye;
