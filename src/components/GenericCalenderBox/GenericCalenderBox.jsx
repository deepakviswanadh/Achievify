import React, { forwardRef } from "react";
import PureOptionsBox from "purecomponents/PureOptionsBox";
import InnerGridComponent from "./InnerGridComponent";

const GenericCalenderBox = forwardRef((props, ref) => {
  const {
    toggleBox: { open, clickEvent },
    elementPos,
    controlOpenClose,
  } = props;
  const stylesForModal = {
    height: "10rem",
    width: "15rem",
  };

  return (
    <div>
      <PureOptionsBox
        isVisible={open}
        elementPos={elementPos}
        setIsVisible={controlOpenClose}
        childComponent={
          <>
            <InnerGridComponent stylesForModal={stylesForModal} />
          </>
        }
        stylesForModal={stylesForModal}
      />
    </div>
  );
});

export default GenericCalenderBox;
