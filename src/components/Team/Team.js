import React, { useContext } from "react";
import TeamContext from "../../store/team-context";

import classes from "./Team.module.css";

import Modal from "./Modal";
import TeamItem from "./TeamItem";

const Team = (props) => {
  const ctx = useContext(TeamContext);

  const pokemonTeamList = ctx.items.map((pokemon) => {
    return <TeamItem pokeName={pokemon} key={pokemon} />;
  });

  return (
    <Modal onBackdropClick={props.onHideTeam}>
      <h3 className={classes.title}>Team Pokémon</h3>
      <div>
        {ctx.items && pokemonTeamList}
        {ctx.items.length === 0 && (
          <p className={classes.para}>There is no Pokemon in your team :(</p>
        )}
      </div>

      <button className={classes.close} onClick={props.onHideTeam}>
        Close
      </button>
    </Modal>
  );
};

export default Team;
