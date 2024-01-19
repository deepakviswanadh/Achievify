import React from "react";

const GenericImageComponent = ({
  triggerExpanded,
  currentExpanded,
  each,
  index,
}) => {
  return currentExpanded != each ? (
    <div style={{ cursor: "pointer" }}>GenericImageComponent</div>
  ) : (
    <></>
  );
};

export default GenericImageComponent;
