import React, { useState, useRef } from "react";

const PureDraggable = ({ toggleResize = true, toggleDrag = true }) => {
  const [startDrag, setDragStart] = useState(false);
  const [startResize, setStartResize] = useState(false);
  const [applyStyle, setApplyStyle] = useState({});
  const draggableRef = useRef(null);
  const parentRef = useRef(null);
  const resizeRef = useRef(null);

  const handleDragShift = function (event) {
    const { height, width } = draggableRef.current.getBoundingClientRect();
    setApplyStyle({
      ...applyStyle,
      position: "absolute",
      top: event.clientY - height / 2,
      left: event.clientX - width / 2,
    });
  };

  const handleResize = function (event) {
    const { left, width } = draggableRef.current.getBoundingClientRect();
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

  const unThrottledAction = startDrag ? handleDragShift : handleResize;

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
      ref={parentRef}
      //event delegation

      //trigger drag/resize mode basing on location of mouse
      onMouseDown={(event) => {
        draggableRef?.current == event.target &&
          !startResize &&
          toggleDrag &&
          initiateDragStart(event);

        resizeRef?.current == event.target &&
          toggleResize &&
          !startDrag &&
          initiateResize(event);
      }}
      //trigger resize/drag animation when mouse is clicked and moved (not released)
      onMouseMove={
        startDrag || startResize
          ? (event) => {
              unThrottledAction(event);
            }
          : null
      }
      //stop resize/drag once the mouse is up(mouse click is released)
      onMouseUp={() => {
        startDrag && setDragStart(false);
        startResize && setStartResize(false);
      }}
    >
      {/* this is the parent holding actual container and its resize handler
    dragging this would allow to drag both the container and the handler */}
      <span
        style={{
          ...applyStyle,
          backgroundColor: "green",
        }}
      >
        <span
          ref={draggableRef}
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
          Drag and Resize Me
        </span>
        <span
          ref={resizeRef}
          style={{
            cursor: "col-resize",
            display: "inline-flex",
            width: "3px",
            height: "10px",
            backgroundColor: "red",
          }}
        />
      </span>
    </div>
  );
};

export default PureDraggable;
