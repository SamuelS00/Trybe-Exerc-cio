import React from "react";

class Cpf extends React.Component {
  render() {
    return (
      <input
        type="text"
        name="cpf"
        placeholder="CPF"
        pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
        maxLength="11"
        required
      />
    );
  }
}

export default Cpf;
