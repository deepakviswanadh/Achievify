import React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import MainLogo from "assets/MainLogo.svg";
import headerTheme from "./HeaderStyles";
import GenericButton from "components/GenericButton";
import { BUTTON_TXTS, MODAL_TYPES } from "constants/constants";
import {
  ADD_NEW_CATEGORY_BUTTON,
  ADD_MODAL_CATEGORY,
} from "constants/actionTypes";

const Header = () => {
  const dispatch = useDispatch();

  const addNewCatHandler = () => {
    dispatch({ type: ADD_NEW_CATEGORY_BUTTON });
    dispatch({
      type: ADD_MODAL_CATEGORY,
      payload: {
        modalType: MODAL_TYPES.ADD_NEW_CATEGORY_MENU,
      },
    });
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
          <span style={{ marginRight: "-4vw" }}>
            <GenericButton
              txtToDisplay={BUTTON_TXTS.ADD_NEW_CATEGORY}
              disabled={false}
              onClick={() => {
                addNewCatHandler();
              }}
            />
          </span>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
