import "./Spell.css";
import React, { useState } from "react";
import { ToggleableRadioButton } from "../../Controls/ToggleableRadioButton";

export function Spells({ spells }) {
  const [spellGroup, setSpellGroup] = useState(spells);
  const [currentlyEditing, setCurrentlyEditing] = useState(-1);
  const [currentlyViewing, setCurrentlyViewing] = useState([]);

  if (spellGroup.spells === undefined || spellGroup.spells.length === 0) {
    let newstate = { ...spellGroup };
    var blank = {
      name: "None",
      level: "",
      school: "",
      time: "",
      range: "",
      components: "",
      duration: "",
      classes: ""
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
    const index = currentlyViewing.indexOf(id);
    let updatedViewing = [...currentlyViewing];
    if (index > -1) {
      updatedViewing.splice(index, 1);
    } else {
      updatedViewing.push(id);
    }
    setCurrentlyViewing(updatedViewing);
  }

  function updateSpellSlot(increment) {
    let newstate = { ...spellGroup };
    newstate.remaining = increment;
    setSpellGroup(newstate);
  }

  return (
    <div className="spell-container">
      <SpellHeader
        spell={spellGroup}
        updateSpellSlot={updateSpellSlot}
      ></SpellHeader>
      <div>
        {spellGroup.spells.map((spell, index) => (
          <SpellItem
            data-testid="spell-item"
            key={index}
            id={index}
            spellName={spell.name}
            spell={spell}
            onSpellchange={updateSpellname}
            editing={currentlyEditing === index}
            viewing={currentlyViewing.includes(index)}
            onBeginEdit={tryBeginEdit}
            onEndEdit={tryEndEdit}
            onView={tryView}
          />
        ))}
      </div>
    </div>
  );
}

function SpellItem({
  id,
  spellName,
  spell,
  onSpellchange,
  editing,
  viewing,
  onBeginEdit,
  onEndEdit,
  onView
}) {
  const [name, setName] = useState(spellName);

  const onNameInputChanged = (event) => {
    setName(event.target.value);
  };

  const processSave = (event) => {
    onSpellchange(id, name);
    onEndEdit(id);
  };

  const processCancel = (event) => {
    onEndEdit(id);
  };

  const onview = (event) => {
    onView(id);
  };

  const handleClick = (e) => {
    e.detail == 2 ? onBeginEdit(id) : onView(id);
  };

  if (!editing) {
    return (
      <>
        <div
          className={viewing ? "spell-item--expanded" : "spell-item"}
          onClick={handleClick}
        >
          {spellName}
        </div>
        <div
          className={
            viewing ? "spell-item--expanded-base" : "spell-item-collapsed-base"
          }
        >
          <p>School: {spell.school}</p>
          <p>Casting Time: {spell.castingTime}</p>
          <p>Range: {spell.range}</p>
          <p>Components: {spell.components}</p>
          <p>Duration: {spell.duration}</p>
          <p>{spell.description}</p>
        </div>
      </>
    );
  } else {
    return (
      <div className="spell-item-editor-row">
        <input
          className="spell-item-editor"
          onChange={onNameInputChanged}
          value={name}
        ></input>
        <button className="Spell-edit-button" onClick={() => processSave()}>
          Save
        </button>
        <button className="spell-edit-button" onClick={() => processCancel()}>
          Cancel
        </button>
      </div>
    );
  }
}

function SpellHeader({ spell, updateSpellSlot }) {
  const _updateSpellSlot = (value) => {
    updateSpellSlot(value);
  };

  return (
    <div className="spell-header">
      <div className="spell-level">{spell.level}</div>
      <div className="spell-type">{spell.name}</div>
      <div className="spell-slot">
        <SpellSlots
          key={spell.name}
          spell={spell}
          updateSpellSlot={(val) => _updateSpellSlot(val)}
        ></SpellSlots>
      </div>
    </div>
  );
}

function SpellSlots({ spell, updateSpellSlot }) {
  var buttons = [];
  const _updateSpellSlot = (value, id) => {
    if (!value && spell.remaining === id + 1) {
      updateSpellSlot(id);
    } else {
      updateSpellSlot(id + 1);
    }
  };

  for (var i = 0; i < spell.slots; i++) {
    buttons.push(
      <ToggleableRadioButton
        key={i}
        id={i}
        enabled={i < spell.remaining}
        updateChecked={(val, id) => _updateSpellSlot(val, id)}
      ></ToggleableRadioButton>
    );
  }

  return [buttons];
}
