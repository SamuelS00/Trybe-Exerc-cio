import React from "react";

class Pokemon extends React.Component {
   render() {
    const { pokemon } = this.props
    const { name, type, averageWeight, image } = pokemon
    return(
     <div>
        <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>{`Average weigh: ${ averageWeight.value + averageWeight.measurementUnit}`}</p>
        </div>
            <div>
            <img src={image} alt={name}></img>
        </div>
    </div>
    )
  }
}

export default Pokemon