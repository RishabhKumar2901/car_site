import { leftWorkshopBookingSectionData } from "../../../static/CarWorkshopBookingData/carWorkshopBookingSection1Data/leftWorkshopBookingSectionData";
import location_img from "../../../assets/location_img.svg";
import tick_icon from "../../../assets/tick_icon.svg";
import { useLocation } from "react-router-dom";
import workshopContact_img1 from "../../../assets/workshopContact_img1.png";
import workshopContact_img2 from "../../../assets/workshopContact_img2.png";
import workshopContact_img3 from "../../../assets/workshopContact_img3.png";

const LeftWorkshopBookingSection = () => {
  const location: any = useLocation();
  return (
    <div className="w-full lg:w-1/3 flex flex-col items-center lg:border-r-[1.5px] lg:border-[#76c4d2] lg:pr-3">
      <div className="text-2xl text-center p-2 font-normal bg-[#f6f6f7] border-b-2 border-[#b0b6bb] w-full">
        {location?.state?.name}
      </div>

      <div className="flex flex-col w-10/12 mt-3">
        <div className="flex items-start space-x-3 mb-2">
          <img
            src={workshopContact_img1}
            alt="Contact Workshop"
            className="w-5 h-5 mt-1"
          />
          <div className="text-[0.813rem] text-[#212529] font-normal font-montserrat leading-[1.7rem]">
            {location?.state?.address1}
          </div>
        </div>
        <div className="flex items-start space-x-3 mb-2">
          <img
            src={workshopContact_img2}
            alt="Contact Workshop"
            className="w-5 h-5 mt-1"
          />
          <div className="text-[0.813rem] text-[#212529] font-normal font-montserrat leading-[1.7rem]">
            {location?.state?.address2}
          </div>
        </div>
        <div className="flex items-start space-x-3 mb-2">
          <img
            src={workshopContact_img3}
            alt="Contact Workshop"
            className="w-5 h-5 mt-1"
          />
          <a
            href={`tel:${location?.state?.mobileno}`}
            className="text-[0.813rem] text-[#007bff] font-normal font-montserrat leading-[1.7rem]"
          >
            {location?.state?.mobileno}
          </a>
        </div>

        <div className="flex space-x-3 mt-2">
          <a
            className="bg-[#007bff] text-white rounded w-fit text-[0.813rem] py-2 px-6"
            href={leftWorkshopBookingSectionData?.mobileNo}
          >
            Call
          </a>

          <a
            className="bg-[#007bff] text-white rounded w-fit text-[0.813rem] py-2 px-6 flex items-center"
            href={leftWorkshopBookingSectionData?.location}
          >
            Map{" "}
            <img
              src={location_img}
              alt="Location"
              className="w-3 h-3 ml-1"
            ></img>
          </a>
        </div>

        <div className="flex flex-col mt-4">
          <div className="flex space-x-3 items-center">
            <img
              src={leftWorkshopBookingSectionData?.businessHour?.image}
              alt="Contact Workshop"
              className="w-6 h-6"
            />
            <div className="text-[0.813rem] text-[#212529] font-bold font-montserrat leading-[1.7rem]">
              {leftWorkshopBookingSectionData?.businessHour?.heading}
            </div>
          </div>
          <ul className="list-disc pl-7">
            {leftWorkshopBookingSectionData?.businessHour?.data?.map(
              (item, index) => (
                <li
                  key={index}
                  className="text-[0.813rem] text-[#212529] font-montserrat leading-[1.7rem]"
                >
                  <span className="font-bold">{item?.day}:</span> {item?.time}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex flex-col mt-4">
          <div className="flex space-x-3 items-center">
            <img
              src={leftWorkshopBookingSectionData?.paymentOptions?.image}
              alt="Contact Workshop"
              className="w-6 h-6"
            />
            <div className="text-[0.813rem] text-[#212529] font-bold font-montserrat leading-[1.7rem]">
              {leftWorkshopBookingSectionData?.paymentOptions?.heading}
            </div>
          </div>
          <div className="pl-7 grid lg:grid-cols-2">
            {leftWorkshopBookingSectionData?.paymentOptions?.options?.map(
              (item, index) => (
                <div className="flex space-x-3 items-center" key={index}>
                  <img
                    src={tick_icon}
                    alt="Contact Workshop"
                    className="w-3 h-3"
                  />
                  <div className="text-[0.813rem] text-[#212529] font-montserrat leading-[1.7rem]">
                    {item}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftWorkshopBookingSection;
