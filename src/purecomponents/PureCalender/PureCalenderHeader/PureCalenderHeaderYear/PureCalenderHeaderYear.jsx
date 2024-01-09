import React, { useState, useRef } from "react";
import GenericCalenderBox from "components/GenericCalenderBox";

const PureCalenderHeaderYear = () => {
  const [toggleBox, setToggleBox] = useState({
    open: false,
    anchorRef: null,
    clickEvent: null,
  });
  const triggerOpenMonthBox = (event) => {
    setToggleBox({
      ...toggleBox,
      open: !toggleBox.open,
      anchorRef: yearRefName.current,
      clickEvent: event,
    });
  };
  const controlOpenClose = (state) => {
    setToggleBox({
      open: state,
      ...(state === false && { anchorRef: null, clickEvent: null }),
    });
  };
  const yearRefName = useRef();
  return (
    <>
      <div
        ref={yearRefName}
        onClick={(event) => {
          triggerOpenMonthBox(event);
        }}
        id="calender-year"
      >
        PureCalenderHeaderYear
      </div>
      {toggleBox?.open && (
        <GenericCalenderBox
          ref={toggleBox?.anchorRef}
          toggleBox={toggleBox}
          elementPos={"#calender-year"}
          controlOpenClose={controlOpenClose}
          needArrows={true}
        />
      )}
    </>
  );
};

export default PureCalenderHeaderYear;
