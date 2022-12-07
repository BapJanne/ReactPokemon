import React from "react";
import HeaderTeamButton from "./HeaderTeamButton";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>React Pokémon</h1>
      <HeaderTeamButton onClick={props.onShowTeam} />
    </header>
  );
};

export default Header;
