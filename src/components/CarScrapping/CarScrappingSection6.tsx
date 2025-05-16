import { carScrappingSection6Data } from "../../static/CarScrappingData/carScrappingSection6Data";

const CarScrappingSection6 = () => {
  return (
    <div className="flex justify-center w-full my-16">
      <div className="flex flex-col items-center w-[95%] 2xl:w-[75%]">
        <div className="text-2xl lg:text-4xl font-montserrat font-semibold tracking-wide text-center">
          {carScrappingSection6Data?.heading}
        </div>

        <div className="flex flex-wrap mt-8 justify-around w-full space-y-5 lg:space-y-0">
          <div className="flex flex-col space-y-5">
            {carScrappingSection6Data?.data?.map((item, index) => (
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
          <img
            src={carScrappingSection6Data?.image}
            alt="Car Scrapping Image"
            className="w-64 h-64 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CarScrappingSection6;