import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../../context/Context";
import { PL, GB } from "country-flag-icons/react/3x2";
import LinksENG from "./LinksENG";
import LinksPL from "./LinksPL";
import Socials from "./Socials";

const Navbar = () => {
  const { showLang, setShowLang, showNavbar, setShowNavbar, icons } =
    useGlobalContext();
  const { faBars } = icons;
  return (
    <div className="navbar">
      <Socials />
      <div className={showNavbar ? "nav-buttons" : "nav-buttons collapse"}>
        {showLang === "ENG" ? <LinksENG /> : <LinksPL />}
        <div className="lang-buttons">
          <button onClick={() => setShowLang("PL")}>
            <i className="country-flag">
              {
                <PL
                  title={showLang === "ENG" ? "Polish Flag" : "Flaga Polski"}
                />
              }
            </i>
          </button>
          <button onClick={() => setShowLang("ENG")}>
            <i className="country-flag">
              {
                <GB
                  title={
                    showLang === "ENG"
                      ? "Great Britain Flag"
                      : "Flaga Wielkiej Brytanii"
                  }
                />
              }
            </i>
          </button>
        </div>
      </div>
      <div className="nav-toggler">
        <button
          className={showNavbar ? "deg90" : ""}
          onClick={() => setShowNavbar(!showNavbar)}
        >
          {faBars}
        </button>
      </div>
    </div>
  );
};
export default Navbar;
