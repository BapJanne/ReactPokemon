import React from "react";

const TeamContext = React.createContext({
  items: [],
  error: false,
  addItem: (pokemonName) => {},
  removeItem: (pokemonName) => {},
  showModal: () => {},
  hideModal: () => {},
});

export default TeamContext;
