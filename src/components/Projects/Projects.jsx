import ProjectCard from "../../common/ProjectCard";
import projectData from "../../ProjectsData/Data";
import "./Projects.css";
function Projects() {
  return (
    <section id="projects" className="projectsContainer">
      <h1 className="sectionTitle">Projects</h1>
      <div className="projectContainer">
        {projectData.map((data) => (
          <ProjectCard data={data} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
