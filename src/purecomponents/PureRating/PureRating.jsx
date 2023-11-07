import React, { useLayoutEffect, useState } from "react";

const PureRating = ({ count }) => {
  const [starData, setStarData] = useState([]);
  const [rated, setRated] = useState({});

  useLayoutEffect(() => {
    let result = [];
    for (let i = 0; i < count; i++) {
      result.push({ id: i, rated: false });
    }
    setStarData([...result]);
  }, [count]);

  const handleMouseMove = (e, starId) => {
    const starElement = e.currentTarget;
    const starCenterX =
      starElement.getBoundingClientRect().left +
      starElement.getBoundingClientRect().width / 2;
    const isLeftToRight = e.clientX >= starCenterX;
    setRated({ ...rated, [starId]: isLeftToRight });
  };

  const generateAStar = (each) => {
    return (
      <span
        key={each.id}
        onMouseMove={(e) => handleMouseMove(e, each.id)}
        style={{
          color: rated[each.id] ? "green" : "red",
          fontSize: "2rem",
          cursor: "pointer",
        }}
      >
        &#9733;
      </span>
    );
  };

  return (
    <div>
      {starData.map((each) => {
        return generateAStar(each);
      })}
      <div>{`${
        Object.values(rated).filter((each) => !!each).length
      } star(s) selected`}</div>
    </div>
  );
};

export default PureRating;
