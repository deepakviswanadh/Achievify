import React from "react";
import { Grid } from "@mui/material";
import ListContainer from "components/ListContainer";
import toDoContainerStyles from "./ToDoContainerStyles";

const ToDoContainer = ({ categoriesList }) => {
  return (
    <Grid
      container
      direction="row"
      spacing="2"
      alignItems="center"
      sx={toDoContainerStyles.mainContainer}
    >
      {categoriesList.map((eachHeader) => {
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
