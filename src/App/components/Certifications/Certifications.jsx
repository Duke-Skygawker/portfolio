import cert1 from "../../../assets/certs/freecodecamp_responsive_web_cert_censored.jpg";
import cert2 from "../../../assets/certs/Javascript_Algorithms_and_Data_Structures_cert_censored.png";
import { useGlobalContext } from "../../../context/Context";
import CertHeadEng from "./CertHead/CertHeadEng";
import CertHeadPL from "./CertHead/CertHeadPL";

const Certifications = () => {
  const { showLang } = useGlobalContext();
  return (
    <div className="certifications" id="certifications">
      <h1>{showLang === "ENG" ? "Certifications" : "Certyfikaty"}</h1>

      <div className="cert-grid">
        <div>
          <img
            src={cert1}
            alt="Responsive Web Design Certification from freeCodeCamp"
            className="cert-img"
          />
        </div>
        <div>
          <img
            src={cert2}
            alt="Responsive Web Design Certification from freeCodeCamp"
            className="cert-img"
          />
        </div>
      </div>
      {showLang === "ENG" ? <CertHeadEng /> : <CertHeadPL />}
    </div>
  );
};
export default Certifications;
