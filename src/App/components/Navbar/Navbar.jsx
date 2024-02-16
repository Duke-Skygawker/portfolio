import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useGlobalContext } from "../../../context/Context";
import { PL, GB } from "country-flag-icons/react/3x2";
import LinksENG from "./LinksENG";
import LinksPL from "./LinksPL";

const Navbar = () => {
  const { showLang, setShowLang } = useGlobalContext();
  return (
    <div className="navbar">
      <div className="socials">
        <a
          href="https://github.com/Duke-Skygawker"
          className="social-link"
          title={showLang === "ENG" ? "GitHub Account" : "Konto na GitHubie"}
        >
          <i>{<FaGithub />}</i>
        </a>
        <a
          href="https://twitter.com/Bart_K_Dev"
          className="social-link"
          title={showLang === "ENG" ? "Twitter Account" : "Konto na Twitterze"}
        >
          <i>{<FaTwitter />}</i>
        </a>
      </div>
      <div className="nav-buttons">
        {showLang === "ENG" ? <LinksENG /> : <LinksPL />}
        <div className="lang-buttons">
          <button onClick={() => setShowLang("PL")}>
            <i className="country-flag">
              {
                <PL
                  title={showLang === "ENG" ? "Polish Flag" : "Flaga Polski"}
                />
              }
            </i>
          </button>
          <button onClick={() => setShowLang("ENG")}>
            <i className="country-flag">
              {
                <GB
                  title={
                    showLang === "ENG"
                      ? "Great Britain Flag"
                      : "Flaga Wielkiej Brytanii"
                  }
                />
              }
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
