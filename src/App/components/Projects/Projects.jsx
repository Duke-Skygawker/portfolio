import { useGlobalContext } from "../../../context/Context";
import ProjectsTile from "./Projects_Tile";

const Projects = () => {
  const { showLang } = useGlobalContext();
  return (
    <div className="projects" id="projects">
      <h1>{showLang === "ENG" ? "Projects" : "Projekty"}</h1>
      <ProjectsTile />
    </div>
  );
};
export default Projects;
