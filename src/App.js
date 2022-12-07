import React, { useContext, useState } from "react";

import Header from "../src/components/Header/Header.js";
import PokemonList from "./components/Pokemons/PokemonList.js";
import Team from "./components/Team/Team.js";

import "./index.css";
import TeamContext from "./store/team-context.js";
import ErrorModal from "./components/Pokemons/ErrorModal.js";

function App() {
  const [teamIsShown, setTeamIsShown] = useState(false);

  const ctx = useContext(TeamContext);

  const showTeamHandler = () => {
    setTeamIsShown(true);
  };

  const hideTeamHandler = () => {
    setTeamIsShown(false);
  };

  const hideErrorHandler = () => {
    ctx.hideModal();
  };

  return (
    <React.Fragment>
      {ctx.error && (
        <ErrorModal
          onHideError={hideErrorHandler}
          onShowTeam={showTeamHandler}
        />
      )}
      {teamIsShown && <Team onHideTeam={hideTeamHandler} />}
      <Header onShowTeam={showTeamHandler} />
      <PokemonList />
    </React.Fragment>
  );
}

export default App;
