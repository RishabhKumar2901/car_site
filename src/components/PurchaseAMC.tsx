import ImageSlider from "./ImageSlider";
import { imageSliderData } from "../static/imageSliderData";
import { useState } from "react";
import { amcData } from "../static/amcData";

const PurchaseAMC = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    car: "",
    year: "",
    mobile: "",
    registration: "",
    selectedVehicle: amcData?.vehicleTypes?.[0]?.label || "",
    selectedPrice: amcData?.vehicleTypes?.[0]?.price || 0,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if ((name === "mobile" || name === "year") && !/^\d*$/.test(value)) return;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleVehicleSelect = (label: string, price: number) => {
    setFormData((prev: any) => ({
      ...prev,
      selectedVehicle: label,
      selectedPrice: price,
    }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.email) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.car) newErrors.car = "Please specify your car model";
    if (!formData.year) newErrors.year = "Please enter year of registration";

    if (!formData.mobile) {
      newErrors.mobile = "Please enter your phone number";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    if (!formData.registration)
      newErrors.registration = "Please enter car registration";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    console.log("Form Data:", formData);
  };

  return (
    <div className="pt-32 font-montserrat flex flex-col items-center justify-center lg:flex-row lg:justify-center">
      <div className="flex flex-col items-center lg:items-start lg:text-left order-2 lg:order-1 lg:pl-10">
        <div className="text-[2rem] font-extrabold">
          Purchase <span className="text-[#ed1c24]">AMC</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-2 w-full max-w-xs lg:max-w-md">
          <div className="w-full">
            <input
              className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder:text-sm placeholder:font-medium w-full"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="text-red-500 text-xs ml-5 mt-1">
                {errors.name}
              </div>
            )}
          </div>
          <div className="w-full">
            <input
              className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder:text-sm placeholder:font-medium w-full"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-red-500 text-xs ml-5 mt-1">
                {errors.email}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-2 w-full max-w-xs lg:max-w-md">
          <div className="w-full">
            <input
              className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder:text-sm placeholder:font-medium w-full"
              placeholder="Select Your Car"
              name="car"
              value={formData.car}
              onChange={handleChange}
            />
            {errors.car && (
              <div className="text-red-500 text-xs ml-5 mt-1">
                {errors.car}
              </div>
            )}
          </div>
          <div className="w-full">
            <input
              className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder:text-sm placeholder:font-medium w-full"
              placeholder="Enter Year"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
            {errors.year && (
              <div className="text-red-500 text-xs ml-5 mt-1">
                {errors.year}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-2 w-full max-w-xs lg:max-w-md">
          <div className="w-full">
            <input
              className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder:text-sm placeholder:font-medium w-full"
              placeholder="Enter Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && (
              <div className="text-red-500 text-xs ml-5 mt-1">
                {errors.mobile}
              </div>
            )}
          </div>
          <div className="w-full">
            <input
              className="border-[1px] rounded-full py-5 px-6 mt-4 shadow-md border-gray-300 placeholder:text-sm placeholder:font-medium w-full"
              placeholder="Enter Car Registration"
              name="registration"
              value={formData.registration}
              onChange={handleChange}
            />
            {errors.registration && (
              <div className="text-red-500 text-xs ml-5 mt-1">
                {errors.registration}
              </div>
            )}
          </div>
        </div>

        <div className="text-[0.9rem] font-bold text-[#555] mt-8">
          Select Vehicle Type
        </div>
        <div className="mt-4 mr-5 w-full flex flex-wrap gap-y-4">
          {amcData?.vehicleTypes?.map((option) => (
            <div
              key={option?.label}
              className="flex items-center cursor-pointer mr-4"
            >
              <input
                type="radio"
                id={option?.label}
                name="vehicleType"
                className="w-4 h-4 text-[#ed1d25] bg-gray-100 border-gray-300"
                onChange={() => handleVehicleSelect(option.label, option.price)}
                checked={formData.selectedVehicle === option.label}
              />
              <label htmlFor={option?.label} className="ms-2 text-lg font-bold">
                {option?.label}
              </label>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="border-[1px] rounded-full p-4 w-40 mt-6 bg-[#ed1d25] text-[#fefafa] font-bold"
        >
          Pay ₹{formData.selectedPrice ?? "--"}
        </button>
      </div>

      <div className="mt-2 xl:mt-0 w-full lg:max-w-3xl xl:max-w-4xl order-1 lg:order-2 mb-10 lg:mb-0 px-2">
        <ImageSlider
          imageData={imageSliderData?.amcData}
          imgHeight="full"
          navigation="false"
        />
      </div>
    </div>
  );
};

export default PurchaseAMC;