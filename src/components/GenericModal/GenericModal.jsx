import React from "react";
import { Paper, Modal, Box } from "@mui/material";
import genericModalStyles from "./GenericModalStyles";

const GenericModal = ({ isOpen, onClose, children }) => {
  return (
    <div>
      <Paper>
        <Modal open={isOpen} onClose={onClose}>
          <Box sx={genericModalStyles.rootContainer}>{children}</Box>
        </Modal>
      </Paper>
    </div>
  );
};

export default GenericModal;
