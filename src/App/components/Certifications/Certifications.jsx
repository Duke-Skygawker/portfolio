import cert1 from "../../../assets/certs/freecodecamp_responsive_web_cert_censored.jpg";

const Certifications = () => {
  return (
    <div className="certifications" id="certifications">
      <h1>Certifications</h1>
      <div className="cert-grid">
        <img
          src={cert1}
          alt="Responsive Web Design Certification from freeCodeCamp"
          className="cert-img"
        />
      </div>
    </div>
  );
};
export default Certifications;
