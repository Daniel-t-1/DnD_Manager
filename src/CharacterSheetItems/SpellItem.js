import "./SpellItem.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

//collection of rows takes
export function Spells(props) {
  const spells = props.spells.map((name) => (
    <SpellItem key={name} name={name} />
  ));

  return (
    <div>
      <SpellHeader
        name={props.spellType}
        spellLevel={props.spellLevel}
      ></SpellHeader>
      <div>{spells}</div>
    </div>
  );
}

//spell item row
function SpellItem(props) {
  const [editing, setEdit] = useState(false);
  const [name, setName] = useState(props.name);

  function onNameInputChanged(event) {
    setName(event.target.value);
  }

  if (!editing) {
    return (
      <div
        id={props.id}
        className="spell-item"
        onClick={() => setEdit(!editing)}
      >
        {name}
      </div>
    );
  } else {
    return (
      <div className="Spell-Item-Editor-Row">
        <input
          className="Spell-Item-Editor"
          onChange={onNameInputChanged}
          value={name}
        ></input>
        <button onClick={() => setEdit(!editing)} className="Spell-Edit-Button">
          Save
        </button>
      </div>
    );
  }
}

//returns spells header
function SpellHeader(props) {
  return (
    <div className="spell-header">
      <div className="Spell-Level">{props.spellLevel}</div>
      <div className="Spell-Type">{props.name}</div>
    </div>
  );
}
