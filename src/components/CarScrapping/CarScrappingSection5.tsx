import { carScrappingSection5Data } from "../../static/CarScrappingData/carScrappingSection5Data";

const CarScrappingSection5 = () => {
  return (
    <div className="flex justify-center w-full bg-[#f5f4f4] py-10 mt-16">
      <div className="flex flex-col items-center w-[95%] 2xl:w-[75%]">
        <div className="text-2xl lg:text-4xl font-montserrat font-semibold tracking-wide text-center">
          {carScrappingSection5Data?.heading}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 space-y-3 mt-10 px-4 md:px-0">
          {carScrappingSection5Data?.data?.map((item, index) => (
            <div className="flex items-center space-x-3" key={index}>
              <img
                src={item?.image}
                alt="Free Recycle"
                className="w-[3.125rem] h-[3.125rem] rounded-xl"
              />
              <div className="text-xl text-[#777] font-normal font-montserrat leading-[1.7rem]">
                {item?.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarScrappingSection5;