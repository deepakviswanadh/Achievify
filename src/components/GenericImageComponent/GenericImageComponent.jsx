import React from "react";

const GenericImageComponent = ({
  triggerExpanded,
  currentExpanded,
  each,
  index,
}) => {
  return currentExpanded != each ? "GenericImageComponent" : "";
};

export default GenericImageComponent;
