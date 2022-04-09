import React from "react";
import "./ToggleableRadioButton.css";

export function ToggleableRadioButton({ enabled, id, updateChecked, size }) {
  const toggle = () => {
    updateChecked(!enabled, id);
  };

  const sizestring = size === "small" ? "radiobutton-small" : "radiobutton";

  return (
    <button
      type="button"
      data-testid="ToggleableRadioButton"
      className={enabled ? sizestring + "--on" : sizestring + "--off"}
      onClick={() => toggle()}
    ></button>
  );
}

export default ToggleableRadioButton;
