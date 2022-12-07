import React, { useContext } from "react";
import TeamContext from "../../store/team-context";

import classes from "./TeamItem.module.css";

const TeamItem = (props) => {
  const ctx = useContext(TeamContext);

  const removeToTeamHandler = () => {
    ctx.removeItem(props.pokeName);
  };

  return (
    <div className={classes.teamItem}>
      <div className={classes.pokeName}>{props.pokeName}</div>
      <button className={classes.buttonRemove} onClick={removeToTeamHandler}>
        -
      </button>
    </div>
  );
};

export default TeamItem;
