import { useNavigate } from "react-router-dom";
import { rightWorkshopBookingSectionData } from "../../../static/CarWorkshopBookingData/carWorkshopBookingSection1Data/rightWorkshopBookingSectionData";

const RightWorkshopBookingSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-2/3 flex flex-col items-center lg:pl-3 mt-6 lg:mt-0 px-2">
      <div
        className="w-full px-6 sm:px-8 pt-6 pb-12 rounded-xl"
        style={{
          boxShadow: "0px 0px 18.69px 2.31px rgba(204, 204, 223, 0.5)",
        }}
      >
        <div className="text-2xl font-semibold w-full">
          {rightWorkshopBookingSectionData?.heading1}
        </div>
        <div className="text-sm font-normal text-[#777] w-full tracking-wider">
          {rightWorkshopBookingSectionData?.subheading1}
        </div>

        <input
          type="text"
          className="border-2 w-full mt-3 py-2 px-4 placeholder:text-sm placeholder:tracking-widest"
          placeholder="Select Your Brand"
        />
        <input
          type="text"
          className="border-2 w-full mt-3 py-2 px-4 placeholder:text-sm placeholder:tracking-widest"
          placeholder="Select Your Model"
        />
        <input
          type="text"
          className="border-2 w-full mt-3 py-2 px-4 placeholder:text-sm placeholder:tracking-widest"
          placeholder="Enter Mobile No."
        />

        <button className="w-full bg-[#fe9593] text-sm tracking-wide text-white py-3 mt-3 hover:bg-[#70ad69]">
          CHECK PRICE
        </button>
      </div>

      <div className="w-full sm:w-[95%]">
        <div className="text-[1.625rem] font-semibold w-full mt-8">
          {rightWorkshopBookingSectionData?.heading2}
        </div>
        <div className="text-sm font-normal text-[#777] w-full tracking-wider mt-4">
          {rightWorkshopBookingSectionData?.subheading2}
        </div>

        <div className="flex flex-wrap justify-center items-center mt-4">
          {rightWorkshopBookingSectionData?.workshop?.map((item: any, index: any) => (
            <div
              key={index}
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] flex flex-col rounded-lg px-4 py-4 mx-2 my-3 items-center justify-center cursor-pointer transition ease-in-out duration-300 hover:shadow-[0px_0px_18.69px_2.31px_rgba(204,204,223,0.5)]"
              onClick={() => navigate(item?.directedUrl)}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden">
                <img
                  src={item?.imageUrl}
                  alt={`Service${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="text-[#212428] text-sm sm:text-base font-semibold mt-3 text-center">
                {item?.serviceName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightWorkshopBookingSection;