import React from "react";

class Option extends React.Component {
  render() {
    const { state } = this.props

    return (
      <option value={ state[0]}>{ state[1] }</option>
    );
  }
}

export default Option;
