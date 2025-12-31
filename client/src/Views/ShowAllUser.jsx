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

  const [searchobject, setSearchObject] = useState("");

  const [cardshow, setCardshow] = useState("");

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
      setIsloading(!isloading);
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

  const searchCardsResult = async () => {
    try {
      const Users = await axios.get(
        `${import.meta.env.VITE_API_URL}/Users/`
      );
      // toast.dismiss();
      // toast.success("Search Result Get 🔍");
      // console.log("res==", response?.data.data);
      // setUsers(response?.data?.data);

      const cardshow = Users.data.data.filter((u) => {
        return u === searchobject;
      });

      // console.log("searchobject==",searchobject[0]._id)
      console.log("cardshow===",cardshow)

      setCardshow(searchobject)
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    searchCardsResult();
  }, [searchobject]);

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
                searchobject={searchobject}
                setSearchObject={setSearchObject}
                setNotFound={setNotFound}
              />
            </div>
          </div>
          <div className=" rounded-lg bg-white  w-5/6 p-3 md:w-4/5  lg:w-3/5 ">
            <div className="w-full h-[550px] overflow-y-auto scrollbar-hide ">
              <div className="w-full flex flex-col justify-center items-center sm:flex sm:justify-center sm:items-center  sm:flex-wrap lg:flex lg:flex-row">
                {isloading ? (
                  <>
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                  </>
                ) 
                : (
                  (cardshow?.length > 0 && searchval ? cardshow : users).map(
                    (user, i) => {
                      const { name, email, other_info } = user;
                      const { userpro, mobile_no, blood_group, address, age } =
                        other_info?.[0] || {};

                      if (other_info?.length) {
                        return (
                          <Cards
                            profileimg={userpro}
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
                          email={email}
                          name={name}
                          message="Please Add User's Other Info"
                        />
                      );
                    }
                  )
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
