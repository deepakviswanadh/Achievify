import React, { useState } from "react";
import GenericImageComponent from "components/GenericImageComponent";

const PureImageGallery = () => {
  const [trackExpanded, setTrackExpanded] = useState();
  const galleryObj = new Array(9)
    .fill(0)
    .map((each, index) => each + index + 1);

  const handleOpenExpandedImg = (event, each, index) => {
    setTrackExpanded(index);
  };

  const handleExpandedClose = () => {
    setTrackExpanded(-1);
  };

  return (
    <div
      style={{
        display: "grid",
        gridAutoRows: "minmax(11rem, auto)",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      {[...galleryObj].map((each, index) => {
        return (
          <div
            key={index}
            style={{
              border: "1px solid black",
              cursor: "pointer",
              ...(trackExpanded && {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }),
            }}
            onDoubleClick={(event) => {
              handleOpenExpandedImg(event, each, index);
            }}
          >
            <GenericImageComponent
              triggerExpanded={handleExpandedClose}
              currentExpanded={trackExpanded}
              each={each}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PureImageGallery;
