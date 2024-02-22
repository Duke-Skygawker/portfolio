import FooterENG from "./FooterENG";
import { useGlobalContext } from "../../../context/Context";
import FooterPL from "./FooterPL";

const Footer = () => {
  const { showLang } = useGlobalContext();
  return (
    <footer className="footer">
      {showLang === "ENG" ? <FooterENG /> : <FooterPL />}
    </footer>
  );
};
export default Footer;
