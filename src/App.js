import logo from "./logo.svg";
import "./App.css";
import { Spells } from "./CharacterSheetItems/SpellItem";

function App() {
  const cantrips = [
    "Acid Splash",
    "Blade War",
    "Booming Blad",
    "Chill Touch",
    "Control Flames",
    "Create Bonfire",
    "Dancing Lights",
    "Decompose (HB)",
    "Druidcraft",
    "Eldritch Blast",
    "Encode Thoughts",
    "Fire Bolt",
    "Friends",
    "Frostbite",
    "Green-Flame Blade",
    "Guidance",
  ];
  return (
    <div className="container">
      <Spells spellType="cantrips" spells={cantrips} spellLevel="0"></Spells>
    </div>
  );
}

export default App;
