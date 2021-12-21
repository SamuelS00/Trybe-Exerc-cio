import React from "react";

class Textarea extends React.Component {
  render() {
    const { limit, nameLabel } = this.props;

    return (
      <div>
        <label>{nameLabel}</label>
        <textarea minlenth={limit} required></textarea>
      </div>
    );
  }
}

export default Textarea;
