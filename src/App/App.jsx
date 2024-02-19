import About from "./components/About/About";
import Certifications from "./components/Certifications/Certifications";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
