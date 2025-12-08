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

    //   console.log("names===", names);
      const resu = names.filter((name) => {  
        return name.other_info?.[0]?.blood_group == searchval;
      }
    );

    //   console.log("resu===", resu);
      setStoreobject(resu);
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

  return (
    <>
      <div className="">
        <input
          type="text"
          value={searchval}
          onChange={(e) => {
            setSearchval(e.target.value);
          }}
        />
        <button onClick={handleSearchval}>Search</button>
      </div>
      <Toaster />
    </>
  );
}

export default SearchBar;
