import React from "react";

// Components
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import ContactUSCard from "../Components/ContactUSCard";
import Footer from "../Components/Footer";

// Lucide Icons
import { Phone, Mail, MessageSquare } from "lucide-react";

//Translation
import { useTranslation } from 'react-i18next';



function ContactUs() {

  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col  min-h-screen bg-[#ffd6a5]">
      <Navbar />

      {/* Outer Container */}
      <div className="flex justify-center items-center flex-1">
        <div
          className="p-4 bg-white border rounded-lg mt-32 mb-16 max-w-[95%] min-h-max sm:w-3/4 sm:px-5 lg:w-4/5 lg:py-5 lg:mt-32 lg:mb-28 2xl:w-3/5
                    "
        >
          {/* Heading */}
          <p className="text-2xl font-semibold tracking-wider my-5">{t(`${"get_in_touch"}`)}</p>

          {/* Sub Text */}
          <p className="font-light mt-2 text-gray-700">
            {t(`${"we're"}`)}
          </p>

          {/* Cards */}
          <div
            className="
                            flex flex-col items-center gap-5 mt-6
                            lg:flex-row lg:justify-center lg:gap-2
                        "
          >
            <ContactUSCard
              className="bg-cyan-300"
              Icon={Phone}
              title={t(`${"phone_support"}`)}
              info={t(`${"speak_directly"}`)}
              mobile={t(`${"no"}`)}
              action={t(`${"24/7"}`)}
              btntext={t(`${"call_now"}`)}
              btnbgcolor="bg-cyan-300"
            />

            <ContactUSCard
              className="bg-red-300"
              Icon={Mail}
              title={t(`${"email_support"}`)}
              info={t(`${"send_us"}`)}
              mobile="support@blooddonor.in"
              action={t(`${"response_in"}`)}
              btntext={t(`${"send_em"}`)}
              btnbgcolor="bg-red-300"
            />

            <ContactUSCard
              className="bg-green-300"
              Icon={MessageSquare}
              title={t(`${"whatsapp"}`)}
              info={t(`${"quick_supp"}`)}
              mobile={t(`${"no1"}`)}
              action={t(`${"business_hours"}`)}
              btntext={t(`${"mess"}`)}
              btnbgcolor="bg-green-300"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
