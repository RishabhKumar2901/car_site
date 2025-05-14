import ImageSlider from "./ImageSlider";
import { imageSliderData } from "../static/imageSliderData";

const BookEVService = () => {
  return (
    <div className="pt-32 font-montserrat flex flex-col items-center justify-center lg:flex-row lg:justify-center">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 lg:pl-10">
        <div className="text-[2rem] font-bold">
          Future of Fleet
          <br />
          Management With
          <br />
          <span className="text-[#52ae48]">
            VehicleCare IOT-Based
            <br /> Maintenance
          </span>{" "}
          Service
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-2 w-full max-w-xs lg:max-w-md">
          <input
            className="border-[1px] rounded-full py-5 px-6 mt-8 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full"
            placeholder="Enter Your Mobile"
          />
          <input
            className="border-[1px] rounded-full py-5 px-6 mt-8 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full"
            placeholder="Select City"
          />
        </div>

        <button className="border-[1px] rounded-full py-4 px-10 mt-8 bg-[#52ae48] text-[#fefafa] font-bold">
          Book Service
        </button>
      </div>

      <div className="mt-2 xl:mt-0 w-full lg:max-w-3xl xl:max-w-4xl order-1 lg:order-2 mb-10 lg:mb-0 px-2">
        <ImageSlider imageData={imageSliderData?.evData} />
      </div>
    </div>
  );
};

export default BookEVService;
