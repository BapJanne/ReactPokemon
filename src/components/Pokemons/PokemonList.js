import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import classes from "./PokemonList.module.css";

const PokemonList = () => {
  const [pokeList, setPokeList] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );

      const resultSorted = result.data.results.map((res) =>
        firstLetterCapital(res.name)
      );

      const addIdPokemon = resultSorted.map((item, index) => {
        return { item, id: index + 1 };
      });

      setPokeList(addIdPokemon);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setUserInput(userInput);
    }, 400);
    return () => {
      clearTimeout(timeout);
    };
  }, [userInput]);

  const firstLetterCapital = (pokeName) => {
    return pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  };

  const userInputHandler = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const displayData = () => {
    if (pokeList) {
      if (userInput.length > 0) {
        const pokeListFilter = pokeList.filter((word) => {
          return word.item.toLowerCase().includes(userInput);
        });

        if (pokeListFilter.length > 0) {
          const pokemonListSorted = pokeListFilter.map((pokemon) => {
            return (
              <PokemonCard
                pokemonName={pokemon.item}
                key={pokemon.id}
                id={pokemon.id}
              />
            );
          });
          return pokemonListSorted;
        } else {
          return <p>There is no Pokemon of this name.</p>;
        }
      } else {
        const pokemonList = pokeList.map((pokemon) => {
          return (
            <PokemonCard
              pokemonName={pokemon.item}
              key={pokemon.id}
              id={pokemon.id}
            />
          );
        });
        return pokemonList;
      }
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <main className={classes.pokeCard}>
      <input
        className={classes.pokeInput}
        type="text"
        onChange={userInputHandler}
      />
      <ul className={classes.pokemonList}>{displayData()}</ul>
    </main>
  );
};

export default PokemonList;
