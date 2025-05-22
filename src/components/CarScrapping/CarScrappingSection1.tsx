import { useState } from "react";
import carScrapping_banner from "../../assets/carScrapping_banner.jpg";

const CarScrappingSection1 = () => {
  const [formData, setFormData] = useState<any>({
    car: "",
    mobile: "",
    city: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const newErrors: any = {};
    if (!formData.car) newErrors.car = "Please select your car.";
    if (!formData.mobile) {
      newErrors.mobile = "Please enter your mobile number.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }
    if (!formData.city) newErrors.city = "Please select your city.";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Data Submitted:", formData);
    }
  };

  const handleChange = (field: any, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="pt-32 pb-20 font-montserrat flex flex-col items-center justify-center lg:flex-row lg:justify-center bg-[#a7fbfe] mx-3 rounded">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 lg:pl-10">
        <div className="text-[2rem] font-bold">
          SCRAPPING OLD <br /> CAR IS <br />
          <span className="text-[#ed1c24]">Just A Call Away</span>
        </div>

        <input
          value={formData?.car}
          onChange={(e) => handleChange("car", e.target.value)}
          className="border-[1px] rounded-full py-5 px-6 mt-2 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full max-w-xs lg:max-w-md"
          placeholder="Select Your Car"
        />
        {errors?.car && (
          <p className="text-red-600 ml-5 text-sm mt-1">{errors?.car}</p>
        )}

        <div className="flex flex-col lg:flex-row lg:space-x-2 w-full max-w-xs lg:max-w-md">
          <div className="flex flex-col gap-1">
            <input
              value={formData?.mobile}
              onChange={(e) => handleChange("mobile", e.target.value)}
              className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full"
              placeholder="Enter Your Mobile"
            />
            {errors.mobile && (
              <p className="text-red-600 ml-5 text-sm mt-1">{errors?.mobile}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <input
              value={formData?.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder-gray-700 placeholder:text-sm placeholder:font-medium w-full"
              placeholder="Select City"
            />
            {errors.city && (
              <p className="text-red-600 ml-5 text-sm mt-1">{errors?.city}</p>
            )}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="border-[1px] rounded-full p-4 w-40 mt-4 bg-[#ed1d25] text-[#fefafa] font-bold"
        >
          Get Quote
        </button>
      </div>

      <div className="mt-2 xl:mt-0 w-full lg:max-w-3xl xl:max-w-4xl order-1 lg:order-2 mb-10 lg:mb-0 px-2 flex justify-center">
        <img
          src={carScrapping_banner}
          alt="Banner"
          className="w-[45.5rem] h-[27.283rem] rounded-xl"
        />
      </div>
    </div>
  );
};

export default CarScrappingSection1;
