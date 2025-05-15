import { useState } from "react";
import petrol_img from "../assets/petrol_img.png";
import disel_img from "../assets/disel_img.png";
import cng_img from "../assets/cng_img.png";
import { otherModelsData } from "../static/otherModelsData";
import right_arrow from "../assets/right_arrow.svg";

const fuelIcons: any = {
  PETROL: petrol_img,
  DISEL: disel_img,
  CNG: cng_img,
};

const OtherModels = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center -mt-20 bg-[#f9f8f8] py-10 w-full">
      <div
        className="text-xl md:text-2xl font-normal p-3 rounded-lg font-montserrat text-[#333] bg-[#cee3ff] cursor-pointer flex justify-between md:justify-center items-center w-[95%] md:relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          Other Models from Maruti Suzuki
        </div>
        <div
          className={`transform transition-transform duration-300 md:absolute md:right-4 ${
            isOpen ? "rotate-90" : "-rotate-90"
          }`}
        >
          <img src={right_arrow} alt="Arrow" className="w-6 h-6" />
        </div>
      </div>

      <div
        className={`w-[95%] overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[1000px] mt-5" : "max-h-0"
        }`}
      >
        <div className="bg-[#ffffff] p-5 rounded-lg flex flex-wrap gap-5 h-[18.75rem] overflow-auto justify-center">
          {otherModelsData?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 py-5 px-[2.89rem] rounded-xl border-[1px] border-[#ddd] w-full md:w-[18.4rem] hover:scale-105 transition ease-in"
              style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, .1)" }}
            >
              <img
                src={item?.image}
                alt="Model"
                className="w-[3.314rem] h-[2.268rem]"
              />
              <div className="font-bold text-base text-[#333]">
                {item?.name}
              </div>
              <div className="flex gap-6 flex-wrap justify-center">
                {item?.fuel?.map((fuelType, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center rounded-md cursor-pointer p-2 w-[3.5rem]"
                    style={{ boxShadow: "lightgrey 0px 0px 3px 1px" }}
                  >
                    <img
                      src={fuelIcons?.[fuelType]}
                      alt={fuelType}
                      className="w-[1.875rem] h-[1.875rem]"
                    />
                    <div className="text-[0.656rem] mt-1 text-center">
                      {fuelType}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherModels;
