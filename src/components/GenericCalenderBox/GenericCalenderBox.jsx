import React, { forwardRef } from "react";
import PureOptionsBox from "purecomponents/PureOptionsBox";
import InnerGridComponent from "./InnerGridComponent";

const GenericCalenderBox = forwardRef((props, ref) => {
  const {
    toggleBox: { open, clickEvent },
    elementPos,
    controlOpenClose,
    needArrows,
    renderText,
  } = props;
  const stylesForModal = {
    height: "12rem",
    width: "17rem",
  };

  const stylesForCrossGrid = {
    height: needArrows ? "10rem" : "12rem",
    width: "17rem",
  };
  return (
    <div>
      <PureOptionsBox
        isVisible={open}
        elementPos={elementPos}
        setIsVisible={controlOpenClose}
        childComponent={
          <>
            <InnerGridComponent
              stylesForModal={stylesForCrossGrid}
              needArrows={needArrows}
              renderText={renderText}
            />
          </>
        }
        stylesForModal={stylesForModal}
      />
    </div>
  );
});

export default GenericCalenderBox;
