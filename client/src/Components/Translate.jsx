import { useTranslation } from "react-i18next";

function Translate() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang); // optional (remember language)
  };

  return (
    <select
      className="px-2  border border-transparent rounded cursor-pointer bg-[#f7c789] text-white"
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="mr">Marathi</option>
      <option value="hi">Hindi</option>
    </select>
  );
}

export default Translate;
