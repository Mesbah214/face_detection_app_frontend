import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./icons8-brain-64.png";

const Logo = () => {
  return (
    <div className="">
      <Tilt className="Tilt br2 shadow-2" options={{ max: 45 }}>
        <div className="Tilt-inner">
          <img src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
