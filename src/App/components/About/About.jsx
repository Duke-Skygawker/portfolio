import { useGlobalContext } from "../../../context/Context";
import AboutENG from "./AboutENG";
import AboutPL from "./AboutPL";

const About = () => {
  const { showLang } = useGlobalContext();
  return (
    <div className="about" id="about">
      <h1>{showLang === "ENG" ? "About" : "O mnie"}</h1>
      {showLang === "ENG" ? <AboutENG /> : <AboutPL />}
    </div>
  );
};
export default About;
