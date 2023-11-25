import React, { useEffect, useMemo, useRef } from "react";
import "./EachSlide.css";

const EachSlide = ({ slideUrl, slide, animateSlide }) => {
  const imgRef = useRef(null);

  const constructImg = useMemo(() => {
    return slideUrl == "" ? (
      <p>loading...</p>
    ) : (
      <img src={slideUrl} alt="" height="250" width="250" />
    );
  }, [slideUrl]);

  useEffect(() => {
    slideUrl != "" && animateSlide();
  }, [constructImg]);

  return <div ref={imgRef}>{constructImg}</div>;
};

export default EachSlide;
