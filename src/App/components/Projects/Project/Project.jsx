const Project = ({ item }) => {
  const { name, img, repo, url } = item;
  return (
    <div className="project-card">
      <a href={url} target="_blank">
        <img src={img} alt={name} />
      </a>
      <h3>
        <a href={repo} target="_blank">
          {name}
        </a>
      </h3>
    </div>
  );
};
export default Project;
