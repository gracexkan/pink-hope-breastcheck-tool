import React, { useState } from "react";

function BCButton(props) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  const ButtonStyle = {
    backgroundColor: isActive ? "#ff9a9e" : "",
    color: isActive ? "white" : "",
  };
  return (
    <button
      className="button"
      appearance="primary"
      style={ButtonStyle}
      onClick={handleClick}
    >
      {props.icon}
    </button>
  );
}

export default BCButton;
