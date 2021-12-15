import React from "react";

class Endereco extends React.Component {
  constructor() {
    super();
    this.state = {
      endereco: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    
    let valueValid = value.replace(/[^a-zA-Zs]/g, "")

    this.setState({ endereco: valueValid });
  }

  render() {
    const { endereco } = this.state
    console.log(endereco)
    return (
      <input
        type="text"
        placeholder="Endereço"
        maxLength="200"
        required
        onChange={this.handleChange}
      />
    );
  }
}

export default Endereco;
