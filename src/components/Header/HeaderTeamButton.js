import React from "react";
import HeaderPokeIcon from "./HeaderPokeIcon";

import classes from "./HeaderTeamButton.module.css";

const HeaderTeamButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.title}>My Team</span>
      <span className={classes.icon}>
        <HeaderPokeIcon />
      </span>
    </button>
  );
};

export default HeaderTeamButton;
