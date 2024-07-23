import React, { useState, useRef } from "react";
import PureResizeHandler from "./PureResizeHandler";

const PureDraggable = ({
  toggleResize = true,
  toggleDrag = true,
  handlerCount = 4,
}) => {
  const [startDrag, setDragStart] = useState(false);
  const [startResize, setStartResize] = useState(false);
  const [applyStyle, setApplyStyle] = useState({});
  const [direction, setDirection] = useState(null);
  const draggableRef = useRef(null);
  const parentRef = useRef(null);
  const lRef = useRef(null);
  const rRef = useRef(null);
  const tRef = useRef(null);
  const bRef = useRef(null);
  const refs = {
    lRef,
    rRef,
    tRef,
    bRef,
  };

  const handleDragShift = (event) => {
    const { height, width } = draggableRef?.current.getBoundingClientRect();
    setApplyStyle({
      ...applyStyle,
      position: "absolute",
      top: event.clientY - height / 2,
      left: event.clientX - width / 2,
    });
  };

  const calculateResize = {
    rRef: (mouseX, mouseY, left, top, height, width) => ({
      newWidth: mouseX - left,
      newLeft: left,
    }),
    lRef: (mouseX, mouseY, left, top, height, width) => ({
      newWidth: width + (left - mouseX),
      newLeft: mouseX,
    }),
    bRef: (mouseX, mouseY, left, top, height, width) => ({
      newHeight: mouseY - top,
      newTop: top,
    }),
    tRef: (mouseX, mouseY, left, top, height, width) => ({
      newHeight: height + (top - mouseY),
      newTop: mouseY,
    }),
  };

  const handleResize = (event) => {
    const { top, left, width, height } =
      draggableRef?.current.getBoundingClientRect();
    const mousePositionX = event.clientX;
    const mousePositionY = event.clientY;

    const { newWidth, newHeight, newLeft, newTop } = calculateResize[direction](
      mousePositionX,
      mousePositionY,
      left,
      top,
      height,
      width
    );

    setApplyStyle({
      ...applyStyle,
      width: Math.max(newWidth, 0),
      height: Math.max(newHeight, 0),
      left: newLeft !== undefined ? newLeft : applyStyle.left,
      top: newTop !== undefined ? newTop : applyStyle.top,
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

        const curRef = Object.keys(refs).find(
          (eachRef) => refs[eachRef].current == event.target
        );
        if (!!curRef && toggleResize && !startDrag) {
          setDirection(curRef);
          initiateResize(event);
        }
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
      <div
        ref={draggableRef}
        id="drag-resize-me"
        style={{
          backgroundColor: "lightblue",
          ...applyStyle,
          cursor: !startResize ? "grab" : "col-resize",
          border: "1px solid black",
          userSelect: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PureResizeHandler ref={lRef} color={"red"} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PureResizeHandler ref={tRef} color={"black"} />
          <div
            style={{
              display: "inline-block",
              backgroundColor: "yellow",
              width: applyStyle?.width - 50,
            }}
          >
            Drag and Resize Me
          </div>
          <PureResizeHandler ref={bRef} color={"green"} />
        </div>
        <PureResizeHandler ref={rRef} color={"brown"} />
      </div>
    </div>
  );
};

export default PureDraggable;
