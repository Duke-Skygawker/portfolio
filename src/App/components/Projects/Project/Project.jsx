import { useGlobalContext } from "../../../../context/Context";

const Project = ({ item }) => {
  const { showLang } = useGlobalContext();
  const { name, namePL, img, repo, url } = item;
  return (
    <div className="project-card">
      <a href={url} target="_blank">
        <img src={img} alt={showLang === "ENG" ? name : namePL} />
      </a>
      <h3>
        <a href={repo} target="_blank">
          {showLang === "ENG" ? name : namePL}
        </a>
      </h3>
    </div>
  );
};
export default Project;
