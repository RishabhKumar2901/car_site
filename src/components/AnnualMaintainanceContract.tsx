import { amcData } from "../static/amcData";
import { parseFormattedText } from "../utils/parseFormattedText";

const AnnualMaintainanceContract = () => {
  return (
    <div className="mt-24 w-full flex flex-col items-center justify-center font-montserrat mb-10">
      <div className="w-[95%] xl:w-[70%] flex flex-col items-center">
        <div className="text-[#ed1c24] font-roboto text-lg font-bold">
          //&nbsp;&nbsp;&nbsp;&nbsp;{amcData?.annualMaintainanceContractData?.title}&nbsp;&nbsp;&nbsp;&nbsp;//
        </div>
        <div className="text-2xl lg:text-4xl font-semibold mt-4 font-montserrat mb-10">
          {amcData?.annualMaintainanceContractData?.heading}
        </div>
        <div>
          {parseFormattedText(amcData?.annualMaintainanceContractData?.section1)}
        </div>
        <div className="border-t-[1px] border-[#e9e9e9] w-full my-6"></div>
        <div>
          {parseFormattedText(amcData?.annualMaintainanceContractData?.section2)}
        </div>
        <div className="border-t-[1px] border-[#e9e9e9] w-full my-6"></div>
        <div>
          {parseFormattedText(amcData?.annualMaintainanceContractData?.section3)}
        </div>
      </div>
    </div>
  );
};

export default AnnualMaintainanceContract;
