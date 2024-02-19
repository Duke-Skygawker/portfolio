import { useGlobalContext } from "../../../context/Context";

const Hero = () => {
  const { showLang } = useGlobalContext();
  return (
    <div className="hero" id="home">
      {/* {showLang === "PL" ? <h1>Bohater</h1> : <h1>Hero</h1>} */}
      <div className="text-container">
        <article className="hero-text1">
          <span className="span1">Hello, and welcome</span> <br />
          to my <span className="span2">Portfolio.</span>
        </article>
        <article className="hero-text2">
          My name is <span className="span1">Bartek</span>
          <br /> and I'm a fledgling <br />
          <span className="span2">Web Dev,</span> please feel free to look
          around!{" "}
        </article>
      </div>
    </div>
  );
};
export default Hero;
