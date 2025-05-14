import { useNavigate } from "react-router-dom";

type Services = {
  services: any;
  description?: string;
};

const OfferedServices = ({ services, description }: Services) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center font-montserrat text-center mt-10">
      <div className="font-semibold text-2xl lg:text-4xl text-[#222222]">
        Services We Offer
      </div>
      {description ? (
        <></>
      ) : (
        <div className="font-normal text-base text-[#5c5c5d] my-5 w-[46%] hidden lg:block">
          Find the best service packages for your car. Select from a wide range
          of car services, from general service to{" "}
          <a href="#" className="text-[#f04046]">
            car wash,
          </a>{" "}
          accidental repair to custom repair, cashless insurance claims, and
          much more.
        </div>
      )}
      <div className={`flex w-5/6 flex-wrap justify-center items-center ${description && "mt-6"}`}>
        {services?.map((item: any, index: any) => (
          <div
            className="flex flex-col bg-[#e8e8e8] rounded-lg px-6 lg:px-0 py-3 border-2 border-[#d6d7d6] mx-2 my-3 items-center justify-center lg:w-[13.5%] flex-wrap hover:scale-110 cursor-pointer transition ease-in"
            key={index}
            onClick={() => navigate(item?.directedUrl)}
          >
            <div className="w-28 h-28 overflow-hidden">
              <img
                src={item?.imageUrl}
                alt={`Service${index}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-[#212428] font-semibold mt-3">
              {item?.serviceName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferedServices;
