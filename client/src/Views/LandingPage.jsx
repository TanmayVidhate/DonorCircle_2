import React from "react";

import img from "../assets/Landing_image/landing.jpg";

import { useNavigate } from "react-router";

//Components Import
import Image from "../Components/Image";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import Footer from "../Components/Footer";

//Translation
import { useTranslation } from 'react-i18next';

function LandingPage() {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-[#ffd6a5] xl:h-screen">
        <Navbar />

        <div className="grid flex-1 mt-6 place-items-center">
          <div
            className="p-4 bg-white border rounded-lg mt-28 mb-16 max-w-[95%] min-h-max sm:w-3/4 sm:px-5 lg:w-4/5 lg:py-5 lg:mt-24 lg:mb-24 2xl:w-3/5"
          >
            <div className="w-full sm:p-5 lg:flex lg:h-[65vh]">
              
              {/* First div */}
              <div className="w-full p-1 mt-2 sm:py-7 md:px-4 lg:w-4/6 xl:w-5/6 xl:h-5/6 ">
                
                <div className="text-[#FBA943] text-4xl font-bold uppercase mx-5 tracking-wide sm:mx-1 lg:mt-10">
                 {t(`${'donor_circle'}`)}
                </div>

                <div className="mx-5 my-4 tracking-wide text-gray-700 sm:mx-1 lg:text-base 2xl:w-3/4">
                  {t(`${"accidents"}`)}
                  <br />
                  <span className="text-[rgb(251,169,67)] text-2xl font-bold opacity-0 animate-fadeIn mt-5">
                    {t(`${'join_donorcircle'}`)}
                  </span>
                </div>

                <Button
                  name={t(`${"sign_up"}`)}
                  className="
                    ml-5 bg-[#FBA943] text-white px-6 py-3 rounded-lg
                    transition-all duration-300 hover:scale-105 
                    hover:shadow-lg hover:shadow-blue-400/50
                    sm:py-2 sm:mx-1 sm:w-full
                    lg:w-1/2
                  "
                  hover={true}
                  onClick={() => navigate("/signup")}
                />
              </div>

              {/* second div - Image */}
              <div className="grid w-full my-5 order place-items-center">
                <Image
                  img_url={img}
                  className="object-scale-down   md:max-w-[450px] lg:max-w-full lg:h-full"
                />
              </div>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
