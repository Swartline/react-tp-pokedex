import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url = "https://nestjs-pokedex-api.vercel.app/pokemons";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setPokemons(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className="row p-3">
      {pokemons.map((pokemon) => (
        <div className="col-2 mb-3">
          <Link to={'/pokemon/' + pokemon.id} params={pokemon}>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <p className="mb-0">{pokemon.name}</p>
                <p className="mb-0">#{pokemon.pokedexId}</p>
              </div>
              <div className="card-body d-flex">
                <img
                  style={{ width: "100px" }}
                  src={pokemon.image}
                  alt={pokemon.name}
                />
                <div className="d-flex flex-column justify-content-center">
                  {pokemon.types.map((type) => (
                    <div className="d-flex ">
                      <img
                        style={{ width: "30px", height: "30px" }}
                        src={type.image}
                        alt={type.name}
                      />
                      <p className="mb-0">{type.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Pokedex;
