import React from "react";

import { useTranslation } from 'react-i18next';



function Button({ name, onClick, disabled, className, hover }) {
  // alert("User clcieked")
  // console.log("dd=",onClick);
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <input
        type="submit"
        value={t(`${name}`)}
        disabled={disabled}
        className={`p-2 uppercase text-lg text-white bg-[#ffac44] ${
          hover
            ? "hover:bg-orange-300  transition-colors duration-300 ease-in-out  hover: rounded-3xl "
            : ""
        }  w-4/5 font-semibold tracking-widest ${className} 
         ${disabled ? "bg-[#e2a355] hover:bg-[#e2a355] hover:cursor-not-allowed " : "hover:cursor-pointer "} 
        `}
        onClick={onClick}

      />
    </>
  );
}

export default Button;
