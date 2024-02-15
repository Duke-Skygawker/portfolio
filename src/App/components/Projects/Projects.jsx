import Project from "./Project/Project";
import data from "./data";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {data.map((item) => {
          return <Project item={item} key={uuidv4()} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
