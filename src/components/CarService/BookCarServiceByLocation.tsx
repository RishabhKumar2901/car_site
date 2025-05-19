import ImageSlider from "../ImageSlider";
import { imageSliderData } from "../../static/imageSliderData";

const BookCarServiceByLocation = () => {
  return (
    <div className="pt-32 font-montserrat flex flex-col items-center justify-center lg:flex-row lg:justify-center">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 lg:pl-10">
        <div className="text-[2rem] font-bold">
          Book the Best Car <br /> Service{" "}
          <span className="text-[#ed1c24]">In Faridabad</span>
        </div>

        <input
          className="border-[1px] rounded-full py-5 px-6 mt-2 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full max-w-xs lg:max-w-md"
          placeholder="Select Your Car"
        />

        <input
          className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full"
          placeholder="Enter Your Mobile"
        />

        <button className="border-[1px] rounded-full p-4 w-40 mt-4 bg-[#ed1d25] text-[#fefafa] font-bold">
          Get Quote
        </button>
      </div>

      <div className="mt-2 xl:mt-0 w-full lg:max-w-3xl xl:max-w-4xl order-1 lg:order-2 mb-10 lg:mb-0 px-2">
        <ImageSlider
          imageData={imageSliderData?.bookCarServiceByLocationData}
        />
      </div>
    </div>
  );
};

export default BookCarServiceByLocation;
