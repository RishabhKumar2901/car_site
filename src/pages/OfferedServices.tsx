import { offeredServicesData } from "../static/offeredServicesData";

const OfferedServices = () => {
  return (
    <div className="flex flex-col justify-center items-center font-montserrat text-center mt-10">
      <div className="font-semibold text-4xl text-[#222222]">
        {" "}
        Services We Offer
      </div>
      <div className="font-normal text-base text-[#5c5c5d] my-5 w-[46%]">
        Find the best service packages for your car. Select from a wide range of
        car services, from general service to{" "}
        <a href="#" className="text-[#f04046]">
          car wash,
        </a>{" "}
        accidental repair to custom repair, cashless insurance claims, and much
        more.
      </div>
      <div className="flex w-3/4 flex-wrap justify-center items-center">
      {offeredServicesData?.map((item, index) => (
        <div className="flex flex-col bg-[#e8e8e8] rounded-lg px-6 py-3 border-2 border-[#d6d7d6] mx-2 my-3 items-center justify-center w-[13.5%] flex-wrap" key={index}>
          <img src={item?.imageUrl} alt={`Service${index}`} className="w-28 h-28" />
          <div className="text-[#212428] font-semibold whitespace-nowrap">{item?.serviceName}</div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default OfferedServices;
