import "./Spell.css";
import React, { useState } from "react";
import { ToggleableRadioButton } from "../Controls/ToggleableRadioButton";

export function Spells(props) {
  const [spellGroup, setSpellGroup] = useState(props.spells);
  const [currentlyEditing, setCurrentlyEditing] = useState(-1);
  const [currentlyViewing, setCurrentlyViewing] = useState(-1);

  if (spellGroup.spells.length == 0) {
    let newstate = { ...spellGroup };

    var blank = {
      name: "None",
      level: "",
      school: "",
      time: "",
      range: "",
      components: "",
      duration: "",
      classes: "",
    };
    newstate.spells = [blank, blank, blank, blank, blank];
    setSpellGroup(newstate);
  }

  function updateSpellname(id, Name) {
    let newstate = { ...spellGroup };
    newstate.spells[id].name = Name;
    setSpellGroup(newstate);
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

  function tryView(id) {
    if (currentlyViewing === id) {
      setCurrentlyViewing(-1);
    } else {
      setCurrentlyViewing(id);
    }
  }

  function updateSpellSlot(increment) {
    let newstate = { ...spellGroup };
    newstate.remaining = increment;
    setSpellGroup(newstate);
  }

  return (
    <div className="Spell-Container">
      <SpellHeader
        spell={spellGroup}
        updateSpellSlot={updateSpellSlot}
      ></SpellHeader>
      <div>
        {spellGroup.spells.map((spell, index) => (
          <SpellItem
            key={spell.name}
            id={index}
            name={spell.name}
            spell={spell}
            onSpellchange={updateSpellname}
            editing={currentlyEditing === index}
            viewing={currentlyViewing === index}
            onBeginEdit={tryBeginEdit}
            onEndEdit={tryEndEdit}
            onView={tryView}
          />
        ))}
      </div>
    </div>
  );
}

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

  const onview = (event) => {
    props.onView(props.id);
  };

  const handleClick = (e) => {
    e.detail == 2 ? props.onBeginEdit(props.id) : props.onView(props.id);
  };

  if (!props.editing) {
    if (props.viewing) {
      return (
        <>
          <div className="spell-item-expanded" onClick={handleClick}>
            {props.name}
          </div>
          <div className="spell-item-expanded-base">
            <p>School: {props.spell.school}</p>
            <p>Casting Time: {props.spell.castingTime}</p>
            <p>Range: {props.spell.range}</p>
            <p>Components: {props.spell.components}</p>
            <p>Duration: {props.spell.duration}</p>
            <p>{props.spell.description}</p>
          </div>
        </>
      );
    } else {
      return (
        <div id={props.id} className="spell-item" onClick={handleClick}>
          {props.name}
        </div>
      );
    }
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

function SpellHeader(props) {
  const updateSpellSlot = (value) => {
    props.updateSpellSlot(value);
  };

  return (
    <div className="spell-header">
      <div className="Spell-Level">{props.spell.level}</div>
      <div className="Spell-Type">{props.spell.name}</div>
      <div className="spell-Slot">
        <SpellSlots
          key={props.spell.name}
          spell={props.spell}
          updateSpellSlot={(val) => updateSpellSlot(val)}
        ></SpellSlots>
      </div>
    </div>
  );
}

function SpellSlots(props) {
  var buttons = [];
  const updateSpellSlot = (value, id) => {
    if (!value && props.spell.remaining === id + 1) {
      props.updateSpellSlot(id);
    } else {
      props.updateSpellSlot(id + 1);
    }
  };

  for (var i = 0; i < props.spell.slots; i++) {
    buttons.push(
      <ToggleableRadioButton
        key={i}
        id={i}
        enabled={i < props.spell.remaining}
        updateChecked={(val, id) => updateSpellSlot(val, id)}
      ></ToggleableRadioButton>
    );
  }

  return [buttons];
}
