import { useState } from "react";

//Components Import
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

//Translation
import { useTranslation } from "react-i18next";



function FAQ() {
  const { t, i18n } = useTranslation();

  const faqs = [
  {
    question: t(`${"what_is_donorCircle?"}`) ,
    answer: t(`${"donorCircle_helps"}`)
  },
  {
    question: t(`${"is_my_data"}`),
    answer: t(`${"yes_your"}`) ,
  },
  {
    question: t(`${"what_blood"}`) ,
    answer:t(`${"all_major"}`) ,
  },
  {
    question: t(`${"is_donorcircle"}`),
    answer:t(`${"yes_donor"}`),
  },
];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#ffd6a5] xl:h-screen">
      <Navbar />

      <div className="grid flex-1 mt-6 place-items-center">
        <div className="p-4 bg-white border rounded-lg mt-28 mb-16 max-w-[95%] min-h-max sm:w-3/4 sm:px-5 lg:w-4/5 lg:py-5 lg:mt-24 lg:mb-24 2xl:w-3/5">
          <div className="w-full sm:p-5 lg:flex lg:h-[65vh]">
            {/* First div */}
            {/* <div className="w-full p-1 mt-2 sm:py-7 md:px-4 lg:w-4/6 xl:w-5/6 xl:h-5/6 "> */}
            <div className="w-full h-[450px] overflow-y-auto scrollbar-hide ">
                <h2 className="text-2xl font-bold mb-6">
                  {t(`${"frequently_asked_questions"}`)}
                </h2>
              <div className="max-w-2xl mx-auto mt-10 w-full p-2">

                {faqs.map((faq, index) => (
                  <div key={index} className="border rounded mb-3">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex justify-between items-center p-4 font-medium"
                    >
                      {faq.question}
                      <span>{activeIndex === index ? "-" : "+"}</span>
                    </button>

                    {activeIndex === index && (
                      <div className="p-4 text-gray-600 border-t">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FAQ;
