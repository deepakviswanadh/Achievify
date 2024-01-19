import React, { useState, useRef, useCallback } from "react";

const PureDraggable = () => {
  const [startDrag, setDragStart] = useState(false);
  const [startResize, setStartResize] = useState(false);
  const [applyStyle, setApplyStyle] = useState({});
  const divRef = useRef(null);

  const handleDragShift = function (event) {
    const { height, width } = divRef.current.getBoundingClientRect();
    setApplyStyle({
      ...applyStyle,
      position: "absolute",
      top: event.clientY - height / 2,
      left: event.clientX - width / 2,
    });
  };

  const handleResize = function (event) {
    const { x, width } = divRef.current.getBoundingClientRect();
    const newWidth = width + event.clientX - x;
    setApplyStyle({
      ...applyStyle,
      width: newWidth,
    });
  };

  const debounce = useCallback(
    (callback, timer) => {
      let delay;
      return function (...args) {
        clearInterval(delay);
        delay = setTimeout(() => {
          startDrag && setDragStart(false);
          startResize && setStartResize(false);
          callback.apply(this, args);
        }, timer);
      };
    },
    [startDrag, startResize]
  );

  const debouncedDrag = debounce(
    startDrag ? handleDragShift : handleResize,
    40
  );

  const initiateDragStart = (event) => {
    setDragStart(true);
  };

  const initiateResize = (event) => {
    setStartResize(true);
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
        (startDrag || startResize) && debouncedDrag(event);
      }}
    >
      <span
        ref={divRef}
        onMouseDown={(event) => {
          initiateDragStart(event);
        }}
        style={{
          ...applyStyle,
          width: applyStyle.width + 10,
        }}
      >
        <span
          ref={divRef}
          onMouseDown={(event) => {
            initiateDragStart(event);
          }}
          id="drag-me"
          style={{
            cursor: "grab",
            border: "1px solid black",
            userSelect: "none",
            display: "inline-block",
            width: applyStyle?.width || "auto",
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
          onMouseDown={(event) => {
            //trigger resize start
            event.stopPropagation();
            initiateResize(event);
          }}
        />
      </span>
    </div>
  );
};

export default PureDraggable;
