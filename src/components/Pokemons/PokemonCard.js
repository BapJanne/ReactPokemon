import React, { useContext } from "react";
import TeamContext from "../../store/team-context";
import PokemonButton from "./PokemonButton";
import classes from "./PokemonCard.module.css";

const PokemonCard = (props) => {
  const ctx = useContext(TeamContext);

  const addToTeamHandler = () => {
    ctx.addItem(props.pokemonName);
  };
  const removeToTeamHandler = () => {
    ctx.removeItem(props.pokemonName);
  };

  const showErrorModalHandler = () => {
    ctx.showModal();
  };

  return (
    <li className={classes.item}>
      <div>
        <h3>{props.pokemonName}</h3>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
          alt="Pokemon front"
        />
      </div>

      {ctx.items.includes(props.pokemonName) && (
        <PokemonButton onClick={removeToTeamHandler} type="remove">
          -
        </PokemonButton>
      )}
      {!ctx.items.includes(props.pokemonName) && (
        <PokemonButton
          onClick={addToTeamHandler}
          onFullTeam={showErrorModalHandler}
          type="add"
        >
          ✓
        </PokemonButton>
      )}
    </li>
  );
};

export default PokemonCard;
