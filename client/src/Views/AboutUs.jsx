import React from "react";

// Import image
import img from "../assets/User_profile_update_img/about.png";

// Import Components
import Navbar from "../Components/Navbar";
import Image from "../Components/Image";
import Footer from "../Components/Footer";

function AboutUs() {


  return (
    <div className="flex flex-col min-h-screen bg-[#ffd6a5] ">
      <Navbar />

      {/* Main Container */}
      <div className="grid flex-1 mt-20 mb-5 place-items-center">
        <div
          className="p-4 bg-white border rounded-lg mt-10 mb-16 max-w-[95%] min-h-max sm:w-3/4 sm:px-5 lg:w-4/6 lg:py-5 lg:mt-10 lg:mb-24 2xl:w-3/5"
        >
          <p className="my-5 text-2xl font-semibold tracking-wider ">About Us</p>

          {/* Content Section */}
          <div className="gap-8 my-5 lg:flex lg:items-center lg:justify-center">
            
            {/* Text Content */}
            <div className="leading-relaxed text-gray-700  lg:w-3/5">
              Welcome to{" "}
              <span className="font-semibold text-red-500">DonorCircle</span> — a
              platform created to connect blood donors with those in need. We
              believe that a single donation can save multiple lives, and our
              mission is to make the process of finding and contacting donors
              simple, fast, and reliable.
              <br /><br />
              At DonorCircle, donors can easily register their details, and
              people in need can directly reach out to them without any
              middleman. We aim to build a community of responsible donors and
              create a network where help is always just a click away.
              <div className="mt-3 font-semibold text-center text-red-600">
                Together, we can make a difference and give the gift of life.
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:w-1/3 lg:h-3/4">
              <Image
                img_url={img}
                className="
                  !w-full !object-scale-down
                  sm:!object-scale-down
                  md:!object-scale-down
                  lg:!object-contain
                  max-h-[300px] lg:max-h-[450px]
                "
              />
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
