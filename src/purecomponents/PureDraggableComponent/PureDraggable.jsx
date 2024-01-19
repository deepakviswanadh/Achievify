import React, { useState, useRef, useCallback } from "react";

const PureDraggable = () => {
  const [startDrag, setDragStart] = useState(false);
  const [applyStyle, setApplyStyle] = useState({});
  const divRef = useRef(null);

  const handleDragShift = function (event) {
    setDragStart(false);
    const { height, width } = divRef.current.getBoundingClientRect();
    setApplyStyle({
      ...applyStyle,
      position: "absolute",
      top: event.clientY - height / 2,
      left: event.clientX - width / 2,
    });
  };

  const debounce = useCallback(
    (callback, timer) => {
      let delay;
      return function (...args) {
        clearInterval(delay);
        delay = setTimeout(() => {
          setDragStart(false);
          if (startDrag) {
            callback.apply(this, args);
          }
        }, timer);
      };
    },
    [startDrag]
  );

  const debouncedDrag = debounce(handleDragShift, 40);

  const initiateDragStart = (event) => {
    setDragStart(true);
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
      onMouseUp={(event) => {
        startDrag && debouncedDrag(event);
      }}
    >
      <span
        ref={divRef}
        onMouseDown={(event) => {
          initiateDragStart(event);
        }}
        style={{
          ...applyStyle,
        }}
      >
        <span
          ref={divRef}
          onMouseDown={(event) => {
            initiateDragStart(event);
          }}
          style={{
            cursor: "grab",
            border: "1px solid black",
            userSelect: "none",
          }}
        >
          Drag me
        </span>
        <span
          style={{
            cursor: "col-resize",
            display: "inline-flex",
            width: "3px",
            height: "10px",
          }}
        />
      </span>
    </div>
  );
};

export default PureDraggable;
