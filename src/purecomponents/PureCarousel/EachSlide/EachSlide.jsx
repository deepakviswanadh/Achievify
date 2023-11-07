import React from "react";
import "./EachSlide.css";

const EachSlide = ({ slideUrl, active, slide }) => {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <img src={slideUrl} alt="" height="300" width="300" />
      <span>{slide?.id}</span>
    </div>
  );
};

export default EachSlide;
