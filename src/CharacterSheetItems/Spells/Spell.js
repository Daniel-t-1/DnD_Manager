import "./Spell.css";
import React, { useState } from "react";
import { ToggleableRadioButton } from "../Controls/ToggleableRadioButton";

//collection of rows takes
export function Spells(props) {
  const [spells, setSpells] = useState(props.spells.spells);
  const [spellLevel, setSpellLevel] = useState(props.spells.level);
  const [spellType, setSpellType] = useState(props.spells.name);
  const [currentlyEditing, setCurrentlyEditing] = useState(-1);

  function updateSpellname(id, Name) {
    let oldState = [...spells];
    oldState[id] = { ...oldState[id], name: Name };
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
    <div className="Spell-Container">
      <SpellHeader spell={props.spells}></SpellHeader>
      <div>
        {spells.map((spell, index) => (
          <SpellItem
            key={spell.name}
            id={index}
            name={spell.name}
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
  const [name, setName] = useState(props.name);

  const onNameInputChanged = (event) => {
    setName(event.target.value);
  };

  const processSave = (event) => {
    props.onSpellchange(props.id, name);
    props.onEndEdit(props.id);
  };

  const processCancel = (event) => {
    props.onEndEdit(props.id);
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
          value={name}
        ></input>
        <button className="Spell-Edit-Button" onClick={() => processSave()}>
          Save
        </button>
        <button className="Spell-Edit-Button" onClick={() => processCancel()}>
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
      <div className="Spell-Level">{props.spell.level}</div>
      <div className="Spell-Type">{props.spell.name}</div>
      <SpellSlots spell={props.spell}></SpellSlots>
    </div>
  );
}

function SpellSlots(props) {
  var buttons = [];
  console.log(props);

  for (var i = 0; i < props.spell.slots; i++) {
    buttons.push(
      <ToggleableRadioButton
        key={i}
        enabled={i <= props.spell.remaining}
      ></ToggleableRadioButton>
    );
  }

  return buttons;
}
