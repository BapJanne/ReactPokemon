import React, { useState } from "react";

import TeamContext from "./team-context";

const TeamProvider = (props) => {
  const [teamListCtx, setTeamListCtx] = useState([]);
  const [errorModal, setErrorModal] = useState(false);

  const addItemTeamHandler = (pokemonName) => {
    if (
      teamListCtx.length > 5 ||
      teamListCtx.length < 0 ||
      teamListCtx.includes(pokemonName)
    ) {
      return;
    } else {
      setTeamListCtx((previousState) => {
        return [...previousState, pokemonName];
      });
    }
  };

  const removeItemTeamHandler = (pokemonName) => {
    setTeamListCtx((previousState) => {
      return previousState.filter((pokemon) => {
        return pokemon !== pokemonName;
      });
    });
  };

  const showModalHandler = () => {
    if (teamListCtx.length > 5) {
      setErrorModal(true);
    }
  };

  const hideModalHandler = () => {
    setErrorModal(false);
  };

  const teamContext = {
    items: teamListCtx,
    error: errorModal,
    addItem: addItemTeamHandler,
    removeItem: removeItemTeamHandler,
    showModal: showModalHandler,
    hideModal: hideModalHandler,
  };

  return (
    <TeamContext.Provider value={teamContext}>
      {props.children}
    </TeamContext.Provider>
  );
};

export default TeamProvider;
