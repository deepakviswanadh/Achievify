import React from "react";
import { Grid } from "@mui/material";
import ListContainer from "components/ListContainer";
import { TO_DO_HEADERS } from "constants/constants";
import toDoContainerStyles from "./ToDoContainerStyles";

const ToDoContainer = () => {
  return (
    <Grid
      container
      direction="row"
      spacing="2"
      alignItems="center"
      sx={toDoContainerStyles.mainContainer}
    >
      {TO_DO_HEADERS.map((eachHeader) => {
        return (
          <Grid
            item
            key={eachHeader.name}
            sx={toDoContainerStyles.eachListContainer}
          >
            <ListContainer eachHeader={eachHeader} key={eachHeader.name} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ToDoContainer;
