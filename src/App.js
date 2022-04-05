import "./App.css";
import { Spells } from "./CharacterSheetItems/Spells/Spell";
import { CharacterStats } from "./CharacterSheetItems/CharacterStats/CharacterStats.js";
import CharacterSheetData from "./CharacterSheet.json";
function App() {
  //https://github.com/cynicaloptimist/improved-initiative Gh copilot pulled from here??
  // Mit License

  return (
    <div data-testid="app" className="container">
      {CharacterSheetData.spells.map((spellset) => (
        <Spells spells={spellset} key={spellset.name}></Spells>
      ))}
      {Object.keys(CharacterSheetData.Stats).map((key) => (
        <CharacterStats
          key={key}
          title={key}
          value={CharacterSheetData.Stats[key].value}
          modifier={CharacterSheetData.Stats[key].modifier}
          skills={CharacterSheetData.Stats[key].skills}
        ></CharacterStats>
      ))}
    </div>
  );
}

export default App;
