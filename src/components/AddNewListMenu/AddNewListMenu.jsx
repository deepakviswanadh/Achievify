import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, TextField } from "@mui/material";
import addNewListMenuStyles from "./AddNewListMenuStyles";
import GenericButton from "components/GenericButton";
import { BUTTON_TXTS, TXTS } from "constants/constants";
import {
  ADD_NEW_CATEGORY_BUTTON,
  ADD_NEW_CATEGORY,
} from "constants/actionTypes";

const AddNewListMenu = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const onClosePopUp = () => {
    dispatch({ type: ADD_NEW_CATEGORY_BUTTON });
  };

  const onSubmit = () => {
    const textFieldValue = inputRef.current?.value;
    if (!textFieldValue) {
      alert("Empty values not allowed");
      return;
    } else {
      dispatch({
        type: ADD_NEW_CATEGORY,
        payload: {
          catergoryName: textFieldValue,
        },
      });
      onClosePopUp();
    }
  };

  return (
    <Box sx={addNewListMenuStyles.root}>
      <Typography>{TXTS.ADD_NEW_CATEGORY}</Typography>
      <TextField inputRef={inputRef} />
      <Box sx={addNewListMenuStyles.buttonGroup}>
        <GenericButton
          txtToDisplay={BUTTON_TXTS.SUBMIT}
          disabled={false}
          onClick={(event) => {
            // event.preventDefault();
            // event.stopPropagation();
            onSubmit();
          }}
        />
        <GenericButton
          txtToDisplay={BUTTON_TXTS.CANCEL}
          disabled={false}
          onClick={() => {
            onClosePopUp();
          }}
        />
      </Box>
    </Box>
  );
};

export default AddNewListMenu;
