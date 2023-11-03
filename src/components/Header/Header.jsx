import React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import MainLogo from "assets/MainLogo.svg";
import headerTheme from "./HeaderStyles";
import GenericButton from "components/GenericButton";
import { BUTTON_TXTS } from "constants/constants";
import { ADD_NEW_CATEGORY_BUTTON } from "constants/actionTypes";

const Header = () => {
  const dispatch = useDispatch();

  const addNewCatHandler = () => {
    dispatch({ type: ADD_NEW_CATEGORY_BUTTON });
  };
  return (
    <AppBar position="fixed" sx={headerTheme.headerMain}>
      <Grid container direction="row" sx={headerTheme.gridContainer}>
        <Grid item xs={1}>
          <img src={MainLogo} alt="Main logo" height="50px" width="40px" />
        </Grid>
        <Grid item xs={9} sx={headerTheme.centerText}>
          <Typography>Header</Typography>
        </Grid>
        <Grid item xs={2} sx={headerTheme.centerText}>
          <GenericButton
            txtToDisplay={BUTTON_TXTS.ADD_NEW_CATEGORY}
            disabled={false}
            onClick={() => {
              addNewCatHandler();
            }}
          />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
