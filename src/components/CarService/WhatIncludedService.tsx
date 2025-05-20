import { whatIncludedServiceData } from "../../static/CarService/whatIncludedServiceData";

const WhatIncludedService = () => {
  return (
    <div className="mt-16 w-full flex flex-col items-center justify-center font-montserrat mb-10">
      <div className="w-[80%] xl:w-[65%] flex flex-col items-center">
        <div className="text-[#ed1c24] font-roboto text-lg font-bold text-center">
          //&nbsp;&nbsp;&nbsp;&nbsp;{whatIncludedServiceData?.title}
          &nbsp;&nbsp;&nbsp;&nbsp;//
        </div>
        <div className="text-2xl lg:text-4xl font-semibold mt-4 font-montserrat mb-10 text-center">
          {whatIncludedServiceData?.heading}
        </div>

        <div className="grid md:grid-cols-2 gap-2 flex-wrap justify-center">
          {whatIncludedServiceData?.data?.map((item, index) => (
            <div
              className="flex flex-col rounded-lg border-[1px] border-[#b3b9c1] h-fit"
              key={index}
            >
              <div className="bg-[#fefeff] py-2.5 px-5 rounded-lg">
                <div className="font-bold font-montserrat text-[#ed1c24]">{item?.heading}</div>
              </div>
              <div className="flex flex-col py-2.5 px-5 bg-[#f8f9fa] rounded-b-lg w-full border-t-[1px] border-[#e4e5e7] h-full">
                <div className="font-montserrat text-sm font-light tracking-wide">
                  {item?.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIncludedService;
