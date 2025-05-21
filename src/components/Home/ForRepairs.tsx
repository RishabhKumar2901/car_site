import { forRepairsData } from "../../static/HomeData/forRepairsData";
import { parseFormattedText } from "../../utils/parseFormattedText";

const ForRepairs = () => {
  return (
    <div className="flex flex-col items-center py-10 md:-mt-20 bg-[#fefeff] px-4">
      <div className="text-center">
        {parseFormattedText({ text: forRepairsData?.title })}
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full md:w-[90%] lg:w-[70%] mt-6">
        <img
          src={forRepairsData?.image}
          alt="Repair Image"
          className="w-full md:w-[40%] h-auto max-h-[19rem] object-cover rounded-lg"
        />
        <div className="flex flex-col w-full justify-between">
          <div className="font-montserrat text-[#555] tracking-wide leading-8">
            {parseFormattedText({ text: forRepairsData?.text })}
          </div>

          <button className="border p-4 w-full md:w-1/2 lg:w-1/3 mt-4 bg-[#ed1d25] text-[#fefafa] font-bold">
            Join Our Network
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForRepairs;