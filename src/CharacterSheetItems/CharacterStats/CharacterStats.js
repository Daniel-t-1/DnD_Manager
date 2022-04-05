import React from "react";
import "./CharacterStats.css";
import { ToggleableRadioButton } from "../Controls/ToggleableRadioButton";

export function CharacterStats({ title, value, modifier, skills }) {
  const updateSkill = (skillName, skillValue, skillProficiency) => {
    skills.forEach((skill) => {
      if (skill.name === skillName) {
        skill.value = skillValue;
        skill.Proficiency = skillProficiency;
      }
    });
  };

  return (
    <div className="stat-Container">
      <MainStat value={value} title={title} modifier={modifier}></MainStat>
      <Skills
        skills={[
          { name: "test", value: 10, Proficiency: false },
          { name: "test", value: 10, Proficiency: false },
          { name: "test", value: 10, Proficiency: false },
          { name: "test", value: 10, Proficiency: false },
          { name: "test", value: 10, Proficiency: false },
          { name: "test", value: 10, Proficiency: false },
        ]}
        updateSkill={updateSkill}
      ></Skills>
    </div>
  );
}

//Main square with value and modifier
function MainStat({ title, value, modifier }) {
  return (
    <div className="stat-Box">
      <div className="stat-value">{value}</div>
      <div className="stat-modifier">{modifier}</div>
      <div className="stat-title">{title}</div>
    </div>
  );
}

//list of skills
function Skills({ skills, updateSkill }) {
  return (
    <div className="skills-container">
      {skills.map((skill) => (
        <Skill
          skillName={skill.name}
          skillValue={skill.value}
          skillProficiency={skill.Proficiency}
          updateSkill={updateSkill}
        />
      ))}
    </div>
  );
}

//individual skill item
function Skill({ skillName, skillValue, skillProficiency, updateSkill }) {
  const _updateSkill = () => {
    updateSkill(skillName, skillValue, skillProficiency);
  };

  function onChange(e) {
    _updateSkill(e.value);
  }

  return (
    <div className="skill-box">
      <ToggleableRadioButton
        size="small"
        enabled={skillProficiency}
        id={skillName}
      ></ToggleableRadioButton>
      <input
        type="text"
        className="skill-Value"
        defaultValue={skillValue}
      ></input>
      <div className="skill-Name">{skillName}</div>
    </div>
  );
}
