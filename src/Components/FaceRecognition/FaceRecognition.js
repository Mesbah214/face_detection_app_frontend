import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center">
      <div style={{ maxWidth: "450px", position: "relative" }}>
        <img
          id="inputImage"
          style={{ paddingBottom: "1rem", width: "100%" }}
          src={imageUrl}
          alt="detection"
        />
        <div
          className="bounding_box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            left: box.leftCol,
            bottom: box.bottomRow,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
