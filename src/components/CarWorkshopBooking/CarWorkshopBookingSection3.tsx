import { useState } from "react";
import { carWorkshopBookingSection3Data } from "../../static/CarWorkshopBookingData/carWorkshopBookingSection3Data";

const CarWorkshopBookingSection3 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-3 pb-20 mb-2 w-full flex flex-col items-center justify-center bg-[#fefefe]">
      <div className="w-[95%] lg:w-[70%]">
        <div className="text-[1.625rem] font-semibold w-full mt-8 tracking-wider text-[#343a41]">
          Frequently Asked Question
        </div>
        <div className="bg-[#FF5757] h-0.5 w-1/12 mt-3"></div>

        <div className="grid gap-3 mt-6">
          {carWorkshopBookingSection3Data?.map((item: any, index: any) => {
            const isOpen = openIndex === index;

            return (
              <div
                className="border-2 border-[#e6e7e6] py-2.5 px-5"
                key={index}
              >
                <div
                  className="flex justify-between items-center cursor-pointer transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                  key={index}
                >
                  <div className="text-[0.813rem] font-semibold font-montserrat text-[#232223]">
                    {item?.question}
                  </div>
                  <div
                    className={`transform transition-transform duration-300 bg-[#fce7eb] p-2 rounded-full ${
                      isOpen ? "rotate-90" : "-rotate-90"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
                        stroke="#ff6161"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>
                </div>

                {isOpen && (
                  <div className="text-[#686868] font-normal font-montserrat text-[0.813rem] mt-4">
                    {item?.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarWorkshopBookingSection3;
