import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../../context/Context";
import LinksENG from "./LinksENG";
import LinksPL from "./LinksPL";
import Socials from "./Socials";
import LangSwitch from "./LangSwitch";

const Navbar = () => {
  // globals
  const { showLang, showNavbar, setShowNavbar, icons } = useGlobalContext();
  const { faBars } = icons;
  // locals
  const [linksHeight, setLinksHeight] = useState(0);
  const [linksMargin, setLinksMargin] = useState(0);
  const [navWidth, setNavWidth] = useState(window.innerWidth);
  const navRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const navWidth = navRef.current.getBoundingClientRect().width;
      if (navWidth >= 768) {
        setShowNavbar(false);
      }
      setNavWidth(navWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const expandNav = () => {
    const linksCont = linksRef.current.getBoundingClientRect();
    if (linksCont.x < 420) {
      setLinksHeight(linksCont.x + 150);
    } else if (linksCont.x > 420 && linksCont.x < 744) {
      setLinksHeight(linksCont.x - 100);
    } else {
      setLinksHeight(linksCont.x);
    }
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <Socials />
      <div
        className="nav-buttons"
        style={
          showNavbar
            ? navWidth < 768
              ? { height: `${linksHeight}px` }
              : { height: `${linksHeight + 50}px` }
            : navWidth >= 751
            ? { height: "4.75rem" }
            : { height: "0" }
        }
        ref={linksRef}
      >
        {showLang === "ENG" ? <LinksENG /> : <LinksPL />}
        <LangSwitch />
      </div>
      <div className="nav-toggler">
        <button className={showNavbar ? "deg90" : ""} onClick={expandNav}>
          {faBars}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
