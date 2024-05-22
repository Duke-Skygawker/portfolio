import { useGlobalContext } from "../../../context/Context";
import ProjectsTile from "./Projects_Tile";
import ProjectsList from "./Projects_List";

const Projects = () => {
  const { showLang, projectsLayout, setProjectsLayout, icons } =
    useGlobalContext();
  return (
    <div className="projects" id="projects">
      <div className="projects-header">
        <h1>{showLang === "ENG" ? "Projects" : "Projekty"}</h1>
        <div className="projects-layout-btns">
          <button
            title={
              showLang === "ENG"
                ? "Tile layout for projects"
                : "Układ projektów w formie Kafelków"
            }
            onClick={() => setProjectsLayout("Tile")}
          >
            <i>{icons.faTable}</i>
          </button>
          <button
            disabled
            title={
              showLang === "ENG"
                ? "List layout for projects"
                : "Układ projektów w formie listy"
            }
            onClick={() => setProjectsLayout("List")}
          >
            <i>{icons.faList}</i>
          </button>
        </div>
      </div>
      {projectsLayout === "Tile" ? <ProjectsTile /> : <ProjectsList />}
    </div>
  );
};
export default Projects;
