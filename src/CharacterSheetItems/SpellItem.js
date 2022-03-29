import "./SpellItem.css";
import React, { useState } from "react";

//collection of rows takes
export function Spells(props) {
  const [spells, setSpells] = useState(props.spells);
  const [spellLevel, setSpellLevel] = useState(props.spellLevel);
  const [spellType, setSpellType] = useState(props.spellType);
  const [currentlyEditing, setCurrentlyEditing] = useState(-1);

  function updateSpellname(id, Name) {
    let oldState = [...spells];
    oldState[id] = Name;
    setSpells(oldState);
  }

  function tryBeginEdit(id) {
    if (currentlyEditing === -1) {
      setCurrentlyEditing(id);
    }
  }

  function tryEndEdit(id) {
    if (currentlyEditing === id) {
      setCurrentlyEditing(-1);
    }
  }

  return (
    <div>
      <SpellHeader name={spellType} spellLevel={spellLevel}></SpellHeader>
      <div>
        {spells.map((name, index) => (
          <SpellItem
            key={name}
            id={index}
            name={name}
            onSpellchange={updateSpellname}
            editing={currentlyEditing === index}
            onBeginEdit={tryBeginEdit}
            onEndEdit={tryEndEdit}
          />
        ))}
      </div>
    </div>
  );
}

//spell item row
function SpellItem(props) {
  const onNameInputChanged = (event) => {
    props.onSpellchange(props.id, event.target.value);
  };

  if (!props.editing) {
    return (
      <div
        id={props.id}
        className="spell-item"
        onClick={() => props.onBeginEdit(props.id)}
      >
        {props.name}
      </div>
    );
  } else {
    return (
      <div className="Spell-Item-Editor-Row">
        <input
          className="Spell-Item-Editor"
          onChange={onNameInputChanged}
          value={props.name}
          autoFocus="autoFocus"
        ></input>
        <button
          className="Spell-Edit-Button"
          onClick={() => props.onEndEdit(props.id)}
        >
          Cancel
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
