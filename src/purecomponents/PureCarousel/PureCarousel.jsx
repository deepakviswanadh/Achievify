import React, { useState } from "react";
import { useSelector } from "react-redux";
import EachSlide from "./EachSlide";
import GenericButton from "components/GenericButton";
import "./PureCarousel.css";

const PureCarousel = () => {
  const [visibleId, setVisibleId] = useState(0);
  const imgList =
    useSelector((state) => state.appLevelReducer.fetchedData) || [];

  const previousSlide = () => {
    setVisibleId((visibleId + imgList.length - 1) % imgList.length);
  };

  const nextSlide = () => {
    setVisibleId((visibleId + 1) % imgList.length);
  };

  const currentSlide = imgList[visibleId];

  return (
    <div>
      <EachSlide
        key={currentSlide?.id}
        slideUrl={currentSlide?.ref}
        slide={currentSlide}
        active={visibleId == currentSlide?.id}
      />
      <div>
        <GenericButton
          disabled={false}
          txtToDisplay={"<"}
          onClick={previousSlide}
        />
        <GenericButton
          disabled={false}
          txtToDisplay={">"}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default PureCarousel;
