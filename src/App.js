import "./App.css";
import { Spells } from "./CharacterSheetItems/Spells/Spell";
import { CharacterStats } from "./CharacterSheetItems/CharacterStats/CharacterStats.js";
import CharacterSheetData from "./CharacterSheet.json";
import { GreyBackGroundBorder } from "./Controls/GreyBackGroundBorder.js";
function App() {
  //https://github.com/cynicaloptimist/improved-initiative Gh copilot pulled from here??
  // Mit License

  return (
    <div data-testid="app" className="container">
      <SpellsheetTest CharacterSheetData={CharacterSheetData} />
      <CharacterStatsTest CharacterSheetData={CharacterSheetData} />
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

export default App;
