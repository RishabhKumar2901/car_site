import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { rightWorkshopBookingSectionData } from "../../../static/CarWorkshopBookingData/carWorkshopBookingSection1Data/rightWorkshopBookingSectionData";

type Brand = keyof typeof rightWorkshopBookingSectionData.models;

const RightWorkshopBookingSection = () => {
  const navigate = useNavigate();

  const [brand, setBrand] = useState<Brand | "">("");
  const [model, setModel] = useState("");
  const [mobile, setMobile] = useState("");

  const [errors, setErrors] = useState({
    brand: "",
    model: "",
    mobile: "",
  });

  const validate = () => {
    const newErrors = {
      brand: brand === "" ? "Please select your brand." : "",
      model: model === "" ? "Please select your model." : "",
      mobile: !/^[6-9]\d{9}$/.test(mobile) ? "Enter a valid 10-digit mobile number." : "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Brand:", brand);
      console.log("Model:", model);
      console.log("Mobile:", mobile);
    }
  };

  return (
    <div className="w-full lg:w-2/3 flex flex-col items-center lg:pl-3 mt-6 lg:mt-0 px-2">
      <div
        className="w-full px-6 sm:px-8 pt-6 pb-12 rounded-xl"
        style={{
          boxShadow: "0px 0px 18.69px 2.31px rgba(204, 204, 223, 0.5)",
        }}
      >
        <div className="text-2xl font-semibold w-full">
          {rightWorkshopBookingSectionData?.heading1}
        </div>
        <div className="text-sm font-normal text-[#777] w-full tracking-wider">
          {rightWorkshopBookingSectionData?.subheading1}
        </div>

        <select
          className="border-2 w-full mt-3 py-2 px-4 text-sm text-[#868787] tracking-widest"
          value={brand}
          onChange={(e) => {
            const value = e.target.value as Brand;
            setBrand(value);
            setModel("");
            setErrors((prev) => ({ ...prev, brand: "" }));
          }}
        >
          <option value="">Select Your Brand</option>
          {rightWorkshopBookingSectionData?.brands?.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
        {errors?.brand && (
          <p className="text-red-500 text-sm mt-1">{errors?.brand}</p>
        )}

        <select
          className="border-2 w-full mt-3 py-2 px-4 text-sm text-[#868787] tracking-widest"
          value={model}
          onChange={(e) => {
            setModel(e.target.value);
            setErrors((prev) => ({ ...prev, model: "" }));
          }}
          disabled={!brand}
        >
          <option value="">Select Your Model</option>
          {brand &&
            rightWorkshopBookingSectionData?.models?.[brand]?.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
        </select>
        {errors?.model && (
          <p className="text-red-500 text-sm mt-1">{errors?.model}</p>
        )}

        <input
          type="text"
          className="border-2 w-full mt-3 py-2 px-4 placeholder:text-sm text-sm text-[#868787] tracking-widest"
          placeholder="Enter Mobile No."
          value={mobile}
          onChange={(e) => {
            if (!/^\d*$/.test(e.target.value)) return;
            setMobile(e.target.value);
            setErrors((prev) => ({ ...prev, mobile: "" }));
          }}
        />
        {errors?.mobile && (
          <p className="text-red-500 text-sm mt-1">{errors?.mobile}</p>
        )}

        <button
          className="w-full bg-[#fe9593] text-sm tracking-wide text-white py-3 mt-3 hover:bg-[#70ad69]"
          onClick={handleSubmit}
        >
          CHECK PRICE
        </button>
      </div>

      <div className="w-full sm:w-[95%]">
        <div className="text-[1.625rem] font-semibold w-full mt-8">
          {rightWorkshopBookingSectionData?.heading2}
        </div>
        <div className="bg-[#FF5757] h-0.5 w-1/12 mt-3"></div>
        <div className="text-sm font-normal text-[#777] w-full tracking-wider mt-4">
          {rightWorkshopBookingSectionData?.subheading2}
        </div>

        <div className="flex flex-wrap justify-center items-center mt-4">
          {rightWorkshopBookingSectionData?.workshop?.map(
            (item: any, index: number) => (
              <div
                key={index}
                className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] flex flex-col rounded-lg px-4 py-4 mx-2 my-3 items-center justify-center cursor-pointer transition ease-in-out duration-300 hover:shadow-[0px_0px_18.69px_2.31px_rgba(204,204,223,0.5)]"
                onClick={() => navigate(item?.directedUrl)}
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden">
                  <img
                    src={item?.imageUrl}
                    alt={`Service${index}`}
                    className="w-full h-full object-cover rounded-md pointer-events-none"
                  />
                </div>
                <div className="text-[#212428] text-sm sm:text-base font-semibold mt-3 text-center">
                  {item?.serviceName}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default RightWorkshopBookingSection;