import React, { useState, useEffect } from "react";
import { MONTHS_ARRAY } from "constants/constants";

const InnerGridComponent = ({ stylesForModal, needArrows, renderText }) => {
  const [updateLooper, setUpdateLooper] = useState([]);
  const [currentYear, setCurrentYear] = useState();
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
  useEffect(() => {
    setCurrentYear(+renderText);
    setUpdateLooper(needArrows ? calculateYears(+renderText) : MONTHS_ARRAY);
  }, [renderText]);

  useEffect(() => {
    setUpdateLooper([...calculateYears(currentYear)]);
  }, [currentYear]);
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
          <button
            onClick={() => {
              setCurrentYear(currentYear - 12);
            }}
          >
            &lt;
          </button>
          <button
            onClick={() => {
              setCurrentYear(currentYear + 12);
            }}
          >
            &gt;
          </button>
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
        {[...updateLooper].map((each) => {
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
