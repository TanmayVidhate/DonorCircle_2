import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import {UserContext} from "../Context/UserContext.jsx";

//import components
import Button from "./Button";
import FilterUsers from "./FilterUsers"

//Translation
import { useTranslation } from 'react-i18next';

function SearchBar({ searchval, setSearchval, filterRecord }) {

  const { role, setRole } = useContext(UserContext);

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="w-full flex justify-center px-3 mt-6 md:w-[90%] md:m-auto md:mt-10  lg:mt-5  ">
        <div className="w-full max-w-lg flex items-center gap-3 bg-white border rounded-xl shadow-md p-3   ">

          <input
            type="text"
            value={searchval}
            onChange={(e) => {
              setSearchval(e.target.value);
            }}
            placeholder={t(`${"search_blood"}`)}
            className="flex-1 px-4 py-2 border  rounded-lg 
                       text-gray-700 w-3/6 text-sm sm:text-base
                       focus:outline-none focus:ring-0 focus:bg-transparen  "
          />
          <div className=" z-50" >
            <FilterUsers role={role} setRole={setRole} />
          </div>
          <Button
            name={t(`${"search"}`)}
            onClick={filterRecord}
            disabled={searchval === "" && true}
            className="!w-1/3  py-2 bg-[#ffd6a5] text-[#c2410c] rounded-lg 
                       text-sm sm:text-base font-semibold
                       hover:bg-[#f7c789] transition-all duration-200"
          >

          </Button>

        </div>
      </div>

      <Toaster />
    </>
  );
}

export default SearchBar;
