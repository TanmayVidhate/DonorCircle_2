import { useTranslation } from "react-i18next";

function Translate() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang); // optional (remember language)
  };

  return (
    <select
      className=" w-[90px]  py-2 rounded cursor-pointer bg-[#f7c789] text-white"
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="mr">मराठी</option>
      <option value="hi">हिंदी</option>
    </select>
  );
}

export default Translate;
