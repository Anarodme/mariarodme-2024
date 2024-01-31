import React from "react";
import "./skills.css";
import SoftSkills from "./softSkills";
import TechSkills from "./techSkills";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container container grid">
        <SoftSkills />
        <TechSkills />
      </div>
    </section>
  );
};

export default Skills;
