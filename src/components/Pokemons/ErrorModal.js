import React from "react";
import Modal from "../Team/Modal";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Modal onBackdropClick={props.onHideError}>
      <h3 className={classes.errorTitle}>Error</h3>
      <p className={classes.para}>Your team is full !</p>
      <p className={classes.para}>
        You need to remove a Pokemon from your team !
      </p>
      <div className={classes.btnContainer}>
        <button
          className={`${classes.btnTeam} ${classes.button}`}
          onClick={() => {
            props.onHideError();
            props.onShowTeam();
          }}
        >
          My team
        </button>
        <button
          className={`${classes.btnClose} ${classes.button}`}
          onClick={props.onHideError}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ErrorModal;
