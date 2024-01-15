import React from "react";

const PureBackDrop = ({ context, handleClose }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "78px",
        left: "9px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 7rem)",
        width: "99vw",
        backgroundColor: "lightgreen",
        opacity: "0.9",
      }}
    >
      <div id="backdrop-context">{context}</div>
      <div
        style={{ transform: "translate(48vw, -40vh)", cursor: "pointer" }}
        onClick={() => {
          handleClose();
        }}
      >
        X
      </div>
    </div>
  );
};

export default PureBackDrop;
