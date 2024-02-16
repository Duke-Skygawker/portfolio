import { useGlobalContext } from "../../../context/Context";

const About = () => {
  const { showLang } = useGlobalContext();
  return (
    <div className="about" id="about">
      <h1>{showLang === "ENG" ? "About" : "O mnie"}</h1>
    </div>
  );
};
export default About;
