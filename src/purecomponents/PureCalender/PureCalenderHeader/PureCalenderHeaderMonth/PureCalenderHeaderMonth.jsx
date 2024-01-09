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
  const monthNameRef = useRef();
  return (
    <>
      <div
        ref={monthNameRef}
        onClick={(event) => {
          triggerOpenMonthBox(event);
        }}
      >
        PureCalenderHeaderMonth
      </div>
      {toggleBox?.open && (
        <GenericCalenderBox ref={toggleBox?.anchorRef} toggleBox={toggleBox} />
      )}
    </>
  );
};

export default PureCalenderHeaderMonth;
