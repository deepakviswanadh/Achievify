import React from "react";
import PureCalenderHeaderMonth from "./PureCalenderHeaderMonth";
import PureCalenderHeaderYear from "./PureCalenderHeaderYear";

const PureCalenderHeader = ({ currentDate }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PureCalenderHeaderMonth currentDate={currentDate} />
      <PureCalenderHeaderYear currentDate={currentDate} />
    </div>
  );
};

export default PureCalenderHeader;
