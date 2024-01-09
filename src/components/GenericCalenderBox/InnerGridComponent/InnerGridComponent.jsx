import React from "react";

const InnerGridComponent = ({ stylesForModal, needArrows }) => {
  return (
    <>
      {needArrows && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      )}
      <div
        style={{
          ...stylesForModal,
          backgroundColor: "lightBlue",
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        {[...Array(12).keys()]
          .map((i) => i + 1)
          .map((each) => {
            return (
              <span
                key={each}
                style={{
                  border: "1px solid black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {each}
              </span>
            );
          })}
      </div>
    </>
  );
};

export default InnerGridComponent;
