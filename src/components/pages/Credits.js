import React from "react";

const Credits = () => {
  return (
    <div className="Credits">
      <div className="container row">
        <div className="col s12 m10 offset-m1 l8 offset-l2">
          <h2 className="hind bold">Photography</h2>
          <p className="section">
            I do like to go out and take photos, but don't have enough time to
            have photos of all the website content that I want to have. So I
            used some free photos from websites such as{" "}
            <a
              href="https://pexels.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pexels
            </a>
            ,{" "}
            <a
              href="https://unsplash.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>{" "}
            and{" "}
            <a
              href="https://pixabay.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixabay
            </a>
            .
          </p>
          <p>
            Furthermore I want to thank the following people directly as I used
            their photos:
          </p>
          <ul>
            <li>
              <a
                href="https://unsplash.com/photos/taiuG8CPKAQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Max Nelson
              </a>
            </li>
            <li>
              <a
                href="https://unsplash.com/photos/95YRwf6CNw8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clément H
              </a>
            </li>
            <li>
              <a
                href="https://pixabay.com/en/agree-english-consent-contract-1728448/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Catkin
              </a>
            </li>
            <li>
              <a
                href="https://unsplash.com/photos/rEVQCk1dqrA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guillaume de Germain
              </a>
            </li>
          </ul>
          <h2 className="hind bold">Design</h2>
          <p className="section">
            Parts of the design have been directly taken from{" "}
            <a
              href="https://materializecss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              materialize
            </a>{" "}
            as this library is great for making webpages easily responsable and
            good looking. Other libraries that I have used are some font
            libraries including{" "}
            <a
              href="https://fontawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Font Awesome
            </a>{" "}
            and the{" "}
            <a
              href="https://material.io/tools/icons/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material Icons
            </a>{" "}
            from Google.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Credits;
