import React from "react";

import classes from "./PokemonButton.module.css";

const PokemonButton = (props) => {
  return (
    <button
      className={`${
        props.type === "add" ? classes.buttonAdd : classes.buttonRemove
      } ${classes.button}`}
      onClick={() => {
        props.onClick();
        props.type === "add" && props.onFullTeam();
      }}
    >
      {props.children}
    </button>
  );
};

export default PokemonButton;
