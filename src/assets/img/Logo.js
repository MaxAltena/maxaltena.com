import React from "react";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className="Logo"
    >
      <g className="M">
        <path d="M32,15 27,15 21.5,38.4 16,15 11,15 19,49 24,49z" />
        <path d="M34,15 31,27.8 31,49 36,49 36,15z" />
        <path d="M9,15 7,15 7,49 12,49 12,27.8z" />
      </g>
      <g className="A">
        <path d="M47,15 42,15 31,49 36,49z" />
        <path d="M47.1,37 41.9,37 40.6,41 48.4,41z" />
        <path d="M42,15 47,15 58,49 53,49z" />
      </g>
      <g className="X">
        <path d="M55.5,15 58,15 51,28 48.5,28z" />
        <g>
          <path d="M55,22.4 53.8,24.8 55.5,28 58,28z	" />
          <path d="M51.5,20.6 52.8,18.3 51,15 48.5,15 51.5,20.6z	" />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
