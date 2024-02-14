import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="socials">
        <a href="https://github.com/Duke-Skygawker" className="social-link">
          <i>{<FaGithub />}</i>
        </a>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
      </div>
    </div>
  );
};
export default Navbar;
