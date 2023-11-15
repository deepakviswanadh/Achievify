import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EachSlide from "./EachSlide";
import GenericButton from "components/GenericButton";
import "./PureCarousel.css";

const PureCarousel = () => {
  const [visibleId, setVisibleId] = useState(0);
  const [slideVisible, setSlideVisible] = useState({
    ref: "",
    slide: "",
    active: true,
  });
  const imgList = useSelector((state) => state.appLevelReducer.fetchedData);

  const previousSlide = () => {
    setVisibleId(visibleId == 0 ? imgList.length - 1 : visibleId - 1);
  };

  const nextSlide = () => {
    setVisibleId(visibleId == imgList.length - 1 ? 0 : visibleId + 1);
  };

  useEffect(() => {
    imgList != [] &&
      setSlideVisible({
        ref: imgList[visibleId]?.ref,
        slide: imgList[visibleId],
        active: true,
      });
  }, [imgList, visibleId]);

  return (
    <div>
      <div className="carousel-container">
        <EachSlide
          slideUrl={slideVisible?.ref}
          slide={slideVisible?.slide}
          active={slideVisible?.active}
        />
        {imgList
          .filter((eachSlide) => eachSlide?.id != visibleId)
          .map((slide, index) => (
            <div key={slide.id}>
              <EachSlide slideUrl={slide.ref} slide={slide} active={false} />
              <span>{slide?.id}</span>
            </div>
          ))}
      </div>
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
