import React, { forwardRef } from "react";

const GenericCalenderBox = forwardRef((props, ref) => {
  const clientX = props.toggleBox?.clickEvent?.clientX;
  console.log("toggleBox", {
    clientX,
    ref,
  });
  return <div>GenericCalenderBox</div>;
});

export default GenericCalenderBox;
