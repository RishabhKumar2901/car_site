import { glanceData } from "../../static/HomeData/glanceData";
import { parseFormattedText } from "../../utils/parseFormattedText";

const Glance = () => {
  return (
    <div className="flex flex-col items-center pt-14 pb-20 bg-[#f4f5f4]">
      <div>{parseFormattedText({ text: glanceData?.title })}</div>

      <div className="flex gap-5">
        {glanceData?.data?.map((item, index) => (
          <div
            className="flex flex-col items-center py-10 px-20 mt-10 rounded-xl bg-[#fefeff]"
            style={{ boxShadow: "0 10px 20px rgba(0,0,0,.1)" }}
            key={index}
          >
            <div className="text-5xl text-[#ec1c25] font-semibold font-montserrat">
              {item?.heading}
            </div>
            <div className="text-lg font-semibold font-montserrat mt-3">
              {item?.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glance;
