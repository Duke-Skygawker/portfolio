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
      <h4>
        Currently working on:{" "}
        <span className="cert-span">
          Algorithms and Data Structures from{" "}
          <a href="https://www.freecodecamp.org" target="_blank">
            freeCodeCamp
          </a>
        </span>
      </h4>
    </div>
  );
};
export default Certifications;
