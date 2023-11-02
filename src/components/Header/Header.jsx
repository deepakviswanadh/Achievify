import React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Grid } from "@mui/material";
import MainLogo from "assets/MainLogo.svg";
import headerTheme from "./HeaderStyles";

const Header = () => {
  return (
    <AppBar position="fixed" sx={headerTheme.headerMain}>
      <Grid container direction="row">
        <Grid item xs={1}>
          <img src={MainLogo} alt="Main logo" height="30px" width="40px" />
        </Grid>
        <Grid item xs={11} sx={headerTheme.centerText}>
          <Typography>Header</Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
