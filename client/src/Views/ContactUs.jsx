import React from "react";

// Components
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import ContactUSCard from "../Components/ContactUSCard";
import Footer from "../Components/Footer";

// Lucide Icons
import { Phone, Mail, MessageSquare } from "lucide-react";

function ContactUs() {
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
          <p className="text-2xl font-semibold tracking-wider my-5">Get in Touch</p>

          {/* Sub Text */}
          <p className="font-light mt-2 text-gray-700">
            We’re committed to assisting you anytime, day or night — every
            request counts. Whether you’re a donor or someone in need, your
            concerns are our top priority.
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
              title="Phone Support"
              info="Speak directly with our support team."
              mobile="+91 1234567890"
              action="24/7 Available"
              btntext="Call Now"
              btnbgcolor="bg-cyan-300"
            />

            <ContactUSCard
              className="bg-red-300"
              Icon={Mail}
              title="Email Support"
              info="Send us detailed queries."
              mobile="support@blooddonor.in"
              action="Response in 2 hours"
              btntext="Send Email"
              btnbgcolor="bg-red-300"
            />

            <ContactUSCard
              className="bg-green-300"
              Icon={MessageSquare}
              title="WhatsApp"
              info="Quick support via WhatsApp."
              mobile="+91 9970714597"
              action="Business hours"
              btntext="Message"
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
