import { lubricantsData } from "../static/lubricantsData";
import { parseFormattedText } from "../utils/parseFormattedText";

const LubricantsComponent = () => {
  return (
    <div className="pt-28 flex flex-col items-center px-4">
      <div className="w-full max-w-6xl flex flex-col">
        <div className="flex flex-col items-center w-full">
          <img
            src={lubricantsData?.image}
            alt="LubricantImg1"
            className="w-full max-w-xl h-auto object-contain"
          />

          <button className="border p-3 w-44 mt-4 bg-[#ed1d25] text-white font-bold text-sm sm:text-base">
            Book Service
          </button>
        </div>

        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-14 text-center md:text-left">
          {lubricantsData?.heading}
        </div>

        <div className="mt-4 w-full">
          {parseFormattedText(lubricantsData?.text, "mb-6")}
        </div>

        <div className="flex justify-center">
          <video
            src="https://vehiclecare.s3.us-east-2.amazonaws.com/vc_assets/TE_Powai_Quartz.mp4"
            controls
            className="rounded-xl mt-6 w-full max-w-4xl"
          />
        </div>
      </div>

      <div className="bg-[#f4f8f9] py-10 flex flex-col items-center mt-28 w-full">
        {lubricantsData?.services?.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 w-full max-w-6xl mt-10 px-4 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item?.image}
              alt="Service"
              className="w-full sm:w-80 md:w-96 h-auto rounded-xl object-contain"
            />
            <div className="flex flex-col text-center md:text-left">
              <div className="text-xl sm:text-2xl text-[#ed1d25] font-bold">
                {item?.text1}
              </div>
              <div className="text-sm text-[#747474] leading-relaxed mt-2">
                {item?.text2}
              </div>
              <div className="text-base sm:text-lg text-black font-bold mt-2">
                {item?.text3}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LubricantsComponent;
