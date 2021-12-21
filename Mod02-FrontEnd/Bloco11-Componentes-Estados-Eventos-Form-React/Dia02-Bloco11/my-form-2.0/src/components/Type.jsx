import React from "react";

class Type extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="residenciaCasa">Casa: </label>
        <input
          type="radio"
          name="residencia"
          value="casa"
          id="residenciaCasa"
        />

        <label htmlFor="residenciaApartamento">Apartamento: </label>
        <input
          type="radio"
          name="residencia"
          value="Apartamento"
          id="residenciaApartamento"
        />
      </div>
    );
  }
}

export default Type;
