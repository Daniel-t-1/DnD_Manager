import React from "react";
import "./ToggleableRadioButton.css";

export function ToggleableRadioButton(props) {
  const toggle = () => {
    props.updateChecked(!props.enabled);
  };

  return (
    <button
      type="button"
      className={props.enabled ? "Radiobutton-On" : "Radiobutton-Off"}
      onClick={() => toggle()}
    ></button>
  );
}

export default ToggleableRadioButton;
