import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../../context/Context";
import { PL, GB } from "country-flag-icons/react/3x2";
import LinksENG from "./LinksENG";
import LinksPL from "./LinksPL";
import Socials from "./Socials";
import LangSwitch from "./LangSwitch";

const Navbar = () => {
  const { showLang, setShowLang, showNavbar, setShowNavbar, icons } =
    useGlobalContext();
  const { faBars } = icons;
  return (
    <nav className="navbar">
      <Socials />
      <div className={showNavbar ? "nav-buttons" : "nav-buttons collapse"}>
        {showLang === "ENG" ? <LinksENG /> : <LinksPL />}
        <LangSwitch />
      </div>
      <div className="nav-toggler">
        <button
          className={showNavbar ? "deg90" : ""}
          onClick={() => setShowNavbar(!showNavbar)}
        >
          {faBars}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
