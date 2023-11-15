import React, { useCallback, useEffect, useState } from "react";
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
  const [slideAnimation, setSlideAnimation] = useState("");
  const [direction, setDirection] = useState("");
  const imgList = useSelector((state) => state.appLevelReducer.fetchedData);

  const updateId = (newId) => {
    setVisibleId(newId);
  };

  const animateSlide = useCallback(() => {
    console.log("called me");
    let animationIn;
    switch (direction) {
      case "next":
        animationIn = "slide-in-next";
        break;
      case "prev":
        animationIn = "slide-in-prev";
        break;
      default:
        return "";
    }

    setSlideAnimation("");
    setTimeout(() => {
      setSlideAnimation(animationIn);
    }, 30);
  }, [direction]);

  const previousSlide = () => {
    updateId(visibleId == 0 ? imgList.length - 1 : visibleId - 1);
    setDirection("prev");
  };

  const nextSlide = () => {
    updateId(visibleId == imgList.length - 1 ? 0 : visibleId + 1);
    setDirection("next");
  };

  useEffect(() => {
    if (imgList != []) {
      setSlideVisible({
        ref: imgList[visibleId]?.ref,
        slide: imgList[visibleId],
        active: true,
      });
    }
  }, [imgList, visibleId]);

  return (
    <div>
      <div className={`carousel-container ${slideAnimation}`}>
        <EachSlide
          slideUrl={slideVisible?.ref}
          slide={slideVisible?.slide}
          active={slideVisible?.active}
          animateSlide={animateSlide}
        />
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
