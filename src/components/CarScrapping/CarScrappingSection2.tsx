import { carScrappingSection2Data } from "../../static/CarScrappingData/carScrappingSection2Data";

const CarScrappingSection2 = () => {
  return (
    <div className="flex justify-center w-full mt-10">
      <div className="w-2/3 flex flex-wrap gap-5 justify-center">
        {carScrappingSection2Data?.map((item, index) => (
          <div key={index} className="w-80 py-5 px-10 border-2 border-[#e7e6e7] bg-[#e9e9e8] rounded-xl flex flex-col space-y-3 justify-center hover:scale-105 transition ease-in h-fit">
            <div className="flex justify-center">
              <img
                src={item?.image}
                alt="Image"
                className="w-[6rem] h-[6rem]"
              />
            </div>
            <div className="text-xl font-montserrat font-semibold text-[#ed1d25] text-center">
              {item?.heading}
            </div>
            <div className="text-[0.938rem] font-base text-[#555]">
              {item?.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarScrappingSection2;