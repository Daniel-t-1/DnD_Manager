import React from "react";
import { useState } from "react";
import "./ToggleableRadioButton.css";

export function ToggleableRadioButton(props) {
  const [enabled, setEnable] = useState(props.enabled);

  function toggle() {
    setEnable(!enabled);
    //  props.updateChecked(!enabled);
  }

  return (
    <button
      type="button"
      className={enabled ? "Radiobutton-On" : "Radiobutton-Off"}
      onClick={() => toggle()}
    ></button>
  );
}

export default ToggleableRadioButton;
