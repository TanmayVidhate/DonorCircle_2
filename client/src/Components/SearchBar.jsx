import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function SearchBar({ searchval, setSearchval, Storeobje, setStoreobject }) {
  const handleSearchval = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/Users/`
      );
      console.log(response?.data.data);

      const names = response?.data.data.map((userdata) => {
        return userdata;
      });

      const resu = names.filter((name) => {
        return name.other_info?.[0]?.blood_group == searchval;
      });

      setStoreobject(resu);
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

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
            placeholder="Search blood group..."
            className="flex-1 px-4 py-2 border  rounded-lg
                       text-gray-700 w-3/6 text-sm sm:text-base
                       focus:outline-none focus:ring-0 focus:bg-transparen  "
          />

          <button
            onClick={handleSearchval}
            className="px-4 py-2 bg-[#ffd6a5] text-[#c2410c] rounded-lg 
                       text-sm sm:text-base font-semibold
                       hover:bg-[#f7c789] transition-all duration-200"
          >
            Search
          </button>

        </div>
      </div>

      <Toaster />
    </>
  );
}

export default SearchBar;
