import { useContext, useState } from "react";
import { createContext } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa6";
import {
  FaGithub,
  FaTwitter,
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaList,
  FaTable,
} from "react-icons/fa";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showLang, setShowLang] = useState("ENG");
  const [projectsLayout, setProjectsLayout] = useState("ENG");
  const icons = {
    closeCross: <ImCross />,
    faBars: <FaBars />,
    faGithub: <FaGithub />,
    faTwitter: <FaTwitter />,
    faADD: <FaAngleDoubleDown />,
    faADU: <FaAngleDoubleUp />,
    faList: <FaList />,
    faTable: <FaTable />,
  };
  return (
    <GlobalContext.Provider
      value={{
        showNavbar,
        setShowNavbar,
        showLang,
        setShowLang,
        projectsLayout,
        setProjectsLayout,
        icons,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
