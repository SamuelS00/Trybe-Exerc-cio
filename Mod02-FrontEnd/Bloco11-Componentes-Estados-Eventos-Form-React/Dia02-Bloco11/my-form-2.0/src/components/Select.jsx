import React from "react";
import Option from "./Option";

class Select extends React.Component {
  render() {
    const { states } = this.props;
    return (
      <select name="select" required>
        {states.map((state) => (
          <Option state={state} />
        ))}
      </select>
    );
  }
}

export default Select;