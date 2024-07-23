import React, { forwardRef } from "react";

const PureResizeHandler = forwardRef((props, ref) => {
  return (
    <span
      ref={ref}
      style={{
        cursor: "col-resize",
        display: "inline-flex",
        width: "10px",
        height: "10px",
        backgroundColor: props.color,
      }}
    />
  );
});

export default PureResizeHandler;
