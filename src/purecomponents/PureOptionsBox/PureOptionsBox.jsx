import React, { useLayoutEffect, useState, useCallback } from "react";
import "./PureOptionsBox.css";

const PureOptionsBox = ({
  isVisible,
  elementPos,
  setIsVisible,
  childComponent,
}) => {
  const [styleToApply, setStyleToApply] = useState({});

  const doS = useCallback(
    (event, root) => {
      let isClickInside = root.contains(event.target);
      if (isClickInside) {
        // console.log("inside click");
      } else {
        setIsVisible(false);
        //console.log("outside click");
      }
    },
    [setIsVisible]
  );

  useLayoutEffect(() => {
    const root = document.querySelector(`#options-root-${elementPos.slice(1)}`);
    const clickHandler = (event) => {
      doS(event, root);
    };
    console.log("elementPos", root, isVisible);
    if (root && isVisible) {
      window.addEventListener("click", clickHandler, {
        capture: true,
      });
      const parent = document.querySelector(`${elementPos}`);
      console.log("parent", parent);
      const { x, y, height } = parent?.getBoundingClientRect();
      let style = {
        position: "absolute",
        top: `${y + height + 20 || 0}px`,
        left: `${x || 0}px`,
        height: "15rem",
        width: "35rem",
        backgroundColor: "rgba(247, 235, 235, 0.902)",
        opacity: "inherit",
        border: "1px solid black",
        borderRadius: "6px",
        overflowY: "auto",
        overflowX: "hidden",
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
      id={`options-root-${elementPos.slice(1)}`}
      style={{
        ...styleToApply,
      }}
    >
      <div>{childComponent}</div>
    </div>
  ) : (
    <></>
  );
};

export default PureOptionsBox;
