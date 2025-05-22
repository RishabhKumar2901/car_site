import { whyChooseUsData } from "../../static/HomeData/WhyChooseUsData";
import { parseFormattedText } from "../../utils/parseFormattedText";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <div className="w-[95%] xl:w-[70%]">
        <div className="text-center">
          {parseFormattedText({ text: whyChooseUsData?.title })}
        </div>
        <div className="mt-6">
          {parseFormattedText({ text: whyChooseUsData?.text, boldType: "font-semibold" })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;