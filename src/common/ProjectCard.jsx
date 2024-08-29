function ProjectCard({ data }) {
  return (
    <a href={data.githubLink} target="_blank">
      <img src={data.image} alt={`${data.name} Logo`} className="hover" />
      <h3>{data.name}</h3>
      <p>{data.categories}</p>{" "}
    </a>
  );
}

export default ProjectCard;
