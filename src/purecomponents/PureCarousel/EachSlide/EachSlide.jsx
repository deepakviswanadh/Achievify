import React from "react";
import "./EachSlide.css";

const EachSlide = ({ slideUrl, slide }) => {
  return (
    <div>
      <img src={slideUrl} alt="" height="300" width="300" />
    </div>
  );
};

export default EachSlide;
