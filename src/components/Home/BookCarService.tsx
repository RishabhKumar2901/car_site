import { useState } from "react";
import ImageSlider from "../ImageSlider";
import { imageSliderData } from "../../static/imageSliderData";
import { parseFormattedText } from "../../utils/parseFormattedText";
import { bookCarServiceData } from "../../static/HomeData/bookCarServiceData";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const BookCarService = () => {
  const [car, setCar] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState<{ car?: string; mobile?: string }>({});
  const selectedCity = useSelector(
    (state: RootState) => state?.city?.selectedCity
  );

  const handleSubmit = () => {
    const newErrors: { car?: string; mobile?: string } = {};

    if (!car.trim()) newErrors.car = "Car is required.";
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(mobile)) {
      newErrors.mobile = "Enter a valid 10 digit mobile number.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Selected Car:", car);
      console.log("Mobile Number:", mobile);
    }
  };

  return (
    <div className="pt-32 font-montserrat flex flex-col items-center justify-center lg:flex-row lg:justify-center">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 lg:pl-10">
        <div className="text-[2rem] font-bold leading-10">
          Experience Premier <br />
          Car Care Services in <br />
          <span className="text-[#ed1c24]">{selectedCity}</span>{" "}
        </div>

        <input
          className={`border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full max-w-xs lg:max-w-md ${
            errors.car ? "border-red-500" : ""
          }`}
          placeholder="Select Your Car"
          value={car}
          onChange={(e) => {
            setCar(e.target.value);
            if (errors.car) setErrors((prev) => ({ ...prev, car: undefined }));
          }}
        />
        {errors.car && (
          <span className="text-red-500 text-sm mt-1 ml-5">{errors.car}</span>
        )}

        <input
          className={`border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full ${
            errors.mobile ? "border-red-500" : ""
          }`}
          placeholder="Enter Your Mobile"
          value={mobile}
          onChange={(e) => {
            if (!/^\d*$/.test(e.target.value)) return;
            setMobile(e.target.value);
            if (errors.mobile) setErrors((prev) => ({ ...prev, mobile: undefined }));
          }}
        />
        {errors.mobile && (
          <span className="text-red-500 text-sm mt-1 ml-5">
            {errors.mobile}
          </span>
        )}

        {/* <div className="flex flex-col lg:flex-row lg:space-x-2 w-full max-w-xs lg:max-w-md">
          <input
            className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full"
            placeholder="Enter Your Mobile"
          />
          <input
            className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full"
            placeholder="Select City"
          />
        </div> */}

        <button
          className="border-[1px] rounded-full py-4 px-10 mt-4 bg-[#ed1d25] text-[#fefafa] font-bold"
          onClick={handleSubmit}
        >
          Check Price
        </button>

        <div className="mt-4">
          {parseFormattedText({ text: bookCarServiceData?.dicount })}
        </div>
      </div>

      <div className="mt-2 xl:mt-0 w-full lg:max-w-3xl xl:max-w-4xl order-1 lg:order-2 mb-10 lg:mb-0 px-2">
        <ImageSlider imageData={imageSliderData?.bookCarServiceData} />
      </div>
    </div>
  );
};

export default BookCarService;