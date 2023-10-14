import React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import MainLogo from "assets/MainLogo.svg";
import { HeaderStyles } from "./HeaderStyles";

const Header = () => {
  const classes = HeaderStyles();
  return (
    <AppBar position="fixed" className={classes.alignHeader}>
      <Typography>Header</Typography>
      <img src={MainLogo} alt="Main logo" height="30px" width="40px" />
    </AppBar>
  );
};

export default Header;
