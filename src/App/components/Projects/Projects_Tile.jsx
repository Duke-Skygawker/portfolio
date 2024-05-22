import ProjectTile from "./Project/ProjectTile";
import data from "./data";
import { v4 as uuidv4 } from "uuid";

const ProjectsTile = () => {
  return (
    <div className="projects-tile-container">
      {data.map((item) => {
        return <ProjectTile item={item} key={uuidv4()} />;
      })}
    </div>
  );
};
export default ProjectsTile;
