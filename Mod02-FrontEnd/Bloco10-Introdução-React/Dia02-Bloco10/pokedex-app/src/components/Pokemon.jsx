import React from "react";

class Pokemons extends React.Component {
    render(){
      console.log(this.props.pokemon)
       const { value, measurementUnit} = this.props.pokemon.averageWeight
       return(
         <div className="card-pokemon">
           <p> { `name: ${this.props.pokemon.name}` } </p>
           <p> { `type: ${this.props.pokemon.type}` } </p>
           <p> { `averageWeight: ${value + measurementUnit}` }</p>
           <img src={ this.props.pokemon.image } alt={this.props.pokemon.name}></img>
         </div>
        )
    }
}

export default Pokemons;