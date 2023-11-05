import React from "react";
import { Checkbox, Typography, Box } from "@mui/material";
import listItemStyles from "./ListItemStyles";

const ListItem = ({ eachItem }) => {
  return (
    <Box sx={listItemStyles.root}>
      <Checkbox />
      <Typography> {eachItem?.title}</Typography>
    </Box>
  );
};

export default ListItem;
