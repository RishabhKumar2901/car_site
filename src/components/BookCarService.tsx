import BookCarServiceSlider from "./BookCarServiceSlider";

const BookCarService = () => {
  return (
    <div className="pt-32 font-montserrat flex justify-center">
      <div className="flex flex-col">
        <div className="text-[2rem] font-bold">
          Book the Best{" "}
          <span className="text-[#ed1c24]">
            Car
            <br /> Service
          </span>{" "}
          Near You
        </div>
        <input
          className="border-[1px] rounded-full py-5 px-6 mt-2 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium"
          placeholder="Select Your Car"
        />
        <div className="flex mt-4 space-x-2">
          <input
            className="border-[1px] rounded-full py-5 px-6 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium"
            placeholder="Enter Your Mobile"
          />
          <input
            className="border-[1px] rounded-full py-5 px-6 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium"
            placeholder="Select City"
          />
        </div>
        <button className="border-[1px] rounded-full p-4 w-40 mt-4 bg-[#ed1d25] text-[#fefafa] font-bold">
          Get Quote
        </button>
      </div>
      <BookCarServiceSlider />
    </div>
  );
};

export default BookCarService;
