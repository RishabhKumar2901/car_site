import { warrantyData } from "../static/warrantyData";
import { parseFormattedText } from "../utils/parseFormattedText";

const WarrantyPlan = () => {
  return (
    <div className="mt-24 w-full flex flex-col items-center justify-center font-montserrat mb-10">
      <div className="w-[95%] xl:w-[70%] flex flex-col items-center">
        <div className="text-[#ed1c24] font-roboto text-lg font-bold">
          //&nbsp;&nbsp;&nbsp;&nbsp;{warrantyData?.warrantyplan?.title}&nbsp;&nbsp;&nbsp;&nbsp;//
        </div>
        <div className="text-2xl lg:text-4xl font-semibold mt-4 font-montserrat mb-10">
          {warrantyData?.warrantyplan?.heading}
        </div>
        <div className="text-sm lg:text-base text-[#737373] leading-[1.8rem]">
          {parseFormattedText(warrantyData?.warrantyplan?.section1)}
        </div>
        <div className="border-t-[1px] border-[#e9e9e9] w-full my-6"></div>
        <div className="text-sm lg:text-base text-[#737373] leading-[1.8rem]">
          {parseFormattedText(warrantyData?.warrantyplan?.section2)}
        </div>
        <div className="border-t-[1px] border-[#e9e9e9] w-full my-6"></div>
        <img src={warrantyData?.warrantyplan?.banner} alt="Banner" className="w-[54.094rem] h-[36.229rem] pointer-events-none" />
        <div className="border-t-[1px] border-[#e9e9e9] w-full my-6"></div>
        <div className="text-sm lg:text-base text-[#737373] leading-[1.8rem]">
          {parseFormattedText(warrantyData?.warrantyplan?.section3)}
        </div>
      </div>
    </div>
  );
};

export default WarrantyPlan;
