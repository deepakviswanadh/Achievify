import React from "react";
import eachListContainerInternal from "./ListContainerStyles";
import { Box, Typography } from "@mui/material";

const LandingContainer = ({ eachHeader }) => {
  return (
    <Box sx={eachListContainerInternal.mainBody}>
      <Typography>{eachHeader.name}</Typography>
    </Box>
  );
};

export default LandingContainer;
