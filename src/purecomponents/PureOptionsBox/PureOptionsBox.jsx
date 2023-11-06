import React, { useLayoutEffect, useState, useCallback } from "react";
import "./PureOptionsBox.css";

const PureOptionsBox = ({ isVisible, elementPos, setIsVisible }) => {
  const [styleToApply, setStyleToApply] = useState({});

  const doS = useCallback(
    (event, root) => {
      let isClickInside = root.contains(event.target);
      if (isClickInside) {
        console.log("inside click");
      } else {
        setIsVisible(false);
        console.log("outside click");
      }
    },
    [setIsVisible]
  );

  useLayoutEffect(() => {
    const root = document.querySelector("#options-root");

    const clickHandler = (event) => {
      doS(event, root);
    };
    if (root && isVisible) {
      window.addEventListener("click", clickHandler, {
        capture: true,
      });
      const parent = document.querySelector(`${elementPos}`);
      const { x, y, height } = parent?.getBoundingClientRect();
      let style = {
        position: "absolute",
        top: `${y + height + 20 || 0}px`,
        left: `${x || 0}px`,
      };
      setStyleToApply(style);
    }
    return () => {
      window.removeEventListener("click", clickHandler, {
        capture: true,
      });
    };
  }, [isVisible, doS, elementPos]);

  return isVisible ? (
    <div
      id="options-root"
      style={{
        ...styleToApply,
      }}
    >
      <div></div>
      <div></div>
    </div>
  ) : (
    <></>
  );
};

export default PureOptionsBox;
