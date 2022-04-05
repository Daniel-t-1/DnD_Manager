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

      <CharacterStats value="1" title="2" modifier="3"></CharacterStats>
    </div>
  );
}

export default App;
