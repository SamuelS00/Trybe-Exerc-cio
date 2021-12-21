import React from "react";

class Cidade extends React.Component {
  constructor() {
    super();
    this.state = {
      cidade: ''
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleBlur(event) {
    let { value } = event.target;
        
    let er = /^[0-9]+$/;
    console.log(er.test(value[0]))
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({ cidade: value });
  }

  render() {
    const { cidade } = this.state;

    return (
      <input
        type="text"
        placeholder="Cidade"
        maxLength="28"
        value={ cidade }
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        required
      />
    );
  }
}

export default Cidade;
