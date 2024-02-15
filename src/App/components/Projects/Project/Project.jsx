const Project = ({ item }) => {
  const { name, img, repo, url } = item;
  return (
    <div className="project-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
export default Project;
