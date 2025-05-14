import { evFleetManagementData } from "../static/evFleetManagementData";
import { parseFormattedText } from "../utils/parseFormattedText";

const EVFleetAdvantages = () => {
  return (
    <div className="mt-24 w-full flex flex-col items-center justify-center font-montserrat">
      <div className="flex flex-col items-center bg-[#fbfbfb] py-10 w-full">
        <div className="w-[95%] xl:w-[70%] flex flex-col">
          <div className="text-2xl lg:text-4xl font-semibold mt-4 font-montserrat text-center">
            {parseFormattedText(
              evFleetManagementData?.section2?.heading,
              undefined,
              "#52ae48"
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            {evFleetManagementData?.section2?.data?.map((item, index) => (
              <div
                className="w-full md:w-[47%] h-fit"
                style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, .15)" }}
                key={index}
              >
                <div className="bg-[#52ae48] pt-3 pb-4 px-3 rounded-t-md text-[#ffffff] text-base font-bold">
                  {item?.advantage}
                </div>
                <div className="pt-3 pb-4 px-3 font-normal text-base text-[#919190] leading-5">
                  {item?.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[95%] xl:w-[70%] flex flex-col mt-20">
          <div className="text-2xl lg:text-4xl font-semibold mt-4 font-montserrat text-center">
            {parseFormattedText(
              evFleetManagementData?.section3?.heading,
              undefined,
              "#52ae48"
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 justify-center w-full">
            {evFleetManagementData?.section3?.data?.map((item, index) => (
              <div
                className="w-full md:w-[45%] h-fit border-[1px] border-[#b3b9c1] rounded-lg"
                key={index}
              >
                <div className="bg-[#52ae48] pt-3 pb-4 px-4 rounded-t-md text-[#ffffff] text-base font-bold">
                  {item?.advantage}
                </div>
                <div className="pt-3 pb-4 px-4 font-normal text-sm text-[#6b6f70] bg-[#f8f9fa] rounded-b-lg leading-5">
                  {item?.text}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EVFleetAdvantages;
