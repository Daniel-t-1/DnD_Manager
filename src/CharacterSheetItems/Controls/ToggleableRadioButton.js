import React from "react";
import "./ToggleableRadioButton.css";

export function ToggleableRadioButton({ enabled, id, updateChecked }) {
  const toggle = () => {
    updateChecked(!enabled, id);
  };

  return (
    <button
      type="button"
      data-testid="ToggleableRadioButton"
      className={enabled ? "Radiobutton-On" : "Radiobutton-Off"}
      onClick={() => toggle()}
    ></button>
  );
}

export default ToggleableRadioButton;
