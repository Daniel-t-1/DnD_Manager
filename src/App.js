import "./App.css";
import React, { useState } from "react";
import { Spells } from "./CharacterSheetItems/Spells/Spell";
import { CharacterStats } from "./CharacterSheetItems/CharacterStats/CharacterStats.js";
import ImportedCharacterSheetData from "./CharacterSheet.json";
import { GreyBackGroundBorder } from "./Controls/GreyBackGroundBorder.js";
import { Inventory } from "./CharacterSheetItems/Inventory/Inventory.js";

function App() {
  const [CharacterSheetData, setCharacterSheetData] = useState(
    ImportedCharacterSheetData
  );

  //updates the sheet data at the given object path
  function updateSheetData(path, value) {
    console.log(CharacterSheetData);

    let splitPath = path.split(".");
    let newState = { ...CharacterSheetData };
    let currentObject = newState;

    for (let i = 0; i < splitPath.length; i++) {
      if (i === splitPath.length - 1) {
        currentObject[splitPath[i]] = value;
      } else {
        currentObject = currentObject[splitPath[i]];
      }
    }
    setCharacterSheetData(newState);
  }

  return (
    <div data-testid="app" className="container">
      <InventoryTest
        CharacterSheetData={CharacterSheetData}
        updateSheetData={updateSheetData}
      />
    </div>
  );
}

//Note these are here to render sample content to ensure the project is not blank during early dev phase

function CharacterStatsTest({ CharacterSheetData }) {
  return (
    <GreyBackGroundBorder>
      {Object.keys(CharacterSheetData.Stats).map((key) => (
        <CharacterStats
          key={key}
          title={key}
          value={CharacterSheetData.Stats[key].value}
          modifier={CharacterSheetData.Stats[key].modifier}
          skills={CharacterSheetData.Stats[key].skills}
        ></CharacterStats>
      ))}
    </GreyBackGroundBorder>
  );
}

function SpellsheetTest({ CharacterSheetData }) {
  return (
    <>
      {CharacterSheetData.spells.map((spellset) => (
        <Spells spells={spellset} key={spellset.name}></Spells>
      ))}
    </>
  );
}

function InventoryTest({ CharacterSheetData, updateSheetData }) {
  return (
    <>
      <GreyBackGroundBorder>
        <Inventory
          items={CharacterSheetData.Equipment.Items}
          updateSheetData={updateSheetData}
        ></Inventory>
      </GreyBackGroundBorder>
    </>
  );
}

export default App;
