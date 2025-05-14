import { evFleetManagementData } from "../static/evFleetManagementData";
import { parseFormattedText } from "../utils/parseFormattedText";

const EVFleetManagement = () => {
  return (
    <div className="mt-24 w-full flex flex-col items-center justify-center font-montserrat">
      <div className="flex flex-col items-center bg-[#fbfbfb] py-10 w-full">
        <div className="w-[95%] xl:w-[70%] flex flex-col">
          <div className="text-2xl lg:text-4xl font-semibold mt-4 font-montserrat">
            {parseFormattedText(evFleetManagementData?.section1, undefined, "#52ae48")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVFleetManagement;
