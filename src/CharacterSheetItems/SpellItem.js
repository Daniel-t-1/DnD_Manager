import "./SpellItem.css";
import React, { useState } from "react";

//collection of rows takes
export function Spells(props) {
  const [spells, setSpells] = useState(props.spells);
  const [spellLevel, setSpellLevel] = useState(props.spellLevel);
  const [spellType, setSpellType] = useState(props.spellType);

  function updateSpellname(id, Name) {
    let oldState = [...spells];
    oldState[id] = Name;
    setSpells(oldState);
  }

  return (
    <div>
      <SpellHeader name={spellType} spellLevel={props.spellLevel}></SpellHeader>
      <div>
        {spells.map((name, index) => (
          <SpellItem
            key={name}
            id={index}
            name={name}
            onSpellchange={updateSpellname}
          />
        ))}
      </div>
    </div>
  );
}

//spell item row
function SpellItem(props) {
  const [editing, setEdit] = useState(true);
  const [name, setName] = useState(props.name);

  const onNameInputChanged = (event) => {
    props.onSpellchange(props.id, event.target.value);
  };

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
          autoFocus="autoFocus"
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
