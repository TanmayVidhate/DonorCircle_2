import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import axios from "axios";

//components import
import Navbar from "../Components/Navbar.jsx";
import Cards from "../Components/Cards.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import SkeletonCard from "../Components/SkeletonCard.jsx";

function ShowAllUser() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [searchval, setSearchval] = useState(""); //search bar value
  const [searchobject, setSearchObject] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [isloading, setIsloading] = useState(true);

  const loadUserData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/Users/`
      );
      toast.dismiss();
      toast.success("Data fetch 👍");
      // console.log(response?.data)
      setUsers(response?.data?.data);
      setIsloading(false);
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message || error?.message);
    }
  };
  const filterRecord = () =>{
        let filterResult = users?.filter((user)=>{
        return user?.other_info[0]?.blood_group === searchval.toUpperCase();
      })

    if(filterResult.length === 0){
      setNotFound(true)
    }
    else{
      setSearchObject(filterResult)
      setNotFound(false);
    }
  }
    
  useEffect(() => {
    loadUserData();
  }, []);

  console.log("searchval==",searchval)
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
                filterRecord = {filterRecord}
              />
            </div>
          </div>
          <div className=" rounded-lg bg-white  w-5/6 p-3 md:w-4/5  lg:w-3/5 ">
            <div className="w-full h-[550px] overflow-y-auto scrollbar-hide ">
              <div className="w-full flex flex-col justify-center items-center sm:flex sm:justify-center sm:items-center  sm:flex-wrap lg:flex lg:flex-row">
                {
                  isloading ? (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <SkeletonCard key={i} />
                    ))}
                  </>
                  ) 
                  : 
                  (notFound && searchval) ? 
                  <p className="text-gray-500 text-lg">Data not Found...</p> 
                  :
                  (
                    (searchobject?.length > 0 && searchval ? searchobject : users).map(
                      (user, i) => {
                        const { name, email, other_info } = user;
                        const { userpro, mobile_no, blood_group, address, age } =
                          other_info?.[0] || {};

                        return other_info?.length ? (
                          <Cards
                            key={email}   // ✅ better key
                            profileimg={userpro}
                            name={name}
                            email={email}
                            mobile_no={mobile_no}
                            blood_group={blood_group}
                            address={address}
                            age={age}
                          />
                        ) : (
                          <Cards
                            key={email}
                            name={name}
                            email={email}
                            message="Please Add User's Other Info"
                          />
                        );})
                  )
                }
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
