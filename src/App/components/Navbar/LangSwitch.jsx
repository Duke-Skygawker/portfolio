import { useGlobalContext } from "../../../context/Context";
import { PL, GB } from "country-flag-icons/react/3x2";
const LangSwitch = () => {
  const { showLang, setShowLang } = useGlobalContext();
  return (
    <div className="lang-buttons">
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
      <button onClick={() => setShowLang("PL")}>
        <i className="country-flag">
          {<PL title={showLang === "ENG" ? "Polish Flag" : "Flaga Polski"} />}
        </i>
      </button>
    </div>
  );
};
export default LangSwitch;
