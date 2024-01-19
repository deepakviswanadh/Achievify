import React, { useState } from "react";
import GenericImageComponent from "components/GenericImageComponent";
import PureBackDrop from "purecomponents/PureBackDrop";

const PureImageGallery = () => {
  const [trackExpanded, setTrackExpanded] = useState(-1);
  const galleryObj = new Array(12)
    .fill(0)
    .map((each, index) => each + index + 1);

  const handleOpenExpandedImg = (event, each, index) => {
    setTrackExpanded(each);
  };

  const handleExpandedClose = () => {
    setTrackExpanded(-1);
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridAutoRows: "minmax(11rem, auto)",
          gridTemplateColumns: "1fr 1fr 1fr",
          overflowY: "auto",
          height: "70vh",
        }}
      >
        {[...galleryObj].map((each, index) => {
          return (
            <div
              key={index}
              style={{
                border: "1px solid black",
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
      <>
        {trackExpanded != -1 && (
          <div>
            <PureBackDrop
              context={trackExpanded}
              handleClose={handleExpandedClose}
            />
          </div>
        )}
      </>
    </>
  );
};

export default PureImageGallery;
