import React from "react";

class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const valueUpper = value.toUpperCase();
    this.setState({ value: valueUpper });
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Nome"
        onChange={this.handleChange}
        maxlength="40"
        required
      />
    );
  }
}

export default Name;
