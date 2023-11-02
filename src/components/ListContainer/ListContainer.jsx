import React from "react";
import eachListContainerInternal from "./ListContainerStyles";
import { Box } from "@mui/material";

const LandingContainer = ({ eachHeader }) => {
  return <Box sx={eachListContainerInternal.mainBody}>{eachHeader.name}</Box>;
};

export default LandingContainer;
