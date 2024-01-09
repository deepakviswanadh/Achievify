import React from "react";
import PureOptionsBox from "purecomponents/PureOptionsBox";
import PureCalenderHeader from "./PureCalenderHeader";
import PureCalenderBody from "./PureCalenderBody";

const PureCalender = ({ isVisible, elementPos, setIsVisible }) => {
  const constructCalender = () => {
    return (
      <div
        style={{
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateRows: "6vh 27vh",
        }}
      >
        <PureCalenderHeader />
        <PureCalenderBody />
      </div>
    );
  };
  return (
    <div>
      <PureOptionsBox
        isVisible={isVisible}
        elementPos={elementPos}
        setIsVisible={setIsVisible}
        childComponent={constructCalender()}
      />
    </div>
  );
};

export default PureCalender;
