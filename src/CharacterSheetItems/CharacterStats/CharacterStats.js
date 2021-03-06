import React from "react";
import "./CharacterStats.css";
import { ToggleableRadioButton } from "../../Controls/ToggleableRadioButton";

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
    <div className="stat-container">
      <MainStat value={value} title={title} modifier={modifier}></MainStat>
      <Skills skills={skills} updateSkill={updateSkill}></Skills>
    </div>
  );
}

//Main square with value and modifier
function MainStat({ title, value, modifier }) {
  return (
    <div className="stat-box">
      <div className="stat-value">{value}</div>
      <div className="stat-modifier">{modifier}</div>
      <div className="stat-title">{title}</div>
    </div>
  );
}

//list of skills
function Skills({ skills, updateSkill }) {
  if (skills === undefined || skills.length === 0) {
    return <b>NO DATA</b>;
  } else {
    return (
      <div className="skills-container">
        {Object.keys(skills).map((skill) => (
          <Skill
            skillName={skill}
            skillValue={skills[skill].value}
            skillProficiency={skills[skill].Proficiency}
            updateSkill={updateSkill}
          />
        ))}
      </div>
    );
  }
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
        className="skill-value"
        defaultValue={skillValue}
      ></input>
      <div className="skill-name">{skillName}</div>
    </div>
  );
}
