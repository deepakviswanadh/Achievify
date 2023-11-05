import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, TextField } from "@mui/material";
import addNewListMenuStyles from "./AddNewListMenuStyles";
import GenericButton from "components/GenericButton";
import { BUTTON_TXTS, TXTS, HELPER_TXTS } from "constants/constants";
import {
  ADD_NEW_CATEGORY_BUTTON,
  ADD_NEW_CATEGORY,
} from "constants/actionTypes";

const AddNewListMenu = () => {
  const dispatch = useDispatch();
  const [errTrigger, setErrTrigger] = useState(false);
  const inputRef = useRef();

  const onClosePopUp = () => {
    dispatch({ type: ADD_NEW_CATEGORY_BUTTON });
  };

  const onSubmit = () => {
    const textFieldValue = inputRef.current?.value;
    if (!textFieldValue) {
      setErrTrigger(true);
      return;
    } else {
      dispatch({
        type: ADD_NEW_CATEGORY,
        payload: {
          catergoryName: textFieldValue.toUpperCase(),
        },
      });
      onClosePopUp();
    }
  };

  return (
    <Box sx={addNewListMenuStyles.root}>
      <Typography>{TXTS.ADD_NEW_CATEGORY}</Typography>
      {errTrigger ? (
        <TextField
          error={errTrigger}
          label="Error"
          helperText={HELPER_TXTS.ENTER_A_VALID_CATEGORY_NAME}
          variant="filled"
          inputRef={inputRef}
        />
      ) : (
        <TextField inputRef={inputRef} />
      )}
      <Box sx={addNewListMenuStyles.buttonGroup}>
        <GenericButton
          txtToDisplay={BUTTON_TXTS.SUBMIT}
          disabled={false}
          onClick={(event) => {
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
