import React from "react";
import PureBackDrop from "purecomponents/PureBackDrop";

const GenericImageComponent = ({
  triggerExpanded,
  currentExpanded,
  each,
  index,
}) => {
  if (currentExpanded == index)
    return (
      <div>
        <PureBackDrop context={each} handleClose={triggerExpanded} />
      </div>
    );
  return <div>GenericImageComponent</div>;
};

export default GenericImageComponent;
