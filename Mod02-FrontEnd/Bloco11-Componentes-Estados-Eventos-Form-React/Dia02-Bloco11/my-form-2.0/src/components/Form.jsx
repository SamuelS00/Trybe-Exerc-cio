import React from "react";
import Option from './Option'
import Name from './Name'
import Email from './Email'
import Cpf from "./Cpf";

class Form extends React.Component {
  render() {
    const states = [
        ['AC', 'Acre'],
        ['AL', 'Alagoas'],
        ['AP', 'Amapá'],
        ['AM', 'Amazonas'],
        ['BA', 'Bahia'],
        ['CE', 'Ceará'],
        ['DF', 'Distrito Federal'],
        ['ES', 'Espírito Santo'],
        ['GO', 'Goías'],
        ['MA', 'Maranhão'],
        ['MT', 'Mato Grosso'],
        ['MS', 'Mato Grosso do Sul'],
        ['MG', 'Minas Gerais'],
        ['PA', 'Pará'],
        ['PB', 'Paraíba'],
        ['PR', 'Paraná'],
        ['PE', 'Pernambuco'],
        ['PI', 'Piauí'],
        ['RJ', 'Rio de Janeiro'],
        ['RN', 'Rio Grande do Norte'],
        ['RS', 'Rio Grande do Sul'],
        ['RO', 'Rondônia'],
        ['RR', 'Roraíma'],
        ['SC', 'Santa Catarina'],
        ['SP', 'São Paulo'],
        ['SE', 'Sergipe'],
        ['TO', 'Tocantins'],
    ]

    return (
      <form>
        <fieldset>
          <Name />
          <Email />
          <Cpf />
          <input type="text" placeholder="Endereço" />
          <input type="text" placeholder="Cidade" />
          <select name="select">
            {states.map((state => <Option state={ state } />))}
          </select>
          <div >
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
        </fieldset>
      </form>
    );
  }
}

export default Form;
