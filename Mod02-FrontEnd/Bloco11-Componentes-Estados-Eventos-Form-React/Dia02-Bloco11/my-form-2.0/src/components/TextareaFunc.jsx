import React from "react";

class TextareaFunc extends React.Component {
  render() {
    const { limit, nameLabel, onMouse} = this.props;

    return (
      <div>
        <label>{nameLabel}</label>
        <textarea minlenth={limit} onMouseEnter={ onMouse } required></textarea>
      </div>
    );
  }
}

export default TextareaFunc;
