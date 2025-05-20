import { useState } from "react";
import plus_icon from "../../assets/plus_icon.svg";
import minus_icon from "../../assets/minus_icon.svg";

const FAQonNearByCarService = ({ questions }: { questions: any[] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="text-2xl lg:text-[1.75rem] font-semibold mt-4 font-montserrat mb-10">
        Frequently Asked Questions
      </div>

      {questions?.map((item: any, index: any) => {
        const isOpen = openIndex === index;

        return (
          <div className=" bg-[#fefeff]" key={index}>
            <div
              className={`flex justify-between py-3 px-6 mt-2 items-center cursor-pointer transition-all duration-300 ${
                isOpen ? "bg-[#232223]" : "bg-[#fefeff]"
              }`}
              onClick={() => toggleFAQ(index)}
              key={index}
            >
              <div
                className={`text-sm lg:text-base font-semibold font-montserrat ${
                  isOpen ? "text-[#fefeff]" : "text-[#232223]"
                }`}
              >
                {item?.question}
              </div>
              <img
                src={isOpen ? minus_icon : plus_icon}
                alt="Toggle"
                className="w-6 h-6 lg:w-8 lg:h-8 bg-[#ed1d25] p-2 rounded-full"
              />
            </div>

            {isOpen && (
              <div className="text-[#686868] font-normal font-montserrat text-sm lg:text-base mt-4 py-4 px-10 leading-[2rem] tracking-wide">
                {item?.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQonNearByCarService;