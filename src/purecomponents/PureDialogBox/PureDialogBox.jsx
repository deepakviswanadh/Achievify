import React, { useLayoutEffect } from "react";
import "./pureDialogBox.css";

const PureDialogBox = () => {
  const handleClick = (event, root) => {
    let isClickInside = root.contains(event.target);
    if (isClickInside) {
    } else {
    }
  };

  useLayoutEffect(() => {
    const root = document.querySelector("#dialog-root");
    const clickHandler = (event) => {
      handleClick(event, root);
    };
    if (root) {
      window.addEventListener("click", clickHandler, {
        capture: true,
      });
    }
    return () => {
      window.removeEventListener("click", clickHandler, {
        capture: true,
      });
    };
  }, []);

  return (
    <div id="dialog-root">
      <div></div>
      <div></div>
    </div>
  );
};

export default PureDialogBox;
