import { useGlobalContext } from "../../../context/Context";

const Socials = () => {
  const { icons, showLang } = useGlobalContext();
  const { faGithub, faTwitter } = icons;
  return (
    <div className="socials">
      <a
        href="https://github.com/Duke-Skygawker"
        className="social-link"
        title={showLang === "ENG" ? "GitHub Account" : "Konto na GitHubie"}
      >
        <i>{faGithub}</i>
      </a>
      <a
        href="https://twitter.com/Bart_K_Dev"
        className="social-link"
        title={showLang === "ENG" ? "Twitter Account" : "Konto na Twitterze"}
      >
        <i>{faTwitter}</i>
      </a>
    </div>
  );
};
export default Socials;
