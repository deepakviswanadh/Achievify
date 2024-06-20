import React, { useState, useRef, useCallback } from "react";

const PureDraggable = ({ toggleResize = true, toggleDrag = true }) => {
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
    const { left, width } = divRef.current.getBoundingClientRect();
    const mousePosition = event.clientX;
    let newWidth = width;
    //increasing case
    if (mousePosition > left) {
      newWidth = mousePosition - left;
      //decreasing case
    } else if (mousePosition < left) {
      newWidth = width - (left - mousePosition);
    }
    setApplyStyle({
      ...applyStyle,
      width: Math.max(newWidth, 0),
    });
  };

  // const debounce = useCallback(
  //   (callback, timer) => {
  //     let delay;
  //     return function (...args) {
  //       clearInterval(delay);
  //       delay = setTimeout(() => {
  //         console.log("draging");
  //         startDrag && setDragStart(false);
  //         startResize && setStartResize(false);
  //         callback.apply(this, args);
  //       }, timer);
  //     };
  //   },
  //   [startDrag, startResize]
  // );

  const throttle = useCallback(
    (callback, interval) => {
      let isRunning = false;
      return function (...args) {
        if (!isRunning) isRunning = true;
        startDrag && setDragStart(false);
        startResize && setStartResize(false);
        callback.apply(this, args);
        setTimeout(() => {
          isRunning = false;
        }, interval);
      };
    },
    [startDrag, startResize]
  );

  const debouncedDrag = throttle(
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
      //event delegation
      //one mouse up handler on parent for both resize and drag
      //show the effect of either dragging or resizing after the mouse click
      //is released (mouseup)
      onMouseUp={(event) => {
        (startDrag || startResize) && debouncedDrag(event);
      }}
    >
      {/* this is the parent holding actual container and its resize handler
    dragging this would allow to drag both the container and the handler */}
      <span
        ref={divRef}
        //start tracking the dragging as soon as mouse is clicked
        //onmousedown
        onMouseDown={(event) => {
          !startResize && initiateDragStart(event);
        }}
        style={{
          ...applyStyle,
          backgroundColor: "green",
        }}
      >
        <span
          ref={divRef}
          id="drag-me"
          style={{
            cursor: !startResize ? "grab" : "col-resize",
            border: "1px solid black",
            userSelect: "none",
            display: "inline-block",
            backgroundColor: "yellow",
            width: applyStyle?.width - 10 || "auto",
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
            backgroundColor: "red",
          }}
          //start tracking the resizing as soon as mouse is clicked
          //onmousedown
          onMouseDown={(event) => {
            event.stopPropagation();
            toggleResize && !startDrag && initiateResize(event);
          }}
        />
      </span>
    </div>
  );
};

export default PureDraggable;
