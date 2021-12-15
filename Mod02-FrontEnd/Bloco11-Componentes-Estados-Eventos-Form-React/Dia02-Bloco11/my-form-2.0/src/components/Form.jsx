import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="CPF" />
          <input type="text" placeholder="endereço" />
          <input type="text" placeholder="endereço" />
          { }
          <div>
            <label for="residenciaCasa">Casa: </label>
            <input
              type="radio"
              name="residencia"
              value="casa"
              id="residenciaCasa"
            />
        
            <label for="residenciaApartamento">Apartamento: </label>
            <input
              type="radio"
              name="residencia"
              value="Apartamento"
              id="residenciaApartamento"
            />
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
