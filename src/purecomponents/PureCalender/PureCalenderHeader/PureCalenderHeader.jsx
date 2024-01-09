import React from "react";
import PureCalenderHeaderMonth from "./PureCalenderHeaderMonth";
import PureCalenderHeaderYear from "./PureCalenderHeaderYear";

const PureCalenderHeader = () => {
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
      <PureCalenderHeaderMonth />
      <PureCalenderHeaderYear />
    </div>
  );
};

export default PureCalenderHeader;
