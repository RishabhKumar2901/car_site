import { useState } from "react";
import plus_icon from "../assets/plus_icon.svg";
import minus_icon from "../assets/minus_icon.svg";
import { frequentlyAskedQuestionsData } from "../static/frequentlyAskedQuestionsData";

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-24 w-full flex flex-col items-center justify-center">
      <div className="w-[95%] lg:w-[70%]">
        <div className="text-[#ed1c24] font-roboto text-lg font-bold">
          //&nbsp;&nbsp;&nbsp;&nbsp;Frequently Asked
          Questions&nbsp;&nbsp;&nbsp;&nbsp;//
        </div>
        <div className="text-4xl font-semibold mt-4 font-montserrat mb-10">
          Just Find Your Answers Below
        </div>

        {frequentlyAskedQuestionsData?.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div className=" bg-[#fefeff]">
              <div
                className={`flex justify-between py-3 px-6 mt-6 items-center cursor-pointer transition-all duration-300 ${
                  isOpen ? "bg-[#232223]" : "bg-[#fefeff]"
                }`}
                onClick={() => toggleFAQ(index)}
                key={index}
              >
                <div
                  className={`text-base font-semibold ${
                    isOpen ? "text-[#fefeff]" : "text-[#232223]"
                  }`}
                >
                  {item?.question}
                </div>
                <img
                  src={isOpen ? minus_icon : plus_icon}
                  alt="Toggle"
                  className="w-8 h-8 bg-[#ed1d25] p-2 rounded-full"
                />
              </div>

              {isOpen && (
                <div className="text-[#686868] font-normal text-base mt-4 py-4 px-10 leading-[2rem] tracking-wide">
                  {item?.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
