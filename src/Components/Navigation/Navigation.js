import React from "react";

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
    return null;
  }
};

export default Navigation;
