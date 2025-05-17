import { carWorkshopBookingSection2Data } from "../../static/CarWorkshopBookingData/carWorkshopBookingSection2Data";

const CarWorkshopBookingSection2 = () => {
  return (
    <div className="w-full flex flex-col items-center lg:pl-3 mb-2 lg:mt-0 px-2 pt-5 pb-10 bg-[#fefefe]">
      <div className="w-full sm:w-[95%]">
        <div className="text-[1.625rem] font-semibold w-full mt-8 tracking-wider">
          {carWorkshopBookingSection2Data?.heading}
        </div>
        <div className="bg-[#FF5757] h-0.5 w-1/12 mt-3"></div>
        <div className="text-sm font-normal text-[#777] w-full tracking-wider mt-4">
          {carWorkshopBookingSection2Data?.subheading}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 my-6">
          {carWorkshopBookingSection2Data?.workshop?.map(
            (item: any, index: any) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start px-3"
              >
                <div className="w-full flex justify-center">
                  <img
                    src={item?.imageUrl}
                    alt={`Service${index}`}
                    className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-md pointer-events-none"
                  />
                </div>
                <div className="text-[#212428] text-sm sm:text-base font-semibold mt-3 text-center">
                  {item?.serviceName}
                </div>
                <div className="text-[#4c4c4c] text-xs sm:text-sm font-normal mt-2 text-center tracking-widest">
                  {item?.desription}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CarWorkshopBookingSection2;