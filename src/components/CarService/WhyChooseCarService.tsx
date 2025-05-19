import { whyChooseCarServiceData } from "../../static/CarService/whyChooseCarServiceData";
import { parseFormattedText } from "../../utils/parseFormattedText";

const WhyChooseCarService = () => {
  return (
    <div className="flex flex-col items-center">
        <div className="mt-20 text-center w-[68%]">
          {parseFormattedText({ text: whyChooseCarServiceData?.title })}
        </div>

        <div className="flex gap-5 flex-wrap mt-12 justify-center w-[95%] lg:w-[75%]">
          {whyChooseCarServiceData?.services?.map((item, index) => (
            <div
              className="flex flex-col items-center rounded-lg w-[16rem]"
              style={{ boxShadow: "0 0.5rem 1rem rgba(0,0,0,.15)" }}
              key={index}
            >
              <div className="bg-[#fefeff] p-2">
                <img
                  src={item?.image}
                  alt="Why Choose Service"
                  className="w-14 h-14"
                />
              </div>
              <div className="flex flex-col text-center p-2 bg-[#f9f8fa] w-full border-t-[1px] border-[#e4e5e7]">
                <div className="font-bold font-montserrat">{item?.heading}</div>
                <div className="font-montserrat text-[#919191] mt-1">{item?.text}</div>
              </div>
            </div>
          ))}
        </div>

<div className="w-[95%] lg:w-[70%]">
        <div className="mt-20">
          {parseFormattedText({
            text: whyChooseCarServiceData?.carProblems?.heading,
          })}
        </div>
        <div className="mt-7">
          {parseFormattedText({
            text: whyChooseCarServiceData?.carProblems?.text,
            boldType: "font-bold",
            margin: "mb-1",
          })}
        </div>
        </div>
      </div>
  );
};

export default WhyChooseCarService;
