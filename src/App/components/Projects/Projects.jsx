import { useGlobalContext } from "../../../context/Context";
import ProjectsTile from "./Projects_Tile";

const Projects = () => {
  const { showLang, icons } = useGlobalContext();
  return (
    <div className="projects" id="projects">
      <div className="projects-header">
        <h1>{showLang === "ENG" ? "Projects" : "Projekty"}</h1>
        <div className="projects-layout-btns">
          <button>
            <i>{icons.faTable}</i>
          </button>
          <button>
            <i>{icons.faList}</i>
          </button>
        </div>
      </div>
      <ProjectsTile />
    </div>
  );
};
export default Projects;
