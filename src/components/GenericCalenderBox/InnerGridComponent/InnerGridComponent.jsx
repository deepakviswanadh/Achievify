import React from "react";
import { MONTHS_ARRAY } from "constants/constants";

const InnerGridComponent = ({ stylesForModal, needArrows, renderText }) => {
  const calculateYears = (year) => {
    function getNumbersInRange(min, max) {
      const numbers = [];
      for (let year = min; year <= max; year++) {
        numbers.push(year);
      }
      return numbers;
    }
    return [...getNumbersInRange(year - 6, year + 5)];
  };
  const LOOPER = needArrows ? calculateYears(+renderText) : MONTHS_ARRAY;
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
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr",
          gridTemplateColumns: "1.3fr 1.3fr 1.3fr 1.3fr",
        }}
      >
        {[...LOOPER].map((each) => {
          return (
            <span
              key={each}
              style={{
                border: "1px solid black",
                backgroundColor: renderText == each ? "green" : "lightBlue",
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
