import React, { forwardRef } from "react";
import PureOptionsBox from "purecomponents/PureOptionsBox";

const GenericCalenderBox = forwardRef((props, ref) => {
  const {
    toggleBox: { open, clickEvent },
    elementPos,
    controlOpenClose,
  } = props;
  return (
    <div>
      <PureOptionsBox
        isVisible={open}
        elementPos={elementPos}
        setIsVisible={controlOpenClose}
        childComponent={<div>Render Month Grid</div>}
      />
    </div>
  );
});

export default GenericCalenderBox;
