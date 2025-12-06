import React, { useEffect, useState } from "react";

//Components Import
import Navbar from "../Components/Navbar";
import { useParams } from "react-router";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer";

function ShowAllUserInfo() {
  const [user, setUser] = useState({});

  let { email } = useParams();
  // console.log("ShowallUser=", email)

  const getUserAllInfoByemail = async (email) => {
    toast.loading("Data is Loading ⌛...");
    try {
      toast.dismiss();
      const records = await axios.get(
        `${import.meta.env.VITE_API_URL}/Users/user/${email}`
      );
      toast.dismiss();
      toast.success("Data is Fetch 👍");
      // console.log("r==", records.data.data)

      setUser(() => records.data.data);
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getUserAllInfoByemail(email);
  }, []);

  const {
    name,
    username,
    email: userEmail,
    other_info: [{ address, age, blood_group, gender, mobile_no } = {}] = [],
  } = user || {};

  return (
    <>
      <div className="flex flex-col  min-h-screen  bg-[#ffd6a5]  ">
        <Navbar />
        <div className="flex-1 grid place-items-center">
          <div className="p-4 bg-white border rounded-lg mt-28 mb-16 max-w-[95%] min-h-max sm:w-3/4 sm:px-5 lg:w-4/5 lg:py-5 lg:mt-24 lg:mb-36 2xl:w-3/6">
            {/* card */}
            <div className="flex-1 flex justify-center items-start p-4 sm:p-6 md:p-10">
              <div className="w-full max-w-4xl bg-white  p-6 sm:p-8 md:p-10">
                {/* Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">
                  User Information
                </h1>

                {/* Always 2 Columns – Even on tiny screens */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-10">
                  {/* Label + Value */}
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                      Full Name
                    </p>
                    <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                      {name}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                      Username
                    </p>
                    <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                      {username}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                      Address
                    </p>
                    <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                      {address}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                      Email
                    </p>
                    <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                      {userEmail}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                      Age
                    </p>
                    <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                      {age} years
                    </p>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                      Blood Group
                    </p>
                    <p className="text-sm sm:text-lg md:text-xl font-bold text-red-600">
                      {blood_group}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                      Gender
                    </p>
                    <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                      {gender}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold">
                      Mobile Number
                    </p>
                    <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-900">
                      {mobile_no}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default ShowAllUserInfo;
