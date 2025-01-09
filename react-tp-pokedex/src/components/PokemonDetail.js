import { Link, useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url = "https://nestjs-pokedex-api.vercel.app/pokemons/" + id;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setPokemon(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="p-3">
      <Link to="/">
        <button className="bg-danger rounded text-white">Retour - {id}</button>
      </Link>
      <div className="row">
        <div className="col-4">
          <p className="mb-0 text-center">{pokemon.name}</p>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className="col-8"></div>
        <p className="text-center">Statistiques</p>
        {/* {pokemon.stats.map((stat, key) => (
          <div className="d-flex justify-content-between">
            <p className="mb-0">{key}</p>
            <p className="mb-0">{stat}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default PokemonDetails;
