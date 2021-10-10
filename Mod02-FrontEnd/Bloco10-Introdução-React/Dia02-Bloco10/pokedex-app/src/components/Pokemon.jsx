import React from "react";
import PropTypes from 'prop-types';
class Pokemon extends React.Component {
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

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;