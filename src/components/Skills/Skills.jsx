import React from "react";
import "./Skills.css";
import checkedIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
function Skills() {
  return (
    <section id="skills" className="skillsContainer">
      <h1 className="sectionTitle">Skills</h1>
      <div className="skillList">
        <SkillList src={checkedIcon} skill="HTML5" />
        <SkillList src={checkedIcon} skill="CSS3" />
        <SkillList src={checkedIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className="skillList">
        <SkillList src={checkedIcon} skill="React JS" />
        <SkillList src={checkedIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className="skillList">
        <SkillList src={checkedIcon} skill="Redux Toolkit" />
        <SkillList src={checkedIcon} skill="Node" />
        <SkillList src={checkedIcon} skill="Git" />
      </div>
      <hr />
      <div className="skillList">
        <SkillList src={checkedIcon} skill="Python" />
      </div>
    </section>
  );
}

export default Skills;
