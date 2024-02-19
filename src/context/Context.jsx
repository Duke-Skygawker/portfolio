import { useContext, useState } from "react";
import { createContext } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa6";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { PL, GB } from "country-flag-icons/react/3x2";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showLang, setShowLang] = useState("ENG");
  const icons = {
    closeCross: <ImCross />,
    faBars: <FaBars />,
    faGithub: <FaGithub />,
    faTwitter: <FaTwitter />,
    FlagPL: <PL />,
    FlagGB: <GB />,
  };
  return (
    <GlobalContext.Provider
      value={{
        showNavbar,
        setShowNavbar,
        showLang,
        setShowLang,
        icons,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
