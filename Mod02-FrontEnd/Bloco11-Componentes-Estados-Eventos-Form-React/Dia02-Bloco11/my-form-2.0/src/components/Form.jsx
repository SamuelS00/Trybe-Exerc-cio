import React from "react";
import Name from './Name'
import Email from './Email'
import Cpf from "./Cpf";
import Endereco from "./Endereco";
import Cidade from "./Cidade";
import Select from "./Select"
import states from "../data";
import Type from "./Type";

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <Name />
          <Email />
          <Cpf />
          <Endereco />
          <Cidade />
          <Select states={ states } />
          <Type />
        </fieldset>
      </form>
    );
  }
}

export default Form;
