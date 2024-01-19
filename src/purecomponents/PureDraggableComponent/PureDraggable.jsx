import React, { useState, useRef, useCallback } from "react";

const PureDraggable = () => {
  const [startDrag, setDragStart] = useState(false);
  const [applyStyle, setApplyStyle] = useState({});
  const divRef = useRef(null);
  const logMe = function (event) {
    setDragStart(false);
  };

  const debounce = useCallback(
    (callback, timer) => {
      let delay;
      return function (...args) {
        clearInterval(delay);
        delay = setTimeout(() => {
          setDragStart(false);
          if (startDrag) {
            const { clientX: newX, clientY: newY } = args[0];
            callback.apply(this, args);
            handleDragShift(newX, newY);
          }
        }, timer);
      };
    },
    [startDrag]
  );

  const throttledLogMe = debounce(logMe, 300);

  const handleDragEnd = (event) => {
    setDragStart(true);
  };

  const handleDragShift = (newX, newY) => {
    const { height, width } = divRef.current.getBoundingClientRect();
    setApplyStyle({
      ...applyStyle,
      position: "absolute",
      top: newY - height / 2,
      left: newX - width / 2,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        height: "40vh",
      }}
      onMouseMove={(event) => {
        startDrag && throttledLogMe(event);
      }}
    >
      <div
        ref={divRef}
        onMouseDown={handleDragEnd}
        style={{
          cursor: "pointer",
          border: "1px solid black",
          userSelect: "none",
          ...applyStyle,
        }}
      >
        Drag me
      </div>
    </div>
  );
};

export default PureDraggable;
