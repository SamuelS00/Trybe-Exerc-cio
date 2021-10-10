import React from "react";
import pokemons from "../data";
import Pokemons from "./Pokemon";

class Pokedex extends React.Component {
    render(){
      return(
        <div className="pokedex">
          {pokemons.map((pokemon) => <Pokemons key={pokemon.id} pokemon={pokemon} /> )}
        </div>
      )
    }
}

export default Pokedex;