import { useState } from "react";
import ImageSlider from "./ImageSlider";
import { imageSliderData } from "../static/imageSliderData";

const ClaimJourney = () => {
  const [car, setCar] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  const [errors, setErrors] = useState<any>({});

  const handleSubmit = () => {
    const newErrors: any = {};

    if (!car.trim()) newErrors.car = "Please select your car";
    if (!mobile.trim()) {
      newErrors.mobile = "Please enter your mobile";
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!city.trim()) newErrors.city = "Please select your city";

    setErrors(newErrors);

    if (Object.keys(newErrors)?.length === 0) {
      console.log("Form Submitted:", { car, mobile, city });
    }
  };

  return (
    <div className="pt-32 font-montserrat flex flex-col items-center justify-center lg:flex-row lg:justify-center">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 lg:pl-10">
        <div className="text-[2rem] font-bold">
          Your Car <span className="text-[#ed1c24]">Claim</span> Journey <br />{" "}
          Partner
        </div>

        <input
          value={car}
          onChange={(e) => setCar(e.target.value)}
          className="border-[1px] rounded-full py-5 px-6 mt-2 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full max-w-xs lg:max-w-md"
          placeholder="Select Your Car"
        />
        {errors?.car && (
          <p className="text-red-500 text-sm ml-5 mt-1">{errors?.car}</p>
        )}

        <div className="flex flex-col lg:flex-row lg:space-x-2 w-full max-w-xs lg:max-w-md">
          <div className="w-full">
            <input
              value={mobile}
              onChange={(e) => {
                if (!/^\d*$/.test(e.target.value)) return;
                setMobile(e.target.value);
              }}
              className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full"
              placeholder="Enter Your Mobile"
            />
            {errors?.mobile && (
              <p className="text-red-500 text-sm ml-5 mt-1">{errors?.mobile}</p>
            )}
          </div>

          <div className="w-full">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full"
              placeholder="Select City"
            />
            {errors?.city && (
              <p className="text-red-500 text-sm ml-5 mt-1">{errors?.city}</p>
            )}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="border-[1px] py-4 px-10 mt-4 bg-[#ed1d25] text-[#fefafa] font-bold"
        >
          Book Claim
        </button>
      </div>

      <div className="mt-2 xl:mt-0 w-full lg:max-w-3xl xl:max-w-4xl order-1 lg:order-2 mb-10 lg:mb-0 px-2">
        <ImageSlider
          imageData={imageSliderData?.insuranceClaimData}
          navigation="false"
        />
      </div>
    </div>
  );
};

export default ClaimJourney;
