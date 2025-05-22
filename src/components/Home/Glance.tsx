import { glanceData } from "../../static/HomeData/glanceData";
import { parseFormattedText } from "../../utils/parseFormattedText";

const Glance = () => {
  return (
    <div className="flex flex-col items-center pt-14 pb-20 px-4 bg-[#f4f5f4]">
      <div className="text-center w-full max-w-4xl">
        {parseFormattedText({ text: glanceData?.title })}
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10 w-full">
        {glanceData?.data?.map((item, index) => (
          <div
            className="flex flex-col items-center py-8 px-6 sm:px-10 md:px-16 lg:px-20 rounded-xl bg-[#fefeff] w-full sm:w-[300px] md:w-[320px] lg:w-auto"
            style={{ boxShadow: "0 10px 20px rgba(0,0,0,.1)" }}
            key={index}
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl text-[#ec1c25] font-semibold font-montserrat text-center">
              {item?.heading}
            </div>
            <div className="text-base sm:text-lg font-semibold font-montserrat mt-3 text-center">
              {item?.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glance;