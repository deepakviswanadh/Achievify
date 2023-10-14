import React from "react";
import ListContainer from "components/ListContainer";
import { TO_DO_HEADERS } from "constants/constants";

const ToDoContainer = () => {
  const renderEachContainer = () => {
    return TO_DO_HEADERS.map((eachHeader) => {
      return <ListContainer eachHeader={eachHeader} key={eachHeader.name} />;
    });
  };

  return <div>{renderEachContainer()}</div>;
};

export default ToDoContainer;
