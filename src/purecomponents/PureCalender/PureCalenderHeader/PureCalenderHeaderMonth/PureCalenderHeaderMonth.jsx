import React, { useState, useRef } from "react";
import GenericCalenderBox from "components/GenericCalenderBox";

const PureCalenderHeaderMonth = () => {
  const [toggleBox, setToggleBox] = useState({
    open: false,
    anchorRef: null,
    clickEvent: null,
  });
  const triggerOpenMonthBox = (event) => {
    setToggleBox({
      ...toggleBox,
      open: !toggleBox.open,
      anchorRef: monthNameRef.current,
      clickEvent: event,
    });
  };
  const controlOpenClose = (state) => {
    setToggleBox({
      open: state,
      ...(state === false && { anchorRef: null, clickEvent: null }),
    });
  };
  const monthNameRef = useRef();
  return (
    <>
      <div
        ref={monthNameRef}
        onClick={(event) => {
          triggerOpenMonthBox(event);
        }}
        id="calender-month"
      >
        PureCalenderHeaderMonth
      </div>
      {toggleBox?.open && (
        <GenericCalenderBox
          ref={toggleBox?.anchorRef}
          toggleBox={toggleBox}
          elementPos={"#calender-month"}
          controlOpenClose={controlOpenClose}
        />
      )}
    </>
  );
};

export default PureCalenderHeaderMonth;
