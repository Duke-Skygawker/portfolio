import Project from "./Project/Project";
import data from "./data";
import { v4 as uuidv4 } from "uuid";

const ProjectsTile = () => {
  return (
    <div className="projects-container">
      {data.map((item) => {
        return <Project item={item} key={uuidv4()} />;
      })}
    </div>
  );
};
export default ProjectsTile;
