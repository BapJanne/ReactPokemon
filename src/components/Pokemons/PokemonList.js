import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import classes from "./PokemonList.module.css";

const PokemonList = () => {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );

      const resultSorted = result.data.results.map((res) =>
        firstLetterCapital(res.name)
      );

      setPokeList(resultSorted);
    };
    fetchData();
  }, []);

  const firstLetterCapital = (pokeName) => {
    return pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  };

  const pokemonList = pokeList.map((pokemon) => {
    return <PokemonCard pokemonName={pokemon} key={pokemon} />;
  });

  return <ul className={classes.pokemonList}>{pokemonList}</ul>;
};

export default PokemonList;
