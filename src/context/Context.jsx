import { useContext, useState } from "react";
import { createContext } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa6";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showLang, setShowLang] = useState("ENG");
  return (
    <GlobalContext.Provider
      value={{
        showNavbar,
        setShowNavbar,
        showLang,
        setShowLang,
        closeCross: <ImCross />,
        faBars: <FaBars />,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
