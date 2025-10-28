import { projects, type Project } from "../data";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";

function Projects() {
  return (
    <section id="projects" className="align-element py-20">
      <Title text="web creation" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project: Project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
