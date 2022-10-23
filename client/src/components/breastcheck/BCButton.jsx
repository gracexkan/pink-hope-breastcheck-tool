import React, { useState } from "react";

function BCButton({ icon, setEv, weightedEv }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);

    setEv((prev) => {
      if (!isActive) {
        prev += weightedEv;
      } else {
        prev -= weightedEv;
      }

      if (prev < 0) {
        prev = 0;
      }
      console.log({
        icon: icon,
        prev: prev,
      });

      return prev;
    });
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
      {icon}
    </button>
  );
}

export default BCButton;
