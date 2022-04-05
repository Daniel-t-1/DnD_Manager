import React from "react";
import "./ToggleableRadioButton.css";

export function ToggleableRadioButton({ enabled, id, updateChecked, size }) {
  const toggle = () => {
    updateChecked(!enabled, id);
  };

  const sizestring = size === "small" ? "Radiobutton-Small" : "Radiobutton";

  return (
    <button
      type="button"
      data-testid="ToggleableRadioButton"
      className={enabled ? sizestring + "-On" : sizestring + "-Off"}
      onClick={() => toggle()}
    ></button>
  );
}

export default ToggleableRadioButton;
