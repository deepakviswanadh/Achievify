import React from "react";
import { Grid, Typography } from "@mui/material";
import eachListContainerInternal from "./ListContainerStyles";
import ListBody from "./ListBody";

const LandingContainer = ({ eachHeader }) => {
  return (
    <Grid direction="column" container sx={eachListContainerInternal.mainBody}>
      <Grid
        item
        xs={1}
        sx={{
          ...eachListContainerInternal.eachItemContainer,
        }}
      >
        <Typography sx={eachListContainerInternal.eachCatTitle}>
          {eachHeader.name}
        </Typography>
      </Grid>
      <Grid item xs={11} sx={eachListContainerInternal.eachItemContainer}>
        <ListBody list={eachHeader?.list || []} />
      </Grid>
    </Grid>
  );
};

export default LandingContainer;
