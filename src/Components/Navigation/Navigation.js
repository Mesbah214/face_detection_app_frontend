import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="signin_nav">
        <p
          className="f3 link dim black pointer"
          onClick={() => onRouteChange("signin")}
        >
          Sign In
        </p>
        <p
          className="f3 link dim black pointer"
          onClick={() => onRouteChange("register")}
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
