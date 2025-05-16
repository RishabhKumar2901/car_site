import { carScrappingSection4Data } from "../../static/CarScrappingData/carScrappingSection4Data";
import { parseFormattedText } from "../../utils/parseFormattedText";

const CarScrappingSection4 = () => {
  return (
    <div className="flex justify-center w-full mt-6">
      <div className="flex flex-col items-center w-[95%] 2xl:w-[75%]">
        {carScrappingSection4Data?.questions?.map((item, index) => (
          <div
            className={`flex items-center gap-6 w-full mt-10 ${
              index % 2 == 0 ? "flex-col-reverse lg:flex-row-reverse" : "flex-col lg:flex-row"
            }`}
            key={index}
          >
            <img
              src={item?.image}
              alt="Car Scrapping Image"
              className="lg:w-[35.813rem] lg:h-[20.144rem] rounded-xl"
            />
            <div className="flex flex-col w-full lg:w-10/12 pt-5 pb-7 px-4 lg:px-7 text-left h-fit space-y-5">
            <div className="text-2xl lg:text-4xl text-[#ed1d25] font-montserrat font-semibold leading-[3rem] tracking-wide">
              {item?.heading}
            </div>
            <div className="text-sm text-[#777] font-normal font-montserrat leading-[1.7rem]">
              {item?.text}
            </div>
            </div>
          </div>
        ))}
        
        <div className="text-2xl lg:text-4xl font-montserrat font-semibold tracking-wide mt-20 text-center">
              {carScrappingSection4Data?.benifits?.heading}
            </div>

            <div className="flex flex-wrap mt-8 justify-around items-center w-full space-y-5 lg:space-y-0">
            <div className="text-sm text-[#777] font-normal font-montserrat leading-[1.7rem]">
              {parseFormattedText({ text: carScrappingSection4Data?.benifits?.text, margin: "mb-2"})}
            </div>
            <img
              src={carScrappingSection4Data?.benifits?.image}
              alt="Car Scrapping Image"
              className="w-96 h-96 lg:w-[22.289rem] lg:h-[22.289rem] rounded-xl"
            />
            </div>
      </div>
    </div>
  );
};

export default CarScrappingSection4;