import React from "react";

const PureAccordionTitle = ({ titleTxt, hideBody }) => {
  const rotateEffect = {
    transform: hideBody ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.4s ease",
    display: "inline-block",
  };

  return (
    <div>
      {titleTxt}
      <span style={rotateEffect}>{"^"}</span>
    </div>
  );
};

export default PureAccordionTitle;
