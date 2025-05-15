import { whyChooseServicesData } from "../static/whyChooseServicesData";
import { parseFormattedText } from "../utils/parseFormattedText";

const WhyChooseServices = () => {
  return (
    <div className="pt-10 w-full flex flex-col items-center mb-5">
      <div className="w-8/12">
        <div className="text-[1.75rem] font-normal font-montserrat">
          {whyChooseServicesData?.title}
        </div>

        <div className="text-xl font-semibold mt-4 font-montserrat">
          {whyChooseServicesData?.heading1}
        </div>

        <div className="mt-3 pl-4">
          {parseFormattedText({
            text: whyChooseServicesData?.section1,
            leadingSize: "leading-[1rem]",
          })}
        </div>

        <div className="text-xl font-semibold mt-6 font-montserrat">
          {whyChooseServicesData?.heading2}
        </div>

        <div className="mt-3">
          {parseFormattedText({
            text: whyChooseServicesData?.section2,
            leadingSize: "leading-[1rem]",
            boldType: "font-bold",
            trackingType: "tracking-normal",
            margin: "mb-0"
          })}
        </div>

        <div className="text-xl font-semibold mt-6 font-montserrat">
          {whyChooseServicesData?.heading3}
        </div>

        <div className="mt-3">
          {parseFormattedText({
            text: whyChooseServicesData?.section3,
            leadingSize: "leading-[1.5rem]",
          })}
        </div>
      </div>

      <div className="w-[78%] mt-20">
        <div className="text-xl font-bold text-[#777777] mb-4">
          {whyChooseServicesData?.table?.heading}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                {whyChooseServicesData?.table?.headers?.map((item, index) => (
                  <th
                    className="border border-gray-300 px-4 py-2 text-left font-semibold text-sm text-[#777777]"
                    key={index}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm text-[#777777]">
              {whyChooseServicesData?.table?.data?.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 align-left">
                    {item?.type}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 align-left">
                    {item?.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 align-left">
                    {item?.when}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseServices;
