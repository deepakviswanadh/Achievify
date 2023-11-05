import React from "react";
import ListItem from "./ListItem";
import { Box } from "@mui/material";

const ListBody = ({ list }) => {
  return (
    <Box>
      {list.map((eachItem) => {
        return <ListItem eachItem={eachItem} key={eachItem.idx} />;
      })}
    </Box>
  );
};

export default ListBody;
