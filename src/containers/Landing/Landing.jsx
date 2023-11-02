import React from "react";
import ToDoContainer from "containers/ToDoContainer";
import Header from "components/Header";
import { Grid } from "@mui/material";
import LandingPageStyles from "./LandingStyles";

const Landing = () => {
  return (
    <Grid container direction="column">
      <Grid item xl={2}>
        <Header />
      </Grid>
      <Grid item xl={10} sx={LandingPageStyles.toDoContainer}>
        <ToDoContainer />
      </Grid>
    </Grid>
  );
};

export default Landing;
