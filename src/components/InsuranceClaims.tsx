import { insuranceClaimData } from "../static/insuranceClaimData";
import { parseFormattedText } from "../utils/parseFormattedText";

const InsuranceClaims = () => {
  return (
    <div className="mt-24 w-full flex flex-col items-center justify-center font-montserrat">
      <div className="flex flex-col items-center bg-[#fbfbfb] py-10 w-full">
        <div className="w-[95%] xl:w-[70%] flex flex-col items-center">
          <div className="text-[#ed1c24] font-roboto text-lg font-bold text-center">
            //&nbsp;&nbsp;&nbsp;&nbsp;{insuranceClaimData?.title}
            &nbsp;&nbsp;&nbsp;&nbsp;//
          </div>
          <div className="text-2xl lg:text-4xl font-semibold mt-4 font-montserrat mb-10">
            {insuranceClaimData?.heading1}
          </div>
          <div>
            {parseFormattedText(insuranceClaimData?.description1)}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-10 w-full">
        <div className="w-[95%] xl:w-[70%] flex flex-col">
          <div className="flex flex-col items-center">
          <div className="text-2xl lg:text-4xl font-semibold mt-4 font-montserrat mb-10">
            {insuranceClaimData?.heading2}
          </div>

          <img src={insuranceClaimData?.description2} alt="Banner" className="w-[40rem] h-[10rem] lg:w-[60.938rem] lg:h-[19.73rem]" />
          </div>

          <div className="text-2xl lg:text-4xl font-semibold mt-16 font-montserrat">
            {insuranceClaimData?.heading3}
          </div>

          <div className="mt-5">
            {parseFormattedText(insuranceClaimData?.description3, "mt-2")}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-[#fbfbfb] py-10 w-full">
        <div className="w-[95%] xl:w-[70%] flex flex-col">
          <div className="text-2xl lg:text-4xl font-semibold mt-4 font-montserrat">
            {insuranceClaimData?.heading4}
          </div>

          <div className="mt-5">
            {parseFormattedText(insuranceClaimData?.description4?.section1)}
          </div>

          <div className="mt-6 pl-10">
            {parseFormattedText(insuranceClaimData?.description4?.section2, "mt-2")}
          </div>

          <div className="text-2xl lg:text-4xl font-semibold mt-20 font-montserrat">
            {parseFormattedText(insuranceClaimData?.heading5)}
          </div>

          <div className="mt-5">
            {parseFormattedText(insuranceClaimData?.description5?.section1)}
          </div>

          <div className="mt-6 pl-10">
            {parseFormattedText(insuranceClaimData?.description5?.section2, "mt-2")}
          </div>
        </div>
      </div>

    </div>
  );
};

export default InsuranceClaims;
