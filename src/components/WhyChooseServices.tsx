import { whyChooseServicesData } from "../static/whyChooseServicesData";
import { parseFormattedText } from "../utils/parseFormattedText";

const WhyChooseServices = () => {
  return (
    <div className="pt-32 w-full flex flex-col items-center">
      <div className="w-8/12">
        <div className="text-[1.75rem] font-normal ">
          {whyChooseServicesData?.heading}
        </div>

        <div>{parseFormattedText({ text: whyChooseServicesData?.text })}</div>
      </div>
    </div>
  );
};

export default WhyChooseServices;
