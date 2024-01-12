import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MONTHS_ARRAY } from "constants/constants";
import { dispatchYearChange } from "store/actionCreators/calenderActionCreators";

const InnerGridComponent = ({ stylesForModal, needArrows, renderText }) => {
  const [updateLooper, setUpdateLooper] = useState([]);
  const dispatch = useDispatch();
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
  }, [renderText]);

  useEffect(() => {
    setUpdateLooper([
      ...(needArrows ? calculateYears(currentYear) : MONTHS_ARRAY),
    ]);
  }, [currentYear]);

  const handleYearClick = (event, year) => {
    dispatch(dispatchYearChange(year));
  };
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
              onClick={(event) => {
                handleYearClick(event, each);
              }}
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
