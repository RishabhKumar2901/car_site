import { serviceStepsAndPriceData } from "../../static/CarService/serviceStepsAndPriceData";
import { parseFormattedText } from "../../utils/parseFormattedText";

const ServiceStepsAndPrice = () => {
  return (
    <div className="flex flex-col items-center mt-24">
      <div className="text-4xl font-semibold font-montserrat tracking-wide">
        {serviceStepsAndPriceData?.heading1}
      </div>

      <div className="flex flex-wrap justify-center gap-5 w-[80%]">
        {serviceStepsAndPriceData?.serviceSteps?.map((item, index) => (
          <div
            className="flex justify-center items-center gap-4 rounded-md py-2.5 px-4 border-[1px] border-[#dee2e6] mt-10 w-[18rem]"
            style={{ boxShadow: "0 0.5rem 1rem rgba(0,0,0,.15)" }}
            key={index}
          >
            <img src={item?.image} alt="Service Steps" className="w-16 h-16" />
            <div className="flex flex-col space-y-1">
              <div className="font-bold text-sm font-montserrat">
                {item.heading}
              </div>
              <div className="font-base text-xs font-montserrat leading-6 text-[#717377]">
                {item?.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        {parseFormattedText({ text: serviceStepsAndPriceData?.heading2 })}
      </div>

      <div className="flex flex-col w-[95%] lg:w-[65%]">
        <div className="flex justify-between border-[1px] rounded-t-lg border-gray-300 bg-[#f9f8fa] mt-10">
          <div className="px-6 py-2.5 font-bold text-sm font-montserrat">
            {serviceStepsAndPriceData?.table?.headers?.[0]}
          </div>
          <div className="px-6 py-2.5 font-normal text-sm font-montserrat">
            {serviceStepsAndPriceData?.table?.headers?.[1]}
          </div>
        </div>
        <div>
          {serviceStepsAndPriceData?.table?.data?.map((item, index) => (
            <div
              className="flex justify-between w-full border-x-[1px] border-b-[1px] px-6 py-2.5"
              key={index}
            >
              <div className="font-bold text-sm font-montserrat">
                {index + 1}. {item?.servicName}
              </div>
              <div className="font-normal text-sm font-montserrat">Rs. {item?.price}/-</div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ServiceStepsAndPrice;
