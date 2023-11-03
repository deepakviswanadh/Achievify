import React from "react";
import { Button } from "@mui/material";
import genericButtonStyles from "./GenericButtonStyles";

const GenericButton = ({ disabled, txtToDisplay, onClick }) => {
  return (
    <Button
      sx={genericButtonStyles.root}
      onClick={(event) => {
        onClick(event);
      }}
      disabled={disabled}
    >
      {txtToDisplay}
    </Button>
  );
};

export default GenericButton;
