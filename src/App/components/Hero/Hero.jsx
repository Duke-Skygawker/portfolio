import { useGlobalContext } from "../../../context/Context";

const Hero = () => {
  const { showLang } = useGlobalContext();
  return (
    <div className="hero" id="home">
      {showLang === "PL" ? <h1>Bohater</h1> : <h1>Hero</h1>}
    </div>
  );
};
export default Hero;
