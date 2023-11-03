import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import ToDoContainer from "containers/ToDoContainer";
import Header from "components/Header";
import LandingPageStyles from "./LandingStyles";
import GenericModal from "components/GenericModal";
import { ADD_NEW_CATEGORY_BUTTON } from "constants/actionTypes";
import AddNewListMenu from "components/AddNewListMenu";
import { MODAL_TYPES } from "constants/constants";

const Landing = () => {
  const dispatch = useDispatch();

  const modalType = useSelector((state) => {
    return state.appLevelReducer.modalType;
  });

  const openModalStatus = useSelector((state) => {
    return state.headerReducer.addNewCatModelOpenStatus;
  });

  const categoriesList = useSelector((state) => {
    return state.toDoListReducer.categories;
  });

  const modalComponents = {
    [MODAL_TYPES.ADD_NEW_CATEGORY_MENU]: <AddNewListMenu />,
  };

  const closeModal = () => {
    dispatch({ type: ADD_NEW_CATEGORY_BUTTON });
  };
  return (
    <>
      <Grid container direction="column">
        <Grid item xl={2}>
          <Header />
        </Grid>
        <Grid item xl={10} sx={LandingPageStyles.toDoContainer}>
          <ToDoContainer categoriesList={categoriesList} />
        </Grid>
      </Grid>
      <GenericModal
        isOpen={openModalStatus}
        onClose={() => {
          closeModal();
        }}
        children={modalComponents[modalType]}
      />
    </>
  );
};

export default Landing;
