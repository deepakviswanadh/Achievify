import React, { useState, forwardRef } from "react";
import GenericCalenderBox from "components/GenericCalenderBox";

const CommonMonthYearComponent = forwardRef((props, ref) => {
  const { type, displayValue } = { ...props };
  const [toggleBox, setToggleBox] = useState({
    open: false,
    anchorRef: null,
    clickEvent: null,
  });
  const triggerOpenMonthBox = (event) => {
    setToggleBox({
      ...toggleBox,
      open: !toggleBox.open,
      anchorRef: ref.current,
      clickEvent: event,
    });
  };
  const controlOpenClose = (state) => {
    setToggleBox({
      open: state,
      ...(state === false && { anchorRef: null, clickEvent: null }),
    });
  };
  return (
    <>
      <div
        ref={ref}
        onClick={(event) => {
          triggerOpenMonthBox(event);
        }}
        id={`calender-${type}`}
      >
        {displayValue}
      </div>
      {toggleBox?.open && (
        <GenericCalenderBox
          ref={toggleBox?.anchorRef}
          toggleBox={toggleBox}
          elementPos={`#calender-${type}`}
          controlOpenClose={controlOpenClose}
          needArrows={type == "year"}
        />
      )}
    </>
  );
});

export default CommonMonthYearComponent;
