import React from "react";
import ToDoContainer from "containers/ToDoContainer";
import Header from "components/Header";
import { Grid } from "@mui/material";
import LandingPageStyles from "./LandingStyles";
import GenericModal from "components/GenericModal";
import { useDispatch, useSelector } from "react-redux";
import { ADD_NEW_CATEGORY_BUTTON } from "constants/actionTypes";

const Landing = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: ADD_NEW_CATEGORY_BUTTON });
  };

  const openModalStatus = useSelector((state) => {
    return state.headerReducer.addNewCatModelOpenStatus;
  });
  return (
    <>
      <Grid container direction="column">
        <Grid item xl={2}>
          <Header />
        </Grid>
        <Grid item xl={10} sx={LandingPageStyles.toDoContainer}>
          <ToDoContainer />
        </Grid>
      </Grid>
      <GenericModal
        isOpen={openModalStatus}
        onClose={() => {
          closeModal();
        }}
        childern={<span>Hi</span>}
      />
    </>
  );
};

export default Landing;
