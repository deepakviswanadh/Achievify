import React, { useLayoutEffect } from "react";
import "./PureOptionsBox.css";

const PureOptionsBox = ({ isVisible }) => {
  const doS = (event, root) => {
    var isClickInside = root.contains(event.target);
  };

  useLayoutEffect(() => {
    const root = document.querySelector("#options-root");
    const clickHandler = (event) => {
      doS(event, root);
    };
    if (root && isVisible) {
      window.addEventListener("click", clickHandler, {
        capture: true,
      });
    }
    return () => {
      window.removeEventListener("click", clickHandler, {
        capture: true,
      });
    };
  }, [isVisible]);

  return isVisible ? (
    <div id="options-root">
      <div></div>
      <div></div>
    </div>
  ) : (
    <></>
  );
};

export default PureOptionsBox;
