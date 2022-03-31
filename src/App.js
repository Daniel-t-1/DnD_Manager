import logo from "./logo.svg";
import "./App.css";
import { Spells } from "./CharacterSheetItems/Spells/Spell";

function App() {
  //https://github.com/cynicaloptimist/improved-initiative Gh copilot pulled from here??
  // Mit License

  const spells = [
    //l0
    {
      name: "cantrips",
      level: 0,
      slots: 5,
      remaining: 2,
      spells: [
        {
          name: "Acid Splash",
          level: 0,
          school: "Conjuration",
          time: "1 action",
          range: "60 feet",
          components: "V, S",
          duration: "Instantaneous",
          classes: "Sorcerer, Wizard",
        },
        {
          name: "Blade Ward",
          level: 0,
          school: "Abjuration",
          time: "1 action",
          range: "Self",
          components: "V, S",
          duration: "Concentration, up to 10 minutes",
          classes: "Bard, Sorcerer, Warlock, Wizard",
        },
        {
          name: "Chill Touch",
          level: 0,
          school: "Necromancy",
          time: "1 action",
          range: "120 feet",
          components: "V, S",
          duration: "Concentration, up to 1 minute",
          classes: "Sorcerer, Wizard",
        },
        {
          name: "Eldritch Blast",
          level: 0,
          school: "Evocation",
          time: "1 action",
          range: "120 feet",
          components: "V, S",
          duration: "Instantaneous",
          classes: "Warlock, Wizard",
        },
        {
          name: "Mage Hand",
          level: 0,
          school: "Conjuration",
          time: "1 action",
          range: "30 feet",
          components: "V, S",
          duration: "Concentration, up to 1 minute",
          classes: "Sorcerer, Wizard",
        },
        {
          name: "Minor Illusion",
          level: 0,
          school: "Illusion",
          time: "1 action",
          range: "30 feet",
          components: "V, S, M (a bit of fleece)",
          duration: "Concentration, up to 1 minute",
          classes: "Bard, Sorcerer, Warlock, Wizard",
        },
        {
          name: "Prestidigitation",
          level: 0,
          school: "Transmutation",
          time: "1 action",
          range: "30 feet",
        },
      ],
    },
    //l1
    {
      name: "Level 1",
      level: 1,
      slots: 5,
      remaining: 2,
      spells: [
        {
          name: "Acid Arrow",
          level: 1,
          school: "Transmutation",
          time: "1 action",
          range: "90 feet",
          components:
            "V, S, M (a quiver containing at least one piece of nonmagical ammunition)",
          duration: "Instantaneous",
          classes: "Sorcerer, Wizard",
        },
        {
          name: "Alarm",
          level: 1,
          school: "Abjuration",
          time: "1 action",
          range: "30 feet",
          components: "V, S, M (a tiny bell and a piece of fine silver wire)",
          duration: "8 hours",
          classes: "Bard, Druid, Ranger",
        },
        {
          name: "Burning Hands",
          level: 1,
          school: "Evocation",
          time: "1 action",
          range: "Self (15-foot cone)",
          components: "V, S",
          duration: "Instantaneous",
          classes: "Sorcerer, Wizard",
        },
        {
          name: "Charm Person",
          level: 1,
          school: "Enchantment",
          time: "1 action",
          range: "30 feet",
          components: "V, S",
          duration: "1 hour",
          classes: "Bard, Druid, Sorcerer, Warlock, Wizard",
        },
        {
          name: "Color Spray",
          level: 1,
          school: "Illusion",
          time: "1 action",
          range: "Self (15-foot cone)",
          components: "V, S",
          duration: "Instantaneous",
          classes: "Sorcerer, Wizard",
        },
        {
          name: "Comprehend Languages",
          level: 1,
          school: "Divination",
          time: "1 action",
          range: "Self",
          components: "V, S, M (a pinch of soot and salt)",
          duration: "1 hour",
          classes: "Bard, Druid, Sorcerer, Warlock, Wizard",
        },
        {
          name: "Create or Destroy Water",
          level: 1,
          school: "Transmutation",
          time: "1 action",
          range: "30 feet",
          components: "V, S",
          duration: "Instantaneous",
          classes: "Cleric, Druid, Sorcerer, Wizard",
        },
        {
          name: "Cure Wounds",
          level: 1,
          school: "Evocation",
          time: "1 action",
          range: "Touch",
          components: "V, S",
          duration: "Instantaneous",
          classes: "Bard, Cleric, Druid, Paladin, Ranger",
        },
        {
          name: "Detect Evil and Good",
          level: 1,
          school: "Divination",
          time: "1 action",
          range: "Self",
          components: "V, S",
          duration: "Concentration, up to 10 minutes",
          classes: "Cleric, Paladin, Warlock, Wizard",
        },
        {
          name: "Detect Magic",
          level: 1,
          school: "Divination",
          time: "1 action",
          range: "Self",
          components: "V, S",
          duration: "Concentration, up to 10 minutes",
          classes: "Bard, Druid, Paladin, Ranger, Wizard",
        },
        {
          name: "Detect Poison and Disease",
          level: 1,
          school: "Divination",
          time: "1 action",
          range: "Self",
          components: "V, S",
          duration: "Concentration, up to 10 minutes",
          classes: "Cleric, Druid, Paladin, Ranger, Wizard",
        },
        {
          name: "Disguise Self",
          level: 1,
          school: "Illusion",
          time: "1 action",
          range: "Self",
          components: "V, S",
          duration: "1 hour",
          classes: "Bard, Sorcerer, Warlock, Wizard",
        },
        {
          name: "Dissonant Whispers",
          level: 1,
          school: "Enchantment",
          time: "1 action",
          range: "60 feet",
          components: "V, S",
          duration: "Instantaneous",
          classes: "Bard",
        },
        {
          name: "Expeditious Retreat",
          level: 1,
          school: "Transmutation",
          time: "1 bonus action",
          range: "Self",
          components: "V, S",
          duration: "Concentration, up to 10 minutes",
          classes: "Sorcerer, Wizard",
        },
        {
          name: "False Life",
          level: 1,
          school: "Necromancy",
          time: "1 action",
          range: "Self",
          components:
            "V, S, M (a small amount of alcohol or distilled spirits)",
          duration: "1 hour",
          classes: "Sorcerer, Wizard",
        },
      ],
    },
  ];

  return (
    <div className="container">
      {spells.map((spellset, index) => (
        <Spells spells={spellset}></Spells>
      ))}
    </div>
  );
}

export default App;
