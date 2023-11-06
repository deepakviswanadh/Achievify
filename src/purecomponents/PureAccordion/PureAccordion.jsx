import React, { useState, useRef } from "react";
import PureAccordionBody from "./PureAccordionBody";
import PureAccordionTitle from "./PureAccordionTitle";

const PureAccordion = ({ titleTxt, bodyTxt }) => {
  const [hideBody, setHideBody] = useState(true);
  const bodyRef = useRef(null);

  const toggleBody = () => {
    setHideBody((prev) => !prev);
    if (bodyRef.current) {
      const maxHeight = hideBody ? bodyRef.current.scrollHeight + "px" : "0";
      console.log("maxHeight", maxHeight, hideBody);
      bodyRef.current.style.height = maxHeight;
    }
  };

  const bodyStyle = {
    maxHeight: hideBody ? "0" : "100%",
    transition: "height 0.4s ease",
    textAlign: "justify",
    wordBreak: "break-all",
    width: "inherit",
    overflow: "hidden",
  };

  return (
    <div
      onClick={toggleBody}
      style={{
        width: "90vw",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      <PureAccordionTitle titleTxt={titleTxt} />
      <div style={bodyStyle} ref={bodyRef}>
        <PureAccordionBody bodyTxt={bodyTxt} />
      </div>
    </div>
  );
};

export default PureAccordion;
