import { useGlobalContext } from "../../../context/Context";
import HeroENG from "./HeroENG";
import HeroPL from "./HeroPL";

const Hero = () => {
  const { showLang } = useGlobalContext();
  return (
    <div className="hero" id="home">
      {showLang === "PL" ? <HeroPL /> : <HeroENG />}
    </div>
  );
};
export default Hero;
