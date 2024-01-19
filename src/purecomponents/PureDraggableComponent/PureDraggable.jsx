import React, { useState, useEffect, useRef } from "react";

const PureDraggable = () => {
  const [startDrag, setDragStart] = useState(false);
  const divRef = useRef(null);
  const logMe = function (event) {
    console.log("log me", event?.clientX, event?.clientY);
    setDragStart(false);
  };

  useEffect(() => {
    const elemt = divRef?.current;
    if (elemt && startDrag) {
      elemt.addEventListener(
        "mousemove",
        (event) => {
          throttledLogMe(event);
        },
        { capture: true }
      );
    }
    return () => {
      elemt.removeEventListener(
        "mousemove",
        (event) => {
          throttledLogMe(event);
        },
        { capture: true }
      );
    };
  }, [startDrag]);

  const throttle = function (callback, timer) {
    let delay;
    return function (...args) {
      clearInterval(delay);
      delay = setTimeout(() => {
        callback.apply(this, args);
        setDragStart(false);
      }, timer);
    };
  };

  const throttledLogMe = throttle(logMe, 300);

  const handleDragEnd = (event) => {
    setDragStart(true);
    console.log("call now");
  };

  return (
    <div
      ref={divRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        height: "40vh",
      }}
    >
      <div onMouseDown={handleDragEnd} style={{ cursor: "pointer" }}>
        Drag me
      </div>
    </div>
  );
};

export default PureDraggable;
