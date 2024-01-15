import React from "react";

const PureBackDrop = ({ context, handleClose }) => {
  return (
    <span
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 7rem)",
        width: "99vw",
        backgroundColor: "lightgreen",
        opacity: "0.9",
        zIndex: 100,
        top: "80px",
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
    </span>
  );
};

export default PureBackDrop;
