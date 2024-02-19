import { useGlobalContext } from "../../../context/Context";

const About = () => {
  const { showLang } = useGlobalContext();
  return (
    <div className="about" id="about">
      <h1>{showLang === "ENG" ? "About" : "O mnie"}</h1>
      <div className="about-container">
        <article>
          I have been interested in technology since I can remember. From taking
          apart and putting together old radios, and VCR players to eventually
          building my own Personal Computer.
        </article>
        <article>
          The most dominant hobby in my life is gaming, by far. And it has been
          that way since I've been about 4 or 5 years old. I've been wanting to
          make games since I've been a child, and that's how I got introduced to
          programming.
        </article>
        <article>
          Because I have made some bad choices in my academic endevours, I
          thought that I'd never be able to become a programmer, but thanks to
          the power of the internet, and all resources that are available
          through it, I am slowly build my programming skillset. Below you will
          find some of the projects I have completed so far. Most of my coding
          endevours can be found on my{" "}
          <a href="" target="_blank">
            github
          </a>
          .
        </article>
      </div>
    </div>
  );
};
export default About;
