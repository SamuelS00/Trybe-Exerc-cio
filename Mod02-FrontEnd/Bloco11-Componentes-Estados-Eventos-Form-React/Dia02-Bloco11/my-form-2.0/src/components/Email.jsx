import React from "react";

class Email extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(email) {
    let reg = /\S+@\S+\.\S+/;
    return reg.test(email);
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({ email: value });
  }

  render() {
    const { email } = this.state;
    console.log(email);
    return (
      <input
        type="email"
        onChange={this.handleChange}
        placeholder="Email"
        maxLength="50"
        required
      />
    );
  }
}

export default Email;
