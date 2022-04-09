import { Spells } from "../Spell";
import { cleanup, render, screen } from "@testing-library/react";

const testSpell = {
  name: "cantrips",
  level: 0,
  slots: 0,
  remaining: 0,
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
  ],
};

afterEach(() => {
  cleanup();
});

//test for render without crashing
test("renders without crashing", () => {
  render(<Spells spells={testSpell} />);
});

//test for spell name
test("contains spell name", () => {
  render(<Spells spells={testSpell} />);
  const spellName = screen.getByText(testSpell.name);
  expect(spellName).toBeInTheDocument();
});

//test spell has all of its spells rendered
test("contains all spells", () => {
  const spells = {
    name: "cantrips",
    level: 0,
    slots: 0,
    remaining: 0,
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
        classes: "Sorcerer, Wizard",
      },
    ],
  };

  render(<Spells spells={spells} />);
  spells.spells.forEach((spell) => {
    const spellName = screen.getByText(spell.name);
    expect(spellName).toBeInTheDocument();
  });
});
