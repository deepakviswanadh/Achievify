import React, { useRef } from "react";
import CommonMonthYearComponent from "../CommonMonthYearComponent";

const PureCalenderHeaderMonth = ({ currentDate }) => {
  const extractMonth = currentDate[0];
  const monthRef = useRef();
  return (
    <>
      <CommonMonthYearComponent
        type={"month"}
        ref={monthRef}
        displayValue={extractMonth}
      />
    </>
  );
};

export default PureCalenderHeaderMonth;
