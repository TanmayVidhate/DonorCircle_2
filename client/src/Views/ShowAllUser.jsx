import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import axios from "axios";

//components import
import Navbar from "../Components/Navbar.jsx";
import Cards from "../Components/Cards.jsx";
import SearchBar from "../Components/SearchBar.jsx";

function ShowAllUser() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const [searchval, setSearchval] = useState(""); //search bar value

  const [Storeobje, setStoreobject] = useState("");

  const [cardshow, setCardshow] = useState("");

  const loadUserData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/Users/`
      );
      toast.dismiss();
      toast.success("Data fetch 👍");
      // console.log(response?.data)
      setUsers(response?.data?.data);
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

  const showCards = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/Users/`
      );
      // toast.dismiss();
      // toast.success("Data fetch 👍");
      // console.log("res==", response?.data.data);
      // setUsers(response?.data?.data);
      const cardshow = response.data.data.filter((userDatas) => {
        return userDatas === Storeobje;
      });

      // console.log("uu=",cardshow)

      setCardshow(Storeobje);
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    showCards();
  }, [Storeobje]);

  // console.log("cardshow==", cardshow);
  // console.log("searchval==",searchval)
  return (
    <>
      <div className="flex flex-col  bg-[#ffd6a5]  w-screen  min-h-screen ">
        <Navbar />

        <div className="flex-1 grid place-items-center">
          <div className="mt-16   mb-5 lg:mt-14  w-full">
            <div className="w-[90%] sm:w-full md:w-[100%] lg:w-[100%] m-auto">
              <SearchBar
                searchval={searchval}
                setSearchval={setSearchval}
                Storeobje={Storeobje}
                setStoreobject={setStoreobject}
              />
            </div>
          </div>
          <div className=" rounded-lg bg-white  w-5/6 p-3 md:w-4/5  lg:w-3/5 ">
            <div className="w-full h-[550px] overflow-y-auto scrollbar-hide ">
              <div className="w-full flex flex-col justify-center items-center sm:flex sm:justify-center sm:items-center  sm:flex-wrap lg:flex lg:flex-row">
                {(cardshow.length > 0 && searchval ? cardshow : users).map(
                  (user, i) => {
                    const { name, email, other_info } = user;
                    const { mobile_no, blood_group, address, age } = other_info?.[0] || {};
                    const { userpro } = other_info?.[1] || {};

                    if (other_info?.length) {
                      return (
                        <Cards
                          profileimg = {userpro}
                          key={i}
                          name={name}
                          email={email}
                          mobile_no={mobile_no}
                          blood_group={blood_group}
                          address={address}
                          age={age}
                        />
                      );
                    }

                    return (
                      <Cards
                        key={i}
                        name={name}
                        message="Please Add User's Other Info"
                      />
                    );
                  }
                )}

                {/* {users.map((user, i) => {
                  const { name, email, other_info } = user;
                  const { mobile_no, blood_group, address, age } =
                    other_info?.[0] || {};
                  // console.log("tt=", other_info?.length)
                  if (other_info?.length) {
                    return (
                      <Cards
                        name={name}
                        email={email}
                        mobile_no={mobile_no}
                        blood_group={blood_group}
                        address={address}
                        age={age}
                        key={i}
                      />
                    );
                  } else {
                    return (
                      <Cards
                        name={name}
                        key={i}
                        message="Please Add User's Other Info"
                      />
                    );
                  }
                })} */}
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default ShowAllUser;
