import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import GenericButton from "components/GenericButton";

const GenericPopUp = ({
  isOpen,
  handleDialogClose,
  twoOptions,
  btn1OnClose,
  btn2OnClose,
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {twoOptions ? (
            <>
              <GenericButton
                onClick={() => {
                  btn1OnClose();
                }}
                disabled={false}
                txtToDisplay="Ok"
              />
              <GenericButton
                onClick={() => {
                  btn2OnClose();
                }}
                disabled={false}
              />
            </>
          ) : (
            <>
              <GenericButton
                onClick={() => {
                  btn1OnClose();
                }}
                disabled={false}
                txtToDisplay="Ok"
              />
            </>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GenericPopUp;
