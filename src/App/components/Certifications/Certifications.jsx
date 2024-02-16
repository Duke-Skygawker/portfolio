import cert1 from "../../../assets/certs/freecodecamp_responsive_web_cert_censored.jpg";
import { useGlobalContext } from "../../../context/Context";
import CertHeadEng from "./CertHead/CertHeadEng";
import CertHeadPL from "./CertHead/CertHeadPL";

const Certifications = () => {
  const { showLang } = useGlobalContext();
  return (
    <div className="certifications" id="certifications">
      <h1>{showLang === "ENG" ? "Certifications" : "Certyfikaty"}</h1>
      <div>
        <div className="cert-grid">
          <img
            src={cert1}
            alt="Responsive Web Design Certification from freeCodeCamp"
            className="cert-img"
          />
        </div>
        {showLang === "ENG" ? <CertHeadEng /> : <CertHeadPL />}
      </div>
    </div>
  );
};
export default Certifications;
