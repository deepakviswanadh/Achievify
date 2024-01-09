import React, { useRef } from "react";
import CommonMonthYearComponent from "../CommonMonthYearComponent";

const PureCalenderHeaderMonth = ({ currentDate }) => {
  const yearRef = useRef();
  const extractYear = currentDate[2];
  return (
    <>
      <CommonMonthYearComponent
        type={"year"}
        ref={yearRef}
        displayValue={extractYear}
      />
    </>
  );
};

export default PureCalenderHeaderMonth;
