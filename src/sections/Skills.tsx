import { type JSX } from "react";
import Title from "../components/Title";
import { skills } from "../data";
import Card from "../components/Card";

function Skills(): JSX.Element {
  return (
    <section id="skills" className="align-element py-20">
      <Title text="tech stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <Card key={skill.id} skill={skill} />;
        })}
      </div>
    </section>
  );
}

export default Skills;
