import BookCarServiceSlider from "./BookCarServiceSlider";

const BookCarService = () => {
  return (
    <div className="pt-32 font-montserrat flex flex-col items-center justify-center lg:flex-row lg:justify-center">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 pl-10">
        <div className="text-[2rem] font-bold">
          Book the Best{" "}
          <span className="text-[#ed1c24]">
            Car
            <br /> Service
          </span>{" "}
          Near You
        </div>
        
        <input
          className="border-[1px] rounded-full py-5 px-6 mt-2 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full max-w-xs lg:max-w-md"
          placeholder="Select Your Car"
        />
        
        <div className="flex flex-col lg:flex-row lg:space-x-2 w-full max-w-xs lg:max-w-md">
          <input
            className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full"
            placeholder="Enter Your Mobile"
          />
          <input
            className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full"
            placeholder="Select City"
          />
        </div>
        
        <button className="border-[1px] rounded-full p-4 w-40 mt-4 bg-[#ed1d25] text-[#fefafa] font-bold">
          Get Quote
        </button>
      </div>

      <div className="mt-2 xl:mt-0 w-full lg:max-w-3xl xl:max-w-4xl order-1 lg:order-2 mb-10 lg:mb-0">
        <BookCarServiceSlider />
      </div>
    </div>
  );
};

export default BookCarService;