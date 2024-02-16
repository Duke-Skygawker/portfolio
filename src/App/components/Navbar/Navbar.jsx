import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useGlobalContext } from "../../../context/Context";
import { PL, GB } from "country-flag-icons/react/3x2";

const Navbar = () => {
  const { showLang, setShowLang } = useGlobalContext();
  return (
    <div className="navbar">
      <div className="socials">
        <a href="https://github.com/Duke-Skygawker" className="social-link">
          <i>{<FaGithub />}</i>
        </a>
        <a href="https://twitter.com/Bart_K_Dev" className="social-link">
          <i>{<FaTwitter />}</i>
        </a>
      </div>
      <div className="nav-buttons">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
        </div>
        <div className="lang-buttons">
          <button onClick={() => setShowLang("PL")}>
            <i className="country-flag">{<PL title="Polish Flag" />}</i>
          </button>
          <button onClick={() => setShowLang("ENG")}>
            <i className="country-flag">{<GB title="Great Britain Flag" />}</i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
